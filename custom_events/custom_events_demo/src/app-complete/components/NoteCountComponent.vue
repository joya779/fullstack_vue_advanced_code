<template>
  <div class="note-count">
    Note count: <strong>{{ noteCount }}</strong>
  </div>
</template>

<script>
import emitter from "../utils/util";

export default {
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

<style>
.note-count {
  margin-top: 48px;
}
</style>
