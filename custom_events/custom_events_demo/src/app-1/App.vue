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
      <InputComponent @add-note="addNote" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";

export default {
  name: "App",
  components: {
    InputComponent,
  },
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },

  methods: {
    addNote(event) {
      console.log("addNote", event);
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
