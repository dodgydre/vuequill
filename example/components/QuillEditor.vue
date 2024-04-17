<script setup>
import { ref, toRef } from "vue";
import EmojiPanel from "./EmojiPanel.vue";

const editor = ref(null);

const body = defineModel();
const editorbody = toRef(body);
const showEmojiPanel = ref(false);

const emojiSelected = (emoji) => {
  let savedIndex = editor.value.getQuill().selection.savedRange.index;

  editor.value.insertText(savedIndex, emoji.emoji);
  closeEmojiPanel();
};

const closeEmojiPanel = () => {
  showEmojiPanel.value = !showEmojiPanel.value;
};
</script>

<template>
  <div>
    <Editor
      v-model:content="editorbody"
      contentType="html"
      toolbar="#toolbar"
      ref="editor"
    >
      <template #toolbar>
        <div id="toolbar">
          <!-- Add font size dropdown -->
          <!-- Add a bold button -->
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-list" value="ordered"></button>
          <button class="ql-indent" value="+1"></button>
          <button class="ql-indent" value="-1"></button>
          <!-- <span class="ql-formats"> -->
          <select class="ql-color"></select>
          <select class="ql-background"></select>
          <!-- </span> -->
          <!-- Add subscript and superscript buttons -->
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>

          <select class="ql-size">
            <option value="small"></option>
            <!-- Note a missing, thus falsy value, is used to reset to default -->
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>

          <button class="ql-clean"></button>

          <button
            class="emoji-button size-4"
            @click="showEmojiPanel = !showEmojiPanel"
          >
            <svg viewbox="0 0 18 18">
              <circle class="ql-fill" cx="7" cy="7" r="1"></circle>
              <circle class="ql-fill" cx="11" cy="7" r="1"></circle>
              <path class="ql-stroke" d="M7,10a2,2,0,0,0,4,0H7Z"></path>
              <circle class="ql-stroke" cx="9" cy="9" r="6"></circle>
            </svg>
          </button>
        </div>
      </template>
    </Editor>
    <EmojiPanel
      class="absolute top-12 right-10 z-20 bg-white"
      v-if="showEmojiPanel"
      @emoji-selected="emojiSelected"
      @close="closeEmojiPanel"
    ></EmojiPanel>
  </div>
</template>
