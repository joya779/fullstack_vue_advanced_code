<template>
  <div class="note-count">
    Note count:
    <strong>{{ noteCount }}</strong>
  </div>
</template>

<script>
import emitter from "../utils/util.js";

export default {
  name: "NoteCount",
  data() {
    return {
      noteCount: 0,
    };
  },
  created() {
    emitter.on("add-note", () => this.noteCount++);
  },
};
</script>
