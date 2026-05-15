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
export default {
  name: "InputComponent",
  props: ["placeholder"],
  emit: ["add-note"],
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    monitorEnterKey() {
      console.log("monitorEnterKey", this.inputValue);
      this.$emit("add-note", {
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
}
</style>