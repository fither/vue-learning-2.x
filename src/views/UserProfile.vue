<template>
  <div id="user-profile">
    <!-- <p>
      <a class="link" @click="goBack">Go To Home</a>
    </p> -->
    <router-link class="link" :to="prevUserLink">Prev</router-link>
    <router-link class="link" to="/users">Back To Users</router-link>
    <router-link class="link" :to="nextUserLink">Next</router-link>
    <div class="row username">
      <div class="col">Name</div>
      <div class="col">
        <span>{{userData.name}}</span>
      </div>
    </div>
    <div class="row useremail">
      <div class="col">Email</div>
      <div class="col">
        <span>{{userData.email}}</span>
      </div>
    </div>
    <div class="row userphone">
      <div class="col">Phone</div>
      <div class="col">
        <span>{{userData.phone}}</span>
      </div>
    </div>
    <div class="row usercompany">
      <div class="col">Company</div>
      <div class="col">
        <span>{{companyName}}</span>
      </div>
    </div>
    <router-link class="link" :to="postsLink">Posts</router-link>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      fakeAPI: 'https://jsonplaceholder.typicode.com/users/',
      userData: Object,
      profileID: Number,
      companyName: String
    }
  },
  created() {
    this.profileID = this.$route.params.id;
    this.fetchData();
  },
  methods: {
    fetchData() {
      if(this.$route.params.id) {
        this.profileID = this.$route.params.id;
        fetch(this.fakeAPI + this.profileID)
          .then(res => { return res.json() })
          .then(res => { 
            this.userData = res;
            this.companyName = res.company.name;
           })
      }
    },
    goBack() {
      this.$router.push('/');
      this.$router.push({ name: 'UserProfile', params: { id: 2 } })
      // this.$router.go('-1');
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  computed: {
    postsLink() {
      return `/users/user/${this.profileID}/posts`
    },
    nextUserLink() {
      return `/users/user/${parseInt(this.profileID) + 1}`
    },
    prevUserLink() {
      let newID = this.profileID > 1 ? this.profileID - 1 : 1;
      return `/users/user/${newID}`
    }
  }
}
</script>

<style scoped>
  #user-profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .row {
    width: 100%;
    background-color: white;
    margin: 0 5rem;
  }

  .row:nth-child(even) {
    background-color: #CCC;
  }
  .col {
    height: 100%;
    margin-bottom: 1rem;
  }

</style>