<template>
  <div id="users">
    <UserItem v-for="(user, index) in users" :key="index" :user="user" />
  </div>
</template>

<script>
import UserItem from '@/components/UserItem';

export default {
  name: 'Users',
  components: {
    UserItem
  },
  data() {
    return {
      fakeAPI: 'https://jsonplaceholder.typicode.com/',
      users: []
    }
  },
  created() {
    fetch(this.fakeAPI + 'users')
      .then(res => { return res.json(); })
      .then(res => this.users = res )
  }
}
</script>

<style>
  #users {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

</style>