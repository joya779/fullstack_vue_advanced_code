<template>
  <div id="app">
    <div class="notes-section">
      <!-- title -->
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, index) in notes" :key="index">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamps</strong>
        </div>
      </div>
      <!-- input component -->
      <InputComponent :placeholder="placeholder" />
    </div>

    <NoteCount />
  </div>
</template>

<script>
import emitter from "./utils/util";

import InputComponent from "./components/InputComponent.vue";
import NoteCount from "./components/NoteCount.vue";

export default {
  name: "App",
  components: {
    InputComponent,
    NoteCount,
  },
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
      testSetTimeout: "",
    };
  },
  created() {
    emitter.on("add-note", (e) => this.addNote(e));
  },

  methods: {
    addNote(event) {
      this.notes.push(event?.note);
      this.timestamps.push(event?.timestamp);

      this.testSetTimeout = setTimeout(() => {
        // todo:
      }, 0);

      // console.log("---addNote", this.notes, this.timestamps);
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

.notes-section {
  width: 500px;
}

.columns {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 30px;
}

.notes,
.timestamps {
  padding: 5px 0px;
}
</style>
