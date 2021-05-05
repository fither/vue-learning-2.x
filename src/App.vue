<template>
  <div id="app">
    <div id="nav">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/users">Users</router-link> |
      <router-link class="link" to="/about">About</router-link>
      <!-- <router-link class="link" to="/notfound">Not Found</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.link {
  background-color: #42b983;
  padding: .5rem;
  border-radius: 5rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin: 0.5rem;
}

.link.router-link-exact-active {
  background: palegreen;
  color: white;
}

[v-cloak] {
  display: none;
}

</style>
