<template>
  <div id="app">
    <div class="notes-section">
      <!-- title -->
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="note in notes" :key="note" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div
            v-for="timestamp in timestamps"
            :key="timestamp"
            class="timestamps"
          >
            {{ timestamp }}
          </div>
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
    };
  },
  created() {
    emitter.on("add-note", (event) => this.addNote(event));
  },
  methods: {
    addNote(event) {
      this.notes.push(event?.note);
      this.timestamps.push(event?.timestamp);
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
