<script setup>
import data from "emojibase-data/en/data.json";
import { fromHexcodeToCodepoint, fromCodepointToUnicode } from "emojibase";
import { ref } from "vue";

// https://github.com/milesj/interweave/blob/master/packages/emoji/src/Emoji.tsx

defineProps(["class"]);

let groupNames = [
  { id: 0, annotation: "smileys-emotion", hexcode: "1F600" },
  { id: 1, annotation: "people-body", hexcode: "1F57A" },
  // { id: 1, annotation: "component", hexcode: },
  { id: 3, annotation: "animals-nature", hexcode: "1F435" },
  { id: 4, annotation: "food-drink", hexcode: "1F966" },
  { id: 5, annotation: "travel-places", hexcode: "1F30D" },
  { id: 6, annotation: "activities", hexcode: "1F3B3" },
  { id: 7, annotation: "objects", hexcode: "1F3BA" },
  { id: 8, annotation: "symbols", hexcode: "1F198" },
  { id: 9, annotation: "flags", hexcode: "1F1E8-1F1E6" },
];

const list = data;

let selectedGroup = ref({
  id: 0,
  annotation: "smileys-emotion",
  hexcode: "1F600",
});
let selectedEmoji = ref(null);

const emit = defineEmits(["emoji-selected", "close"]);

function groupList(group) {
  let filteredList = list.filter((emoji) => emoji.group === group.id);
  return filteredList.filter((emoji) => emoji.version !== 15.1);
}

function selectEmoji(emoji) {
  selectedEmoji.value = emoji;
}

function placeEmoji(emoji) {
  emit("emoji-selected", emoji);
}
</script>

<template>
  <div
    id="emoji-panel"
    class="border border-gray-500 w-96 rounded-lg text-2xl overflow-hidden"
    :class="class"
  >
    <div
      id="emoji-toolbar"
      class="m-x-auto border-b border-gray-500 grid grid-cols-10 divide-x bg-gray-50 p-2"
    >
      <button v-for="group in groupNames" @click="selectedGroup = group">
        {{ fromCodepointToUnicode(fromHexcodeToCodepoint(group.hexcode)) }}
      </button>
      <button @click="emit('close')">X</button>
    </div>

    <div id="selected-emoji-group" class="px-2 py-1 text-lg">
      {{ selectedGroup.annotation }}
    </div>

    <div id="emoji-list" class="grid grid-cols-8 gap-2 h-24 overflow-y-scroll">
      <button
        v-for="emoji in groupList(selectedGroup)"
        @click="selectEmoji(emoji)"
      >
        {{ fromCodepointToUnicode(fromHexcodeToCodepoint(emoji.hexcode)) }}
      </button>
    </div>
    <div
      id="selected-emoji"
      class="border-t border-gray-500 p-2 flex items-center gap-2"
      v-if="selectedEmoji"
    >
      <span class="italic text-xs">{{ selectedEmoji.label }}</span>
      <button
        v-if="selectedEmoji.skins"
        v-for="skin in selectedEmoji.skins"
        class="border rounded-full px-2 p-1 bg-blue-50 hover:bg-blue-200 duration-300 transition"
        @click="placeEmoji(skin)"
      >
        {{
          skin.hexcode
            ? fromCodepointToUnicode(fromHexcodeToCodepoint(skin.hexcode))
            : "-"
        }}
      </button>
      <button
        v-else
        class="border rounded-full px-2 p-1 bg-blue-50 hover:bg-blue-200"
        @click="placeEmoji(selectedEmoji)"
      >
        {{
          selectedEmoji.hexcode
            ? fromCodepointToUnicode(
                fromHexcodeToCodepoint(selectedEmoji.hexcode)
              )
            : "-"
        }}
      </button>
    </div>
  </div>
</template>
