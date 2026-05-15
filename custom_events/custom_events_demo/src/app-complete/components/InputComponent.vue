<template>
  <input
    :placeholder="placeholder"
    v-model="input"
    @keyup.enter="monitorEnterKey"
    class="input is-small"
    type="text"
  />
</template>

<script>
import emitter from "../utils/util";

export default {
  name: "InputComponent",
  props: ["placeholder"],
  data() {
    return {
      input: "",
    };
  },
  methods: {
    monitorEnterKey() {
      emitter.emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};
</script>
