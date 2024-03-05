<script setup>
import { ref } from "vue";
import QuillEditor from "./components/QuillEditor.vue";

const body = ref("");
</script>

<template>
  <div class="container mx-auto mt-10">
    <h1>Editor Directly Added:</h1>
    <Editor v-model="body" toolbar="essential"></Editor>

    <h1>Added via customized component</h1>
    <QuillEditor v-model="body"></QuillEditor>
  </div>
</template>
