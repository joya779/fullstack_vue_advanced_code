<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, index) in notes" :key="index" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div
            v-for="(timestamp, index) in timestamps"
            :key="index"
            class="timestamps"
          >
            {{ timestamp }}
          </div>
        </div>
      </div>
      <InputComponent :placeholder="placeholder" />
    </div>
    <NoteCountComponent />
  </div>
</template>

<script>
import emitter from "./utils/util";

import InputComponent from "./components/InputComponent.vue";
import NoteCountComponent from "./components/NoteCountComponent.vue";

export default {
  name: "App",
  components: {
    InputComponent,
    NoteCountComponent,
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
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
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
}

.notes,
.timestamps {
  padding: 5px 0px;
}
</style>
