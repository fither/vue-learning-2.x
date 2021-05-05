<template>
  <div class="user-item">
    <router-link class="user-item-link" :to="profileLink">
      {{ user.name }} {{user.username}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: { type: Object, required: true }
  },
  computed: {
    profileLink() {
      return `/users/user/${this.user.id}`
    }
  }
}
</script>

<style>
  .user-item {
    width: auto;
    height: 100%;
    background: turquoise;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    transition: all 300ms ease;
  }

  .user-item:hover {
    background-color: blueviolet;
  }

  .user-item a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

</style>