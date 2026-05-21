<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <!-- cart list -->
        <div class="column is-3">cart list</div>

        <!-- product list -->
        <div class="column is-9">product list</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  background: #f2f6fa;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>