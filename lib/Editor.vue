<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  defineExpose,
} from "vue";
import Quill from "quill";
import Delta from "quill-delta";
import { toolbarOptions } from "./options";

import * as Parchment from "parchment";

let quill;
let options;
const editor = ref(null);

const props = defineProps({
  content: {
    type: [String, Object],
    default: "",
  },
  contentType: {
    type: String,
    default: "delta",
    validator: (value) => {
      return ["delta", "html", "text"].includes(value);
    },
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  theme: {
    type: String,
    default: "snow",
    validator: (value) => {
      return ["snow", "bubble", ""].includes(value);
    },
  },
  toolbar: {
    type: [String, Array, Object],
    required: false,
    validator: (value) => {
      if (typeof value === "string" && value !== "") {
        return value.charAt(0) === "#"
          ? true
          : Object.keys(toolbarOptions).indexOf(value) !== -1;
      }
      return true;
    },
  },
  modules: {
    type: Object,
    required: false,
  },
  options: {
    type: Object,
    required: false,
  },
  globalOptions: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits([
  "textChange",
  "selectionChange",
  "editorChange",
  "update:content",
  "blur",
  "focus",
  "ready",
]);

onMounted(() => {
  initialize();
});

onBeforeUnmount(() => {
  quill = null;
});

const initialize = () => {
  if (!editor.value) return;
  options = composeOptions();
  console.log(options);
  // Register modules
  if (props.modules) {
    if (Array.isArray(props.modules)) {
      for (const module of props.modules) {
        registerModule(`modules/${module.name}`, module.module);
      }
    } else {
      registerModule(`modules/${props.modules.name}`, props.modules.module);
    }
  }
  // Create new Quill instance
  quill = new Quill(editor.value, options);
  // Set editor content
  setContents(props.content);
  // Set event handlers
  quill.on("text-change", handleTextChange);
  quill.on("selection-change", handleSelectionChange);
  quill.on("editor-change", handleEditorChange);
  // Remove editor class when theme changes
  if (props.theme !== "bubble") editor.value.classList.remove("ql-bubble");
  if (props.theme !== "snow") editor.value.classList.remove("ql-snow");

  // Fix clicking the quill toolbar is detected as blur event
  let toolbar = quill.getModule("toolbar");
  if (toolbar) {
    toolbar.container.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });
  }
  // quill
  //   .getModule('toolbar')
  //   ?.container.addEventListener('mousedown', (e: MouseEvent) => {
  //     e.preventDefault()
  //   })
  // Emit ready event
  emit("ready", quill);
};

const registerModule = (moduleName, module) => {
  if (Quill?.imports && moduleName in Quill.imports) {
    return;
  }
  Quill.register(moduleName, module);
};

const composeOptions = () => {
  const clientOptions = {};
  if (props.theme !== "") clientOptions.theme = props.theme;
  if (props.readOnly) clientOptions.readOnly = props.readOnly;
  if (props.placeholder) clientOptions.placeholder = props.placeholder;

  if (props.toolbar && props.toolbar !== "") {
    clientOptions.modules = {
      toolbar: (() => {
        if (typeof props.toolbar === "object") {
          return props.toolbar;
        } else if (typeof props.toolbar === "string") {
          const str = props.toolbar;
          return str.charAt(0) === "#"
            ? props.toolbar
            : toolbarOptions[props.toolbar];
        }
        return;
      })(),
    };
  }
  if (props.modules) {
    const modules = (() => {
      const modulesOption = {};
      if (Array.isArray(props.modules)) {
        for (const module of props.modules) {
          modulesOption[module.name] = module.options ?? {};
        }
      } else {
        modulesOption[props.modules.name] = props.modules.options ?? {};
      }
      return modulesOption;
    })();

    clientOptions.modules = Object.assign({}, clientOptions.modules, modules);
  }
  if (props.globalOptions?.modules) {
    clientOptions.modules = Object.assign(
      {},
      clientOptions.modules,
      props.globalOptions.modules
    );
  }

  let combined = Object.assign(
    {},
    props.globalOptions,
    props.options,
    clientOptions
  );
  return combined;
};

const maybeClone = (delta) => {
  return typeof delta === "object" && delta ? delta.slice() : delta;
};

const deltaHasValuesOtherThanRetain = (delta) => {
  return Object.values(delta.ops).some(
    (v) => !v.retain || Object.keys(v).length !== 1
  );
};

let internalModel;

const internalModelEquals = (against) => {
  if (typeof internalModel === typeof against) {
    if (against === internalModel) {
      return true;
    }
    // Ref/Proxy does not support instanceof, so do a loose check
    if (
      typeof against === "object" &&
      against &&
      typeof internalModel === "object" &&
      internalModel
    ) {
      return !deltaHasValuesOtherThanRetain(internalModel.diff(against));
    }
  }
  return false;
};

const handleTextChange = (delta, oldContents, source) => {
  internalModel = maybeClone(getContents());
  // Update v-model:content when text changes
  if (!internalModelEquals(props.content)) {
    emit("update:content", internalModel);
  }
  emit("textChange", { delta, oldContents, source });
};

const isEditorFocus = ref();
const handleSelectionChange = (range, oldRange, source) => {
  // Set isEditorFocus if quill.hasFocus()
  isEditorFocus.value = !!quill?.hasFocus();
  emit("selectionChange", { range, oldRange, source });
};

watch(isEditorFocus, (focus) => {
  if (focus) emit("focus", editor);
  else emit("blur", editor);
});

const handleEditorChange = (...args) => {
  if (args[0] === "text-change")
    emit("editorChange", {
      name: args[0],
      delta: args[1],
      oldContents: args[2],
      source: args[3],
    });
  if (args[0] === "selection-change")
    emit("editorChange", {
      name: args[0],
      range: args[1],
      oldRange: args[2],
      source: args[3],
    });
};

const getEditor = () => {
  return editor.value;
};

const getToolbar = () => {
  let toolbar = quill?.getModule("toolbar");
  return toolbar?.container;

  // return quill?.getModule("toolbar")?.container;
};

const getQuill = () => {
  if (quill) return quill;
  else
    throw `The quill editor hasn't been instantiated yet,
                        make sure to call this method when the editor ready
                        or use v-on:ready="onReady(quill)" event instead.`;
};

const getContents = (index, length) => {
  if (props.contentType === "html") {
    return getHTML();
  } else if (props.contentType === "text") {
    return getText(index, length);
  }
  return quill?.getContents(index, length);
};

const setContents = (content, source = "api") => {
  const normalizedContent = !content
    ? props.contentType === "delta"
      ? new Delta()
      : ""
    : content;
  if (props.contentType === "html") {
    setHTML(normalizedContent);
  } else if (props.contentType === "text") {
    setText(normalizedContent, source);
  } else {
    quill?.setContents(normalizedContent, source);
  }
  internalModel = maybeClone(normalizedContent);
};

const insertText = (index, text, format = "", value = null, source = "api") => {
  quill?.insertText(index, text, format, value, source);
};

const insertEmbed = (index, type, value, source = "api") => {
  quill?.insertEmbed(index, type, value, source);
};

const getText = (index, length) => {
  return quill?.getText(index, length) ?? "";
};

const setText = (text, source = "api") => {
  quill?.setText(text, source);
};

const getHTML = () => {
  return quill?.root.innerHTML ?? "";
};

const setHTML = (html) => {
  if (quill) quill.root.innerHTML = html;
};

const pasteHTML = (html, source = "api") => {
  const delta = quill?.clipboard.convert(html);
  if (delta) quill?.setContents(delta, source);
};

const focus = () => {
  quill?.focus();
};

const reinit = () => {
  nextTick(() => {
    if (!slots.toolbar && quill) {
      // NOTE: this is weird
      console.log(quill.getModule("toolbar"));
      // getToolbar().remove()
      let toolbar = quill.getModule("toolbar");
      toolbar?.container.remove();
    }
    initialize();
  });
};

watch(
  () => props.content,
  (newContent) => {
    if (!quill || !newContent || internalModelEquals(newContent)) return;

    // Restore the selection and cursor position after updating the content
    const selection = quill.getSelection();
    if (selection) {
      nextTick(() => quill?.setSelection(selection));
    }
    setContents(newContent);
  },
  { deep: true }
);

watch(
  () => props.enable,
  (newValue) => {
    if (quill) quill.enable(newValue);
  }
);

defineExpose({
  editor,
  getEditor,
  getToolbar,
  getQuill,
  getContents,
  setContents,
  getHTML,
  setHTML,
  pasteHTML,
  focus,
  getText,
  setText,
  reinit,
  insertText,
  insertEmbed,
});
</script>

<template>
  <slot name="toolbar"></slot>
  <div ref="editor"></div>
</template>
