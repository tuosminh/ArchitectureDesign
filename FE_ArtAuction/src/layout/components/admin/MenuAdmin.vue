<template>
  <div class="iq-sidebar">
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img src="../../../assets/img/LogoAdmin.png" class="imgLogo" alt="" />
        <span class="fw-semibold m-0"
          ><span class="text-primary fw-semibold">Art</span>Auction</span
        >
      </router-link>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu">
            <div class="main-circle"><i class="fa-solid fa-angle-left"></i></div>
            <div class="hover-circle"><i class="fa-solid fa-angle-right"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar" class="d-flex flex-column" style="height: calc(100vh - 80px);">
      <nav class="iq-sidebar-menu d-flex flex-column h-100">
        <ul id="iq-sidebar-toggle" class="iq-menu flex-grow-1 overflow-auto custom-scrollbar">
          <li class="iq-menu-title">
            <i class="fa-solid fa-minus"></i>
            <span>Dashboard</span>
          </li>
          <li :class="{ active: $route.path === '/admin/dashboard' }">
            <router-link to="/admin/dashboard" class="iq-waves-effect">
              <i class="fa-regular fa-house"></i><span>Dashboard</span>
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/admin/livestream' }">
            <router-link to="/admin/livestream" class="iq-waves-effect">
              <i class="fa-regular fa-house"></i><span>LiveStream</span>
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/admin/testlivestream' }">
            <router-link to="/admin/testlivestream" class="iq-waves-effect">
              <i class="fa-regular fa-house"></i><span>test</span>
            </router-link>
          </li>
          <li :class="{ active: $route.path === '/admin/management-statistical' }">
            <router-link to="/admin/management-statistical"
              ><i class="fa-solid fa-square-poll-vertical"></i>Statistical</router-link
            >
          </li>
          <li :class="{ active: $route.path === '/admin/management-schedule' }">
            <router-link to="/admin/management-schedule"
              ><i class="fa-solid fa-calendar-days"></i>Schedule</router-link
            >
          </li>
          <li :class="{ active: $route.path.startsWith('/admin/chat') }">
            <router-link to="/admin/chat/auction-001" class="iq-waves-effect">
              <i class="fa-solid fa-comments"></i><span>Chat Support</span>
            </router-link>
          </li>
          <li>
            <a
              href="#menu-design"
              class="iq-waves-effect collapsed"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i class="fa-solid fa-bars-staggered"></i><span>Management</span>
              <i class="fa-solid fa-angle-right iq-arrow-right"></i
            ></a>
            <ul id="menu-design" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
              <li :class="{ active: $route.path === '/admin/management-employees' }">
                <router-link to="/admin/management-employees"
                  ><i class="fa-solid fa-user-tie"></i>Employees</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-users' }">
                <router-link to="/admin/management-users"
                  ><i class="fa-solid fa-user"></i>User</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-artwork' }">
                <router-link to="/admin/management-artwork"
                  ><i class="fa-solid fa-image"></i>Artwork</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-auction' }">
                <router-link to="/admin/management-auction"
                  ><i class="fa-solid fa-gavel"></i>Auction room</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-invoice' }">
                <router-link to="/admin/management-invoice"
                  ><i class="fa-solid fa-receipt"></i>Invoice</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-report' }">
                <router-link to="/admin/management-report"
                  ><i class="fa-solid fa-flag"></i>Report</router-link
                >
              </li>
              <li :class="{ active: $route.path === '/admin/management-notification' }">
                <router-link to="/admin/management-notification"
                  ><i class="fa-solid fa-bell"></i>Notification</router-link
                >
              </li>

              <!-- <li :class="{ active: $route.path === '/admin/management-admin' }">
                <router-link to="/admin/management-admin"
                  ><i class="fa-solid fa-shield-halved"></i>Admin</router-link
                >
              </li> -->
              <li :class="{ active: $route.path === '/admin/management-setting/general-setting' }">
                <router-link to="/admin/management-setting/general-setting"
                  ><i class="fa-solid fa-gear"></i>Setting</router-link
                >
              </li>
            </ul>
          </li>
          <li class="text-danger ms-3"><i class="bi bi-box-arrow-right me-3"></i>Logout</li>
          <!-- <li>
            <a href="dashboard-2.html" class="iq-waves-effect"><i class="ri-home-8-line"></i><span>Dashboard
                3</span></a>
          </li>
          <li>
            <a href="dashboard-3.html" class="iq-waves-effect"><i class="ri-home-7-line"></i><span>Dashboard
                4</span></a>
          </li> -->
        </ul>
        <div v-if="admin.check" class="p-3 mt-auto border-top">
          <!-- cá nhân ở đây -->
          <div class="d-flex align-items-center gap-3">
            <img
              :src="admin.avt"
              class="img-avatar"
              alt=""
              style="width: 40px; height: 40px; border-radius: 50%"
            />
            <div class="ms-2">
              <p class="fw-bold mb-0">{{ admin.name }}</p>
              <p class="text-muted small mb-0">{{ admin.email }}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: {},
    };
  },
  mounted() {
    this.admin = {
      name: localStorage.getItem("name_admin"),
      email: localStorage.getItem("email_admin"),
      check: localStorage.getItem("check_admin"),
      avt: localStorage.getItem("avatar_admin"),
    };
    console.log("menu", this.admin);
  },
  methods: {},
};
</script>
<style scoped>

</style>
