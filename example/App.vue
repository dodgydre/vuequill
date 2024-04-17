<script setup>
import { ref } from "vue";
import QuillEditor from "./components/QuillEditor.vue";

const body1 = ref("");
const body2 = ref("");
</script>

<template>
  <div class="container mx-auto mt-10">
    <h1>Editor Directly Added:</h1>
    <Editor
      v-model:content="body1"
      contentType="html"
      toolbar="essential"
    ></Editor>
    <div v-html="body1" class="py-4 bg-gray-100"></div>

    <br />

    <h1>Added via customized component</h1>
    <QuillEditor v-model="body2"></QuillEditor>

    <div v-html="body2" class="py-4 bg-gray-100"></div>

    <hr />
  </div>
</template>
