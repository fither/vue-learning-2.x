<template>
  <div id="user-posts">
    <router-link class="link" :to="userLink">Back To User Profile</router-link>
    <div class="user-post" v-for="(post, index) in userPosts" :key="index">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPosts',
  data() {
    return {
      userPosts: Array,
      fakeAPIUrl: 'https://jsonplaceholder.typicode.com/posts?userId=',
      profileID: Number
    }
  },
  created() {
    this.profileID = this.$route.params.userid;
    fetch(this.fakeAPIUrl + this.profileID)
      .then(res => { return res.json(); })
      .then(res => { this.userPosts = res })
  },
  computed: {
    userLink() {
      return `/users/user/${this.profileID}`
    }
  }
}
</script>

<style>

</style>