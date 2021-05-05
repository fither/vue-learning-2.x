<template>
  <div class="preview" v-cloak>
    <h1 v-if="isLoading">Loading...</h1>
    <h2 v-if="query">Results for: <b>{{query}}</b></h2>
    <template v-if="!isLoading">
      <h2 v-if="!gifs.length">No results found</h2>
      <div class="gif-box" v-for="(gif, index) in gifs" :key="index">
        <img :src="gif.images.fixed_height.url" alt="Giphy">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: [ 'query','gifs', 'isLoading' ]
}
</script>

<style scoped>
  .preview {
    display: flex;
    flex-wrap: wrap;
  }

  .gif-box {
    margin: 1rem;
    filter: drop-shadow(0 0 .5rem #dd8809);
  }
  
  h2 {
    text-align: center;
    width: 100%;
  }

</style>