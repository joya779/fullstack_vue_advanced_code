<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon"></i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
  data() {
    return {};
  },
  props: [event, day],
  computed: {
    getEventBackgroundColor() {
      const colors = ["red", "green", "blue"];
      let randomColor = colors[Math.floor(Math.random() * color.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>