<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="mb-4">
      <h4 class="fw-bold text-primary mb-1">Dashboard</h4>
      <p class="text-body-secondary mb-0">Overview of the painting auction system</p>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Total users</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalUsers }}</h3>
              </div>
              <div
                class="bg-secondary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-users fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-trend-up me-1"></i>+12.5% over last month
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Artwork</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalArtworks }}</h3>
              </div>
              <div
                class="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-image fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-trend-up me-1"></i>+12.5% over last month
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Auction Rooms</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalAuctionRooms }}</h3>
              </div>
              <div
                class="bg-warning-subtle text-warning-emphasis rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-hammer fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">23 rooms are in operation</small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Bidding</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalBids }}</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-chart-line fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-trend-up me-1"></i>+12.5% over last month
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Revenue</h6>
                <h3 class="fw-bold mb-0">{{ statistics.revenue }}</h3>
              </div>
              <div
                class="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-dollar-sign fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-trend-up me-1"></i>{{ statistics.percentage }}% over last
              month
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Active Users</h6>
                <h3 class="fw-bold mb-0">{{ statistics.activeUsers }}</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-user-check fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">10 people are active now</small>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-xl-6">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-header bg-white border-0 pt-3">
            <h5 class="text-primary fw-bold mb-0">Nearby auction rooms</h5>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive text-nowrap overflow-y-auto" style="max-height: 400px">
              <table class="table table-hover align-middle text-nowrap mb-0 w-100">
                <thead class="table-light sticky-top">
                  <tr>
                    <th scope="col" class="ps-3 py-3 fw-bold">Room Name</th>
                    <th scope="col" class="py-3 fw-bold">Current Artwork</th>
                    <th scope="col" class="py-3 fw-bold">Status</th>
                    <th scope="col" class="py-3 fw-bold text-end pe-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="room in topAuctionRooms" :key="room.id">
                    <tr
                      class="cursor-pointer"
                      data-bs-toggle="collapse"
                      data-bs-target="#room1-details"
                      aria-expanded="false"
                    >
                      <td class="ps-3 fw-medium text-primary">
                        <i
                          class="fa-solid fa-chevron-down text-muted me-2"
                          style="font-size: 0.8rem"
                        ></i>
                        {{ room.roomName }}
                      </td>

                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            :src="room.sessions?.[0]?.imageUrl || '/src/assets/img/default-art.png'"
                            alt="Art"
                            class="rounded border me-2"
                            style="width: 40px; height: 40px; object-fit: cover"
                          />
                          <div class="d-flex flex-column">
                            <span class="fw-medium" style="font-size: 0.9rem">{{
                              room.sessions?.[0]?.artworkTitle || "---"
                            }}</span>
                            <small class="text-muted" style="font-size: 0.7rem"
                              >Session {{ room.sessions?.length || 0 }} items</small
                            >
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          class="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill"
                          >Live</span
                        >
                      </td>
                      <td class="small text-body-secondary text-end pe-3">View details</td>
                    </tr>

                    <tr>
                      <td colspan="4" class="p-0 border-0">
                        <div class="collapse bg-light-subtle show" id="room1-details">
                          <div class="p-3">
                            <h6
                              class="fw-bold text-primary mb-2 small text-uppercase ps-2 border-start border-4 border-secondary-subtle"
                            >
                              Danh sách tác phẩm ({{ room.sessions?.length || 0 }})
                            </h6>

                            <table class="table table-sm table-borderless mb-0 align-middle">
                              <thead class="text-secondary small border-bottom">
                                <tr>
                                  <th class="ps-2">Artwork Info</th>
                                  <!-- <th>Trạng thái</th> -->
                                  <th class="text-end pe-2">Giá hiện tại</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(session, Index) in room.sessions" :key="session.id">
                                  <td class="ps-2">
                                    <div class="d-flex align-items-center">
                                      <span class="me-2 text-muted small fw-bold"
                                        >#{{ Index + 1 }}</span
                                      >
                                      <img
                                        :src="session.imageUrl || '/src/assets/img/default-art.png'"
                                        class="rounded border me-2"
                                        style="width: 32px; height: 32px; object-fit: cover"
                                      />
                                      <span
                                        class="fw-medium text-dark"
                                        style="font-size: 0.85rem"
                                        >{{ session.artworkTitle }}</span
                                      >
                                    </div>
                                  </td>
                                  <!-- <td>
                                  <span class="badge bg-danger" style="font-size: 0.7rem"
                                    >Live</span
                                  >
                                </td> -->
                                  <td class="text-end text-muted pe-2">
                                    {{ formatCurrency(session.currentPrice) }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </template>

                  <tr class="cursor-pointer">
                    <td class="ps-3 fw-medium text-dark">
                      <i
                        class="fa-solid fa-chevron-down text-muted me-2"
                        style="font-size: 0.8rem"
                      ></i>
                      Phòng Sơn Dầu
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                          src="/src/assets/img/cotiendan.png"
                          alt="Art"
                          class="rounded border me-2 bg-light"
                          style="width: 40px; height: 40px; object-fit: cover"
                        />
                        <div class="d-flex flex-column">
                          <span class="fw-medium" style="font-size: 0.9rem">Hoàng hôn biển</span>
                          <small class="text-muted" style="font-size: 0.7rem">Session 1/10</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill"
                        >Coming soon</span
                      >
                    </td>
                    <td class="text-end pe-3"><small class="text-muted">View details</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-6">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-header bg-white border-0 pt-3">
            <h5 class="text-primary fw-bold mb-0">New Users</h5>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive text-nowrap overflow-y-auto">
              <table class="table table-hover align-middle text-nowrap mb-0 w-100">
                <thead class="table-light">
                  <tr>
                    <th scope="col" class="ps-3 py-3 fw-bold align-middle">Username</th>
                    <th scope="col" class="py-3 fw-bold align-middle">Email</th>
                    <th scope="col" class="py-3 fw-bold align-middle">Registration date</th>
                    <th scope="col" class="py-3 fw-bold align-middle">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="ps-3">
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="bg-secondary-subtle text-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                          style="width: 32px; height: 32px"
                        >
                          N
                        </div>
                        <span class="fw-medium">Nguyễn Thị A</span>
                      </div>
                    </td>
                    <td class="text-muted">a@gmail.com</td>
                    <td>2025-10-22</td>
                    <td>
                      <button
                        class="btn badge bg-success-subtle text-success rounded-pill border border-success-subtle"
                      >
                        Approved
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-3">
                      <div class="d-flex align-items-center gap-2">
                        <div
                          class="bg-secondary-subtle text-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                          style="width: 32px; height: 32px"
                        >
                          N
                        </div>
                        <span class="fw-medium">Nguyễn Thị A</span>
                      </div>
                    </td>
                    <td class="text-muted">a@gmail.com</td>
                    <td>2025-10-22</td>
                    <td>
                      <button
                        class="btn badge bg-warning-subtle text-warning-emphasis rounded-pill border border-warning-subtle"
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white border-0 pt-3">
        <h5 class="text-primary fw-bold mb-0">The most expensive works</h5>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive text-nowrap overflow-y-auto">
          <table class="table table-hover align-middle text-nowrap mb-0 w-100">
            <thead class="table-light">
              <tr>
                <th scope="col" class="ps-3 py-3 fw-bold align-middle">Artwork</th>
                <th scope="col" class="py-3 fw-bold align-middle">Type</th>
                <th scope="col" class="py-3 fw-bold align-middle">Author</th>
                <th scope="col" class="py-3 fw-bold align-middle">Highest price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ps-3 align-middle">
                  <div class="d-flex align-items-center gap-3">
                    <img
                      src="/src/assets/img/3.png"
                      class="rounded border bg-light"
                      style="width: 48px; height: 48px; object-fit: cover"
                      alt="art"
                      loading="lazy"
                    />
                    <div>
                      <p class="mb-0 fw-bold text-dark">Tên tranh</p>
                    </div>
                  </div>
                </td>
                <td class="align-middle">Tranh sơn dầu</td>
                <td class="align-middle">Nguyễn Văn A</td>
                <td class="text-success fw-bold align-middle">200.000.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminLive",
  data() {
    return {
      statistics: {},
      isLoading: false,
      topAuctionRooms: [],
      newUsers: [],
      topArtworks: [],
    };
  },

  mounted() {
    this.loadInvoiceStatistical();
    this.loadTopAuction();
  },
  methods: {
    formatCurrency(value) {
      if (!value) return "0₫";
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    //  card thống kê
    loadInvoiceStatistical() {
      axios
        .get(`http://localhost:8081/api/admin/dashboard/thong-ke`, {
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

    //
    loadTopAuction() {
      axios
        .get(`http://localhost:8081/api/admin/dashboard/top-auction-rooms`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.topAuctionRooms = res.data.data;
          console.log("Kết quả tìm kiếm:", this.topAuctionRooms);
        })
        .catch((err) => {
          console.error("Lỗi tìm kiếm:", err);
          this.topAuctionRooms = [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
