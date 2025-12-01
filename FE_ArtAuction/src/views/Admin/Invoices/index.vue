<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="mb-4">
      <h4 class="text-primary fw-bold mb-1">Manage Invoices</h4>
      <p class="text-body-secondary mb-0">Track and manage all invoices in the system</p>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Total Bill</h6>
                <h3 class="card-text fw-bold mb-0">{{ statistics.totalInvoices }}</h3>
              </div>
              <div
                class="bg-secondary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-file-lines fs-5"></i>
              </div>
            </div>
            <small class="text-success fw-medium">
              <i class="fa-solid fa-arrow-up me-1"></i>Total invoices
            </small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Paid</h6>
                <h3 class="card-text fw-bold mb-0">{{ statistics.paidInvoices }}</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-circle-check fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">Total invoices paid</small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Waiting</h6>
                <h3 class="card-text fw-bold mb-0">{{ statistics.pendingInvoices }}</h3>
              </div>
              <div
                class="bg-warning-subtle text-warning-emphasis rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-clock fs-5"></i>
              </div>
            </div>
            <small class="text-body-secondary">Total pending invoices</small>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Overdue</h6>
                <h3 class="card-text fw-bold mb-0">{{ statistics.failedInvoices }}</h3>
              </div>
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-ban fs-5"></i>
              </div>
            </div>
            <small class="text-danger fw-medium">Need to process</small>
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
                placeholder="Search invoices, buyers..."
                @keyup.enter="handleSearch"
              />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-8 text-md-end">
            <button class="btn btn-outline-primary">
              <i class="fa-solid fa-filter me-2"></i>Filter
            </button>
            <!-- <button class="btn btn-primary ms-2">
              <i class="fa-solid fa-plus me-2"></i>Create Invoice
            </button> -->
          </div>
        </div>

        <div class="table-responsive text-nowrap overflow-y-auto">
          <table class="table table-hover align-middle text-nowrap mb-0 w-100">
            <thead class="table-light">
              <tr class="align-middle">
                <th scope="col" class="py-3 fw-bold ps-3">BuyerID</th>
                <th scope="col" class="py-3 fw-bold">ArtworkID</th>
                <th scope="col" class="py-3 fw-bold">Price</th>
                <!-- <th scope="col" class="py-3 fw-bold">Service fee</th> -->
                <th scope="col" class="py-3 fw-bold">Total</th>
                <th scope="col" class="py-3 fw-bold">Payment method</th>
                <th scope="col" class="py-3 fw-bold">Created at</th>
                <th scope="col" class="py-3 fw-bold">Status</th>
                <th scope="col" class="py-3 fw-bold text-center">
                  <i class="fa-solid fa-ellipsis"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(v, i) in invoices" :key="i">
                <tr>
                  <td class="ps-3 align-middle">
                    {{ v.userId }}
                  </td>

                  <td class="align-middle">
                    {{ v.artworkId }}
                  </td>

                  <td class="text-body-secondary align-middle">
                    {{ formatCurrency(v.amount) }}
                  </td>
                  <td class="text-body-secondary align-middle">{{ formatCurrency(v.fee) }}</td>
                  <td class="text-primary fw-bold align-middle">
                    {{ formatCurrency(v.totalAmount) }}
                  </td>
                  <td class="align-middle">
                    <span class="d-inline-flex align-items-center gap-2">
                      <i class="fa-regular fa-credit-card text-secondary"></i>
                      {{ v.paymentMethod }}
                    </span>
                  </td>
                  <td class="small text-secondary align-middle">
                    {{ v.createdAt }}
                  </td>
                  <td class="align-middle">
                    <button
                      class="btn badge rounded-pill border fw-normal px-3 py-2"
                      :class="getStatusClass(v.invoiceStatus)"
                    >
                      {{ convertStatus(v.invoiceStatus) }}
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
                          <a class="dropdown-item" href="#">
                            <i class="fa-solid fa-eye me-2 text-info"></i>See details
                          </a>
                        </li>
                        <li>
                          <button class="dropdown-item">
                            <i class="fa-solid fa-download me-2 text-secondary"></i>Download PDF
                          </button>
                        </li>

                        <li><hr class="dropdown-divider" /></li>

                        <template v-if="v.invoiceStatus === 0 || v.invoiceStatus === 2">
                          <li>
                            <button class="dropdown-item text-success" @click="confirmPayment(v)">
                              <i class="fa-solid fa-check-double me-2"></i>Confirm Payment
                            </button>
                          </li>
                          <li><hr class="dropdown-divider" /></li>
                        </template>

                        <li>
                          <button class="dropdown-item text-danger" @click="handleDelete(v.id)">
                            <i class="fa-solid fa-ban me-2"></i>Delete invoice
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </template>
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
      invoices: [],
      isLoading: false,
      search: "",
      statistics: {},
    };
  },

  mounted() {
    this.loadInvoiceData();
    this.loadInvoiceStatistical();
  },

  methods: {
    formatCurrency(value) {
      if (!value) return "0₫";
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },

    loadInvoiceData() {
      axios
        .get("http://localhost:8081/api/admin/invoices/lay-du-lieu", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.invoices = res.data.data;
          console.log("test", res.data.data || []);
        })
        .catch((err) => {
          console.log("lỗi");

          console.error(err);
        });
    },
    convertStatus(status) {
      switch (status) {
        case 0:
          return "Pending";
        case 1:
          return "Paid";
        case 2:
          return "Failed";
        // default:
        //   return "Unknown";
      }
    },
    getStatusClass(status) {
      switch (status) {
        case 1:
          return "bg-success-subtle border-success-subtle text-success";
        case 0:
          return "bg-warning-subtle border-warning-subtle text-warning-emphasis";
        case 2:
          return "bg-danger-subtle border-danger-subtle text-danger";
        // case "Cancelled":
        //   return "bg-secondary-subtle border-secondary-subtle text-secondary";
      }
    },

    confirmPayment(invoice) {
      if (confirm(`Confirmation of receipt of full payment from ${invoice.buyer}?`)) {
        invoice.status = "Paid";
      }
    },

    cancelInvoice(invoice) {
      if (confirm("Are you sure you want to CANCEL this invoice?")) {
        invoice.status = "Cancelled";
      }
    },

    handleSearch() {
      // Nếu ô tìm kiếm trống thì load lại toàn bộ danh sách
      if (!this.search.trim()) {
        this.loadInvoiceData();
        return;
      }
      this.isLoading = true;
      axios
        .get(`http://localhost:8081/api/admin/invoices/tim-kiem?q=${this.search}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.invoices = res.data.data;
          console.log("Kết quả tìm kiếm:", this.invoices);
        })
        .catch((err) => {
          console.error("Lỗi tìm kiếm:", err);
          this.invoices = [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    handleDelete(invoiceId) {
      if (!confirm(`Bạn có chắc chắn muốn xóa invoice này không?`)) return;
      axios
        .delete(`http://localhost:8081/api/admin/invoices/xoa/${invoiceId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          alert("Đã xóa thành công!");
          this.loadAdminData();
        })
        .catch((err) => {
          console.error("Lỗi khi xóa:", err);
          const message = err.response?.data?.message || "Có lỗi xảy ra khi xóa!";
          alert(message);
        });
    },

    //  card thống kê
    loadInvoiceStatistical() {
      axios
        .get(`http://localhost:8081/api/admin/invoices/thong-ke`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.statistics = res.data.data;
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
};
</script>
