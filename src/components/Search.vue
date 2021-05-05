<template>
  <div class="search">
    <input type="text" @keypress.enter="handleSearch"  v-model.trim="query">
    <button @click="handleSearch">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('searchRequested', this.query);
    },
  }
}
</script>

<style>
  .search {
    margin: 20px;
  }

  .search input {
    padding: 10px 20px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 400px;
  }

  .search button {
    padding: 5px 10px;
    border: 1px solid #CCC;
    background-color: #4183c4;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 10px;
  }
</style>