<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <!-- sidebar structure -->
      <ul class="menu-sidebar-links">
        <li>
          <sidebar-link to="/admin/overview">
            <font-awesome-icon 
              class="icon-sidebar" 
              icon="fa-solid fa-chart-line" 
            />
            <p>Dashboard</p>
          </sidebar-link>
        </li>
        <li>
          <sidebar-link to="/admin/user">
            <font-awesome-icon 
              class="icon-sidebar"
              icon="fa-solid fa-address-card" 
            />
            <p>User Profile</p>
          </sidebar-link>
        </li>
        <li>
          <sidebar-link to="/admin/users">
            <font-awesome-icon 
              class="icon-sidebar"
              icon="fa-solid fa-user" 
            />
            <p>Listar usuários</p>
          </sidebar-link>
        </li>
        <li>
          <sidebar-link to="/admin/maps">
            <font-awesome-icon  
              class="icon-sidebar"
              icon="fa-solid fa-location-dot"
            />
            <p>Encontre uma livraria</p>
          </sidebar-link>
        </li>
        <li>
          <sidebar-link to="/admin/books">
            <font-awesome-icon  
              class="icon-sidebar"
              icon="fa-solid fa-book"
            />
            <p>Livros</p>
          </sidebar-link>
        </li>
        <li>
          <sidebar-link to="/admin/reports">
            <font-awesome-icon  
              class="icon-sidebar"
              icon="fa-solid fa-list-check"
            />
            <p>Gerenciamento</p>
          </sidebar-link>
          <ul class="submenu">
            <li>
              <sidebar-link to="/admin/publishin">
                <font-awesome-icon 
                  class="icon-sidebar"
                  icon="fa-solid fa-newspaper" 
                />
                <p>Editoras</p>
              </sidebar-link>
            </li>
            <li>
              <sidebar-link to="/admin/comments">
                <font-awesome-icon  
                  class="icon-sidebar"
                  icon="fa-solid fa-comments"
                />
                <p>Comentários</p>
              </sidebar-link>
            </li>
            <li>
              <sidebar-link to="/admin/logs">
                <font-awesome-icon 
                  icon="fa-solid fa-plug" 
                  class="icon-sidebar"
                />
                <p>Usuarios online</p>
              </sidebar-link>
            </li>
          </ul>
        </li>  
      </ul>
    </side-bar>

    <!-- main painel structure -->
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">
      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
import SidebarLink from '../components/SidebarPlugin/SidebarLink.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
      SidebarLink
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}        

ul .icon-sidebar {
  font-size: 25px;
  margin-right: 14px; 
}

.submenu {
  display: none;
  min-width: 100%;
}

.menu-sidebar-links > li:hover > .submenu,
.submenu > li:hover > .submenu {
  display: block;
}

.submenu > li:hover, a:hover {
  transition: .5s ease-in-out;
  min-width: 8%;
  background: #009acc;
  border-radius: 5px;
}
</style>