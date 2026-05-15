<template>
  <input
    class="input is-small"
    type="text"
    v-model="inputValue"
    @keyup.enter="monitorEnterKey"
    :placeholder="placeholder"
  />
</template>

<script>
import emitter from "../utils/util.js";

export default {
  name: "InputComponent",
  props: ["placeholder"],

  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    monitorEnterKey() {
      console.log("monitorEnterKey", this.inputValue);
      emitter.emit("add-note", {
        note: this.inputValue,
        timestamp: new Date().toLocaleString(),
      });

      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 30px;

  margin-bottom: 50px;
}
</style>