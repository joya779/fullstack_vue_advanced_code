<template>
  <div>
    <div class="hello">Hello</div>
    <h1>{{ count }}</h1>
    <button @click="count++" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      information: "info",
    };
  },

  created() {
    console.log("created", this.information);
    const doms = document.querySelector("hello");
    console.log("doms", doms);
  },
  mounted() {
    this.loadData();
  },
  updated() {
    console.log("updated");
  },
};
</script>