<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard {{ nameUserStorage }}</a>
    
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="cursor" @click="logout">
              Log out
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  //import { mapMutations, mapState } from 'vuex'
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      },
    },
    data () {
      return {
        activeNotifications: false,
        nameUserStorage: localStorage.getItem('name')
      }
    },
    methods: {
      logout() {
        localStorage.clear()
        this.$router.push('/login')
      },
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    },

    mounted() {
      console.log(this.$store)
    }
  }

</script>
<style lang="scss">
.cursor {
  cursor: pointer;
  color: #5e5e5e;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px 12px;
  transition: .4s ease;
}

.cursor:hover {
  background-color: #184dc0;
  color: #fff;
}

</style>
