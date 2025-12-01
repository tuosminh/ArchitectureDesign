<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="mb-4">
      <h4 class="fw-bold text-primary mb-1">Artwork Management</h4>
      <p class="text-body-secondary mb-0">Manage all artwork in the system</p>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Total work</h6>
                <h3 class="fw-bold mb-0">{{ statistics.totalArtworks }}</h3>
              </div>
              <div
                class="bg-secondary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px"
              >
                <i class="fa-solid fa-images"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-up me-1"></i>+12 works
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Approved</h6>
                <h3 class="fw-bold mb-0">{{ statistics.approvedArtworks }}</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px"
              >
                <i class="fa-solid fa-circle-check"></i>
              </div>
            </div>
            <small class="text-body-secondary">Total number of approved products</small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Pending</h6>
                <h3 class="fw-bold mb-0">{{ statistics.pendingArtworks }}</h3>
              </div>
              <div
                class="bg-warning-subtle text-warning-emphasis rounded-circle d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px"
              >
                <i class="fa-solid fa-clock"></i>
              </div>
            </div>
            <small class="text-body-secondary">Total number of products pending approval</small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Refused</h6>
                <h3 class="fw-bold mb-0">{{ statistics.rejectedArtworks }}</h3>
              </div>
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center"
                style="width: 40px; height: 40px"
              >
                <i class="fa-solid fa-ban"></i>
              </div>
            </div>
            <small class="text-danger fw-medium">Policy violation</small>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <div class="row g-3 mb-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="input-group bg-light rounded-pill px-2 border-0">
              <span class="input-group-text bg-transparent border-0 text-secondary">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                v-model="search"
                type="text"
                class="form-control bg-transparent border-0 shadow-none"
                placeholder="Search artwork..."
                @keyup.enter="handleSearch"
              />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-8 text-md-end">
            <button class="btn btn-outline-primary me-2">
              <i class="fa-solid fa-filter me-2"></i>Filter
            </button>
            <button class="btn btn-primary"><i class="fa-solid fa-plus me-2"></i>Add New</button>
          </div>
        </div>

        <div class="table-responsive text-nowrap overflow-y-auto">
          <table class="table table-hover align-middle text-nowrap mb-0 w-100">
            <thead class="table-light">
              <tr>
                <th scope="col" class="ps-3 py-3 fw-bold align-middle">Artwork</th>
                <th scope="col" class="ps-3 py-3 fw-bold align-middle">Type</th>
                <th scope="col" class="py-3 fw-bold align-middle">Author</th>
                <th scope="col" class="py-3 fw-bold align-middle">Year</th>
                <th scope="col" class="py-3 fw-bold align-middle">Material</th>
                <th scope="col" class="py-3 fw-bold align-middle">Size</th>
                <th scope="col" class="py-3 fw-bold align-middle">Starting Price</th>
                <th scope="col" class="py-3 fw-bold align-middle">Status</th>
                <th scope="col" class="py-3 fw-bold align-middle text-center">
                  <i class="fa-solid fa-ellipsis"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in artworks" :key="item.id">
                <td class="ps-3 align-middle">
                  <div class="d-flex align-items-center gap-3">
                    <img
                      :src="item.avtArtwork"
                      class="rounded border bg-light"
                      style="width: 48px; height: 48px; object-fit: cover"
                      alt="art"
                      loading="lazy"
                    />
                    <div>
                      <p class="mb-0 fw-bold text-dark">{{ item.title }}</p>
                      <small class="text-body-secondary">ID: #{{ item.id }}</small>
                    </div>
                  </div>
                </td>
                <td class="align-middle">{{ item.paintingGenre }}</td>
                <td class="align-middle">{{ item.author }}</td>
                <td class="align-middle">{{ item.yearOfCreation }}</td>
                <td class="align-middle">{{ item.material }}</td>
                <td class="align-middle">{{ item.size }}</td>
                <td class="fw-medium text-dark align-middle">{{ formatCurrency(item.price) }}</td>
                <td class="small text-body-secondary align-middle">{{ item.createdAt }}</td>
                <td class="align-middle">
                  <button
                    class="btn badge rounded-pill border fw-normal px-3 py-2"
                    :class="getStatusClass(item.status)"
                  >
                    {{ convertStatus(item.status) }}
                  </button>
                </td>
                <td class="text-center align-middle">
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-light rounded-circle"
                      type="button"
                      data-bs-toggle="dropdown"
                      style="width: 32px; height: 32px"
                    >
                      <i class="fa-solid fa-ellipsis-vertical text-secondary"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow border-0">
                      <li>
                        <RouterLink :to="`/admin/artwork-detail`" class="dropdown-item">
                          <i class="fa-solid fa-eye me-2 text-primary"></i>See details
                        </RouterLink>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="fa-solid fa-pen me-2 text-info"></i>Edit
                        </a>
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <button
                          class="dropdown-item text-danger"
                          @click="handleDelete(item.id, item.title)"
                        >
                          <i class="fa-solid fa-trash me-2"></i>Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
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
  data() {
    return {
      artworks: [],
      search: "",
      isLoading: false,
      statistics: [],
    };
  },
  mounted() {
    this.loadArtworkData();
    this.loadArtworkStatistical();
  },
  methods: {
    formatCurrency(value) {
      if (!value) return "0đ";
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },

    convertStatus(status) {
      switch (status) {
        case 0:
          return "Not approved";
        case 1:
          return "Approved";
        case 2:
          return "Up for auction";
        case 3:
          return "Refused";
        default:
          return "Unknown";
      }
    },

    getStatusClass(status) {
      // Sử dụng các class background/text chuẩn của Bootstrap 5.3
      switch (status) {
        case "0":
          return "bg-secondary-subtle border-secondary-subtle text-secondary";
        case "Sold":
          return "bg-success-subtle border-success-subtle text-success";
        case "2":
          return "bg-warning-subtle border-warning-subtle text-warning-emphasis";
        case "3":
          return "bg-danger-subtle border-danger-subtle text-danger";
        default:
          return "bg-secondary-subtle border-secondary-subtle text-secondary";
      }
    },

    loadArtworkData() {
      axios
        .get("http://localhost:8081/api/admin/artworks/lay-du-lieu-tac-pham", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.artworks = res.data;
          console.log(this.artworks);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    handleSearch() {
      // Nếu ô tìm kiếm trống thì load lại toàn bộ danh sách
      if (!this.search.trim()) {
        this.loadArtworkData();
        return;
      }
      this.isLoading = true;
      axios
        .get(`http://localhost:8081/api/admin/artworks/tim-kiem-tac-pham?q=${this.search}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.artworks = res.data;
          console.log("Kết quả tìm kiếm:", this.artworks);
        })
        .catch((err) => {
          console.error("Lỗi tìm kiếm:", err);
          this.artworks = [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // Xóa
    handleDelete(artworkId, artworkName) {
      if (!confirm(`Bạn có chắc chắn muốn xóa artwork: ${artworkName}?`)) return;
      axios
        .delete(`http://localhost:8081/api/admin/artworks/xoa-tac-pham/${artworkId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          alert("Đã xóa thành công!");
          this.loadArtworkData();
        })
        .catch((err) => {
          console.error("Lỗi khi xóa:", err);
          const message = err.response?.data?.message || "Có lỗi xảy ra khi xóa!";
          alert(message);
        });
    },

    //  card thống kê
    loadArtworkStatistical() {
      axios
        .get(`http://localhost:8081/api/admin/artworks/thong-ke-tac-pham`, {
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
    // handleDelete(item) {
    //   if (confirm("Are you sure you want to delete this artwork?")) {
    //     this.artworks = this.artworks.filter((a) => a.id !== item.id);
    //   }
    // },
  },
};
</script>
