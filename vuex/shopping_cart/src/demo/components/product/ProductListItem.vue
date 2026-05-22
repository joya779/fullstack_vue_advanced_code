<template>
  <div>
    <h2 class="has-text-weight-bold">
      The Fullstack Hoodie
      <span class="tag is-primary is-pulled-right has-text-white">
        Add to Cart
      </span>
    </h2>
    <p>
      Lightweight, breathable hoodie with the Fullstack Crest. Guaranteed to
      keep you looking fresh while warm.
    </p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> 19.99
    </span>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
};
</script>
<style scoped>
.tag {
  cursor: pointer;
}
</style>
