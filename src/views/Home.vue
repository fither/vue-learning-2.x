<template>
  <div id="giphy">
    <Search v-on:searchRequested="handleSearch"/>
    <Preview :query="query" :isLoading="isLoading" :gifs="fetchedGifs" />
  </div>
</template>

<script>
import Search from '@/components/Search'
import Preview from '@/components/Preview';

export default {
  name: 'App',
  data() {
    return {
      giphyTrendingAPI: 'https://api.giphy.com/v1/gifs/trending?api_key=hOh3MHTITlzyC8t1oPhESg9kb4xd3Bkc&limit=25&rating=g',
      giphySearchAPI: 'https://api.giphy.com/v1/gifs/search?api_key=hOh3MHTITlzyC8t1oPhESg9kb4xd3Bkc&limit=25&offset=0&rating=g&lang=en&q=',
      fetchedGifs: [],
      isLoading: true,
      query: ''
    }
  },
  components: {
    Search,
    Preview
  },
  created() {
    this.doQuery(this.giphyTrendingAPI);
  },
  methods: {
    doQuery(url) {
      this.isLoading = true;
      this.fetchedGifs = [];
      fetch(url)
        .then(res => { return res.json(); })
        .then(res => { this.fetchedGifs = res.data; this.isLoading = false; })
    },
    handleSearch(query) {
      if(query.trim().length <= 0) {
        this.doQuery(this.giphyTrendingAPI);
        this.query = 'Trending'
      } else {
        this.doQuery(this.giphySearchAPI + query);
        this.query = query;
      }
    }
  }
}
</script>

<style scoped>

</style>
