<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <div class="mb-3 mb-md-0">
        <h4 class="fw-bold text-primary mb-1">Auction Room Management</h4>
        <p class="text-body-secondary mb-0">Overview and control of all auction sessions</p>
      </div>
      <div>
        <router-link
          to="/admin/add-auction-room"
          class="btn btn-primary shadow-sm px-4 rounded-pill fw-bold"
        >
          <i class="fa-solid fa-plus me-2"></i>Create Room
        </router-link>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Total Rooms</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalRooms }}</h3>
              </div>
              <div
                class="bg-secondary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-layer-group fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium"
              ><i class="fa-solid fa-arrow-trend-up me-1"></i>+5 new rooms</small
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Live Now</h6>
                <h3 class="fw-bold mb-0">{{ statistics.runningRooms }}</h3>
              </div>
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-tower-broadcast fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">Currently active sessions</small>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Upcoming</h6>
                <h3 class="fw-bold mb-0">{{ statistics.upcomingRooms }}</h3>
              </div>
              <div
                class="bg-warning-subtle text-warning-emphasis rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-regular fa-calendar-check fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">Scheduled for today</small>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Finished</h6>
                <h3 class="fw-bold mb-0">{{ statistics.completedRooms }}</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-flag-checkered fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">Completed sessions</small>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm mb-4 rounded-pill overflow-hidden">
      <div class="card-body p-2">
        <div class="row g-2 align-items-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="input-group border-0">
              <span class="input-group-text bg-white border-0 ps-3 text-secondary"
                ><i class="fa-solid fa-magnifying-glass"></i
              ></span>
              <input
                v-model="search"
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="Search for auction room..."
                @keyup.enter="handleSearch"
              />
            </div>
          </div>
          <div class="col-auto ms-auto pe-2">
            <button class="btn btn-light rounded-pill px-3 fw-bold text-secondary border">
              <i class="fa-solid fa-filter me-2"></i>Filter
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div v-if="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Loading rooms...</p>
      </div>

      <div v-else class="col-12" v-for="room in sortedAuctionRooms" :key="room.id">
        <router-link :to="`/admin/testlivestream/${room.id}`"
          class="card border-0 shadow-sm hover-lift transition-base h-100 text-decoration-none"
          :class="getBorderClass(room.status)"
          style="cursor: pointer"
        >
          <!-- @click="handleRoomClick(room.id)" -->

          <div class="card-body p-4">
            <div class="row align-items-center">
              <div class="col-12 col-lg-4 mb-3 mb-lg-0 border-end-lg pe-lg-4">
                <div class="d-flex align-items-center gap-3">
                  <img
                    :src="room.artworkImage || '/src/assets/img/4.png'"
                    alt="Art"
                    class="rounded-3 shadow-sm border object-fit-cover flex-shrink-0"
                    style="width: 80px; height: 80px"
                  />

                  <div class="overflow-hidden w-100">
                    <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
                      <h5
                        class="fw-bold text-primary mb-0 text-truncate"
                        style="max-width: 200px"
                        :title="room.roomName"
                      >
                        {{ room.roomName }}
                      </h5>
                      <span
                        class="badge rounded-pill px-2 py-1 border fw-normal"
                        style="font-size: 0.7rem"
                        :class="getStatusClass(room.status)"
                      >
                        {{ convertStatus(room.status) }}
                      </span>
                    </div>
                      <p class="my-3">{{ room.id }}</p>

                    <small class="text-muted">
                      <i class="fa-solid fa-tag me-1"></i>{{ room.type }}
                    </small>
                    <div>
                      <small class="text-muted"> ID: {{ room.id }} </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-8 ps-lg-4">
                <div class="row g-3">
                  <div class="col-6 col-md-3">
                    <span class="text-secondary text-uppercase x-small fw-bold d-block mb-1"
                      >Start Time</span
                    >
                    <span class="fw-medium text-dark fs-6">{{ formatDate(room.startedAt) }}</span>
                  </div>
                  <div class="col-6 col-md-3">
                    <span class="text-secondary text-uppercase x-small fw-bold d-block mb-1"
                      >Participants</span
                    >
                    <div class="d-flex align-items-center">
                      <i class="fa-solid fa-users text-info me-2"></i>
                      <span class="fw-bold text-dark">{{ room.totalMembers }}</span>
                    </div>
                  </div>
                  <div class="col-6 col-md-3">
                    <span class="text-secondary text-uppercase x-small fw-bold d-block mb-1"
                      >Current Price</span
                    >
                    <span class="fw-bold text-primary fs-5">{{
                      formatCurrency(room.currentPrice)
                    }}</span>
                  </div>
                  <div class="col-6 col-md-3">
                    <span class="text-secondary text-uppercase x-small fw-bold d-block mb-1"
                      >Start Price</span
                    >
                    <span class="fw-medium text-body-secondary">{{
                      formatCurrency(room.startingPrice)
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>

      </div>

      <div v-if="!isLoading && auctionRooms.length === 0" class="text-center py-5">
        <p class="text-muted">No auction rooms found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AuctionRoomManagement",
  data() {
    return {
      auctionRooms: [],
      isLoading: false,
      search: "",
      statistics: "",
    };
  },
  mounted() {
    this.loadAuctionData();
    this.loadAuctionStatistical();
  },
  methods: {
    // 1. Lấy dữ liệu từ API
    loadAuctionData() {
      this.isLoading = true;
      axios
        .get("http://localhost:8081/api/admin/auction-rooms/lay-du-lieu", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"), // Đảm bảo đúng key token
          },
        })
        .then((res) => {
          this.auctionRooms = res.data;
          console.log("Data Loaded:", this.auctionRooms);
        })
        .catch((err) => {
          console.error("Error loading rooms:", err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // 2. Tìm kiếm
    handleSearch() {
      if (!this.search.trim()) {
        this.loadAuctionData();
        return;
      }
      this.isLoading = true;
      axios
        .get(`http://localhost:8081/api/admin/auction-rooms/tim-kiem?q=${this.search}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.auctionRooms = res.data;
        })
        .catch((err) => {
          console.error("Search error:", err);
          this.auctionRooms = [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // 3. Chuyển trang khi click
    handleRoomClick(id) {
      // Router đến trang chi tiết
      this.$router.push(`/admin/auction-room/${id}`);
    },

    // --- HELPER FUNCTIONS ---
    formatCurrency(value) {
      if (value === undefined || value === null) return "0đ";
      return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
    },
    formatDate(dateStr) {
      if (!dateStr) return "Chưa xác định";
      // Cắt chuỗi đơn giản hoặc format lại tùy ý
      return dateStr.replace("T", " ").slice(0, 16);
    },
    convertStatus(status) {
      switch (status) {
        case 0:
          return "Finished";
        case 1:
          return "In progress";
        case 2:
          return "Coming soon";
        default:
          return "Unknown";
      }
    },
    getStatusClass(status) {
      switch (status) {
        case 2:
          return "bg-warning-subtle text-warning-emphasis border-warning-subtle"; // Coming soon
        case 1:
          return "bg-danger-subtle text-danger border-danger-subtle"; // Live
        case 0:
          return "bg-secondary-subtle text-secondary border-secondary-subtle"; // Ended
        default:
          return "bg-light text-dark border";
      }
    },
    getBorderClass(status) {
      switch (status) {
        case 2:
          return "border-start border-4 border-warning";
        case 1:
          return "border-start border-4 border-danger";
        case 0:
          return "border-start border-4 border-secondary";
        default:
          return "";
      }
    },

    //  card thống kê
    loadAuctionStatistical() {
      axios
        .get(`http://localhost:8081/api/admin/auction-rooms/thong-ke`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.statistics = res.data;
          console.log("Kết quả tìm kiếm:", this.statistics);
        })
        .catch((err) => {
          console.error("Lỗi tìm kiếm:", err);
          this.statistics = [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    // Đảo ngược thứ tự mảng
    sortedAuctionRooms() {
      return [...this.auctionRooms].reverse();
    }
  }
};
</script>

<style scoped>
.transition-base {
  transition: all 0.2s ease-in-out;
}
.hover-lift:hover {
  transform: translateY(-3px);
  background-color: #fff; /* Hoặc #f8f9fa tùy ý */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.object-fit-cover {
  object-fit: cover;
}
.x-small {
  font-size: 0.75rem;
}

/* CSS để tạo đường kẻ ngăn cách trên màn hình lớn */
@media (min-width: 992px) {
  .border-end-lg {
    border-right: 1px solid #dee2e6;
  }
}
</style>
