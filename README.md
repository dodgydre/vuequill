## Fork of [@vueup/vuequill](https://github.com/vueup/vue-quill) using [Quill@rc](https://github.com/quilljs/quill)

### Installation

npm install @dodgydre/vuequill@latest --save

### Usage

in main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import "quill/dist/quill.snow.css";
import { Editor } from "@dodgydre/vuequill";

const globalOptions = {
   debug: "warn",
   modules: {},
   placeholder: "Something to add...",
   theme: "snow",
};

Editor.props.globalOptions.default = () => globalOptions;

createApp(App).component("Editor", Editor).mount('#app');

```

### Option 1

Use it in a vue component file

```js
<script setup>
   import { ref } from "vue"
   const body = ref(null)
</script>
<template>
   <Editor ref="editor" v-model:content="body"
   toolbar="essential">
   </Editor>
</template>
```

### Option 2

Or create an Editor component if you want to add extra options

QuillEditor.vue:

```js 
<script setup>
import { ref, toRef } from "vue";
const props = defineProps({
  toolbar: {
    type: String,
    required: false,
    validator: (value) => {
      return ["essential", "minimal", "full"].indexOf(value);
    },
  },
});
const body = defineModel();
const editorBody = toRef(body);

const ready = () => {
   console.log(editor);
   console.log(editor.value.getEditor());
}

</script>

<template>
   <Editor
      ref="editor"
      v-model:content="body"
      contentType="html"
      toolbar="#toolbar"
      @ready="ready"
    >
      <template #toolbar>
        <div id="toolbar">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-list" value="ordered"></button>
          <button class="ql-indent" value="+1"></button>
          <button class="ql-indent" value="-1"></button>

          <select class="ql-color"></select>
          <select class="ql-background"></select>

          <select class="ql-size">
            <option value="small"></option>
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>

          <button class="ql-clean"><button>
          <button class="ql-image"><button>
          <button class="ql-video"><button>
          <button class="ql-link"></button>

          
        </div>
      </template>
    </Editor>
</template>
```

And add it to other components

```js
<script setup>
   import QuillEditor from "./QuillEditor.vue"

   const body = ref(null)
</script>

<template>
   <div class="container">
      <QuillEditor v-model="body" />
   </div>
</template>
```

## Example

In the /example folder is an example of both options.

```console
npm install
npm run demo:dev
```

The QuillEditor.vue has an emoji panel component added to the toolbar showing how to communicate between vue and quill. insertText() and insertEmbed() functions were added to the original vuequill package to allow this.