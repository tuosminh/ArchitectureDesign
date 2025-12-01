<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-white shadow-sm rounded-3 px-3 mt-3 mb-3">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-3">
        <img src="../../../assets/img/Logo_AA.png" class="imgLogo" alt="" />
        <span class="fw-semibold"><span class="text-success-bright fw-semibold">Art</span>Auction</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse bg-white p-3 rounded" id="navbarSupportedContent">
        <ul class="navbar-nav  mx-auto gap-lg-4 gap-3">
          <li class="nav-item">
            <router-link v-if="user" to="/client/home" class="nav-link py-0"
              :class="{ 'active': $route.path === '/client/home' }" aria-current="page">
              Home
            </router-link>
            <router-link v-else to="/" class="nav-link py-0" :class="{ 'active': $route.path === '/' }"
              aria-current="page">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/client/auction" class="nav-link py-0"
              :class="{ active: $route.path === '/client/auction' }">
              Auction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/client/register-artwork" class="nav-link py-0"
              :class="{ active: $route.path === '/client/register-artwork' }">
              Launch
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link py-0" :class="{ active: $route.path === '/about-us' }">
              About us
            </router-link>
          </li>

        </ul>


      </div>
      <div class="d-flex align-items-center gap-4">
        <!-- Loading state -->
        <!-- <div v-if="isLoading" class="d-flex align-items-center gap-2">
          <div class="spinner-border spinner-border-sm text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span class="text-muted">Đang tải...</span>
        </div> -->

        <!-- User logged in -->
        <template v-if="user.check">
          <!-- notify -->
          <div class="dropdown">
            <div
              class="dropdown dropdown-notification dropdown-toggle dropdown-toggle-no-caret  d-flex justify-content-center align-items-center"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/src/assets/img/icon-bell.png" class="icon-bell" style="width: 24px; height: 24px" />
            </div>
            <!-- Notification Dropdown -->
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-lg mt-2 p-0 overflow-hidden border-2 border-success shadow">
              <div v-for="notification in notifications" :key="notification.id" class="d-flex p-3 border-bottom w-100"
                :style="{ backgroundColor: notification.isRead ? '#ffffff' : '#e6fbfa' }"
                @click="markAsRead(notification.id)" style="cursor: pointer; transition: background-color 0.2s">

                <div class="d-flex w-100 gap-2">
                  <!-- icon -->
                  <div
                    class="notification-icon d-flex align-items-center justify-content-center rounded-circle text-secondary bg-light flex-shrink-0">
                    <i class="fa-regular fa-user fs-6"></i>
                  </div>
                  <!-- content -->
                  <div class="d-flex flex-column w-100 gap-2">
                    <div class="">
                      <div class="d-flex justify-content-between">
                        <p class="m-0 fw-bold">{{ notification.title }}</p>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                      <p class="notification-message text-dark small m-0">
                        {{ notification.notificationContent }}
                      </p>
                    </div>
                    <div class="d-flex justify-content-between text-muted" style="font-size: 12px">
                      <p class="notification-time mb-0">{{ formatTime(notification.notificationTime) }}</p>
                      <p class="notification-date mb-0">{{ formatDate(notification.notificationTime) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex gap-2 action-buttons">
            <div class="dropdown">
              <div class="dropdown-toggle dropdown-toggle-no-caret " type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <div class="d-flex gap-3 align-items-center">
                  <img v-bind:src="user.avt" class="img-avatar" alt="">

                </div>
              </div>
              <ul class="dropdown-menu dropdown-menu-end mt-2 p-3 border-2 border-success shadow overflow-hidden">
                <li>
                  <div class="card bg-accent shadow-sm mb-2">
                    <div class="card-body p-2 d-flex align-items-center gap-3">
                      <img v-bind:src="user.avt" class="img-avatar" alt="">
                      <div class="d-flex align-content-center flex-column">
                        <p class="fw-bold text-success mb-1">
                          {{ user.name }}
                        </p>
                        <p class="text-success m-0">{{ user.email }}</p>
                      </div>

                    </div>
                  </div>
                </li>
                <li>
                  <router-link to="/client/profile"
                    class="dropdown-item d-flex align-items-center gap-3 py-2 px-4 mt-2 mb-1">
                    <i class="bi bi-person fa-xl me-2"></i>
                    <p class="m-0">Profile</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/client/payment"
                    class="dropdown-item d-flex align-items-center gap-3 py-2 px-4 mt-2 mb-1">
                    <i class="bi bi-credit-card fa-xl me-2"></i>
                    <p class="m-0">Payment</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="dropdown-item d-flex align-items-center gap-3 py-2 px-4 mt-2 mb-1">
                    <i class="bi bi-gear fa-xl me-2"></i>
                    <p class="m-0">Setting</p>
                  </router-link>
                </li>
                <li>
                  <a href="#" class="dropdown-item d-flex align-items-center gap-3 py-2 px-4 mt-2 mb-1 text-danger"
                    data-bs-toggle="modal" data-bs-target="#logoutConfirmModal">
                    <i class="bi bi-box-arrow-right fa-xl me-2"></i>
                    <p class="m-0">Log out</p>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </template>

        <!-- User not logged in -->
        <div v-else class="d-flex gap-2">
          <router-link to="/register">
            <button class="btn btn-outline-success">Đăng ký</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-success">Đăng nhập</button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
  <!-- Logout Confirm Modal moved to body using Teleport to avoid stacking context issues -->
  <teleport to="body">
    <div class="modal fade" id="logoutConfirmModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="logoutModalLabel">Xác nhận đăng xuất</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Bạn có chắc chắn muốn đăng xuất khỏi tài khoản hiện tại?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-danger" @click="performLogout" data-bs-dismiss="modal">Đăng
              xuất</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      // isLoading: true,

      isNotificationOpen: false,

      notifications: [],

      loading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchNotificationsbyId();

    this.user = {
      name: localStorage.getItem("name_kh"),
      email: localStorage.getItem("email_kh"),
      check: localStorage.getItem("check_kh"),
      avt: localStorage.getItem("avatar_kh"),
    };
    console.log("menu", this.user);

    window.addEventListener('avatar-updated', this.handleAvatarUpdate);
  },
  beforeUnmount() {
    window.removeEventListener('avatar-updated', this.handleAvatarUpdate);
  },
  methods: {
    handleAvatarUpdate(event) {
      const newAvatar = event.detail.avatar;
      console.log('Avatar updated:', newAvatar);

      this.user.avt = newAvatar;

      localStorage.setItem("avatar_kh", newAvatar);
    },

    performLogout() {
      const token = localStorage.getItem("token");
      const finish = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name_kh");
        localStorage.removeItem("email_kh");
        localStorage.removeItem("check_kh");
        this.user = null;
        this.$router.push("/login");
        this.$toast.success('Đăng xuất thành công');
      };

      if (!token) {
        finish();
        return;
      }

      axios
        .post(
          "http://localhost:8081/api/auth/logout",
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then(() => {
          finish();
        })
        .catch(() => {
          // Dù lỗi vẫn xóa local và chuyển trang để đảm bảo UX
          finish();
        });
    },
    fetchNotificationsbyId() {
      axios
        .get(
          "http://localhost:8081/api/notification/my-notification",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.notifications = res.data
          console.log("notify", this.notifications);

        })
        .catch((err) => {
          this.error = err.message;
        });
    },


    markAsRead(notificationId) {
      const notification = this.notifications.find((n) => n.id === notificationId);
      if (notification && !notification.isRead) {
        notification.isRead = true;
        notification.status = "READ";

        // Gửi request update về backend (nếu có API update)
        // axios.put(
        //   "http://localhost:8081/api/notification/${notificationId}/read",
        //   {},
        //   {
        //     headers: {
        //       Authorization: "Bearer " + localStorage.getItem("key_admin"),
        //     },
        //   }
        // );
      }
    },
    formatTime(value) {
      if (!value) return "";
      try {
        return new Date(value).toLocaleTimeString("vi-VN");
      } catch (e) {
        return "";
      }
    },
    formatDate(value) {
      if (!value) return "";
      try {
        return new Date(value).toLocaleDateString("vi-VN");
      } catch (e) {
        return "";
      }
    },
    toggleNotification() {
      this.isNotificationOpen = !this.isNotificationOpen;
      if (this.isNotificationOpen) {
        this.fetchNotifications();
      }
    },

  },

};
</script>
<style scoped></style>
