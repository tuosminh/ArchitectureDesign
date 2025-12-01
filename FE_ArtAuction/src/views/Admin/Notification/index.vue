<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <div class="mb-3 mb-md-0">
        <h4 class="fw-bold text-primary mb-1">Auction Room Management</h4>
        <p class="text-body-secondary mb-0">Manage all auction rooms notifications</p>
      </div>
      <router-link to="/admin/sent-notification" class="btn btn-primary shadow-sm px-4">
        <i class="fa-solid fa-paper-plane"></i> Create Notification
      </router-link>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Total Notifications</h6>
                <h3 class="fw-bold mb-0">1,222</h3>
              </div>
              <div
                class="bg-secondary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-bell fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Sent</h6>
                <h3 class="fw-bold mb-0">100</h3>
              </div>
              <div
                class="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-circle-check fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Failed</h6>
                <h3 class="fw-bold mb-0">12</h3>
              </div>
              <div
                class="bg-danger-subtle text-danger rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-ban fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-xl-3">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h6 class="card-subtitle text-secondary fw-bold mb-1">Read Rate</h6>
                <h3 class="fw-bold mb-0">80%</h3>
              </div>
              <div
                class="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-eye fs-5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-12 col-md-8">
            <div class="input-group bg-light rounded-pill px-2 border-0">
              <span class="input-group-text bg-transparent border-0 text-secondary">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                class="form-control bg-transparent border-0 shadow-none"
                placeholder="Search by notification content..."
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <select
              class="form-select rounded-pill border-0 bg-light shadow-none"
              aria-label="Filter select"
            >
              <option selected>All Status</option>
              <option value="1">Sent</option>
              <option value="2">Failed</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex no-scrollbar flex-column gap-3 overflow-y-auto" style="max-height: 400px">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div class="d-flex align-items-center gap-3">
              <h5 class="fw-bold mb-0">The auction is about to begin</h5>
              <span
                class="badge bg-success-subtle text-success rounded-pill border border-success-subtle"
                >Sent</span
              >
            </div>
            <div class="d-flex align-items-center text-body-secondary">
              <i class="fa-solid fa-user-group me-2"></i>
              <small>Receiver: <strong>All</strong></small>
            </div>
          </div>

          <p class="mb-2 text-dark">Room 01 will start the auction at 10:00 on March 26, 2024</p>

          <div class="d-flex align-items-center text-muted small">
            <i class="fa-regular fa-clock me-2"></i>
            <span>25/03/2024 09:00</span>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div class="d-flex align-items-center gap-3">
              <h5 class="fw-bold mb-0">Phòng đấu giá sắp bắt đầu</h5>
              <span
                class="badge bg-success-subtle text-success rounded-pill border border-success-subtle"
                >Sent</span
              >
            </div>
            <div class="d-flex align-items-center text-body-secondary">
              <i class="fa-solid fa-user-group me-2"></i>
              <small>Receiver: <strong>VIP Members</strong></small>
            </div>
          </div>

          <p class="mb-2 text-dark">
            Phòng VIP 01 sẽ bắt đầu phiên đấu giá vào lúc 10:00 ngày 26/03/2024
          </p>

          <div class="d-flex align-items-center text-muted small">
            <i class="fa-regular fa-clock me-2"></i>
            <span>25/03/2024 09:00</span>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div class="d-flex align-items-center gap-3">
              <h5 class="fw-bold mb-0">Cảnh báo vi phạm</h5>
              <span
                class="badge bg-danger-subtle text-danger rounded-pill border border-danger-subtle"
                >Failed</span
              >
            </div>
            <div class="d-flex align-items-center text-body-secondary">
              <i class="fa-solid fa-user me-2"></i>
              <small>Receiver: <strong>User #123</strong></small>
            </div>
          </div>

          <p class="mb-2 text-dark">Tài khoản của bạn bị tạm khóa do vi phạm chính sách.</p>

          <div class="d-flex align-items-center text-muted small">
            <i class="fa-regular fa-clock me-2"></i>
            <span>25/03/2024 08:30</span>
            <span class="ms-3 text-danger"
              ><i class="fa-solid fa-circle-exclamation me-1"></i>Network Error</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
