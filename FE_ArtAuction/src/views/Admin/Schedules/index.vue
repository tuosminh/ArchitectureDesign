<template>
  <div class="container-fluid py-4 bg-light-subtle min-vh-100">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <div class="mb-3 mb-md-0">
        <h4 class="fw-bold text-primary mb-1">
          <i class="fa-regular fa-calendar-days me-2"></i>Lịch Trình Đấu Giá
        </h4>
        <p class="text-body-secondary mb-0">Quản lý và theo dõi các phiên đấu giá</p>
      </div>

      <div class="d-flex gap-2">
        <button
          class="btn btn-white bg-white border shadow-sm text-secondary fw-medium"
          @click="goToToday"
        >
          Hôm nay
        </button>

        <!-- <button
          class="btn btn-primary shadow-sm fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#addEventModal"
          @click="resetForm"
        >
          <i class="fa-solid fa-plus me-2"></i>Thêm lịch mới
        </button> -->
      </div>
    </div>

    <div class="card border-0 shadow-sm mb-4 rounded-4">
      <div class="card-body py-2">
        <div class="row align-items-center g-3">
          <div class="col-12 col-md-5 d-flex align-items-center gap-3">
            <div class="btn-group">
              <button class="btn btn-light rounded-circle border" @click="prevMonth">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button class="btn btn-light rounded-circle border ms-2" @click="nextMonth">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <h4 class="mb-0 fw-bold text-dark text-uppercase">
              Tháng {{ currentMonth + 1 }} / {{ currentYear }}
            </h4>
          </div>
          <div
            class="col-12 col-md-7 d-flex align-items-center justify-content-md-end gap-3 flex-wrap"
          >
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-danger rounded-circle p-1"> </span
              ><small class="text-secondary bg-danger px-2 rounded-2 text-light"
                >Đang diễn ra</small
              >
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-warning text-dark rounded-circle p-1"> </span
              ><small class="text-secondary bg-warning px-2 rounded-2 text-dark">Sắp tới</small>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-secondary rounded-circle p-1"> </span
              ><small class="text-secondary bg-secondary px-2 rounded-2 text-light"
                >Đã kết thúc</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-bordered mb-0" style="table-layout: fixed">
            <thead class="bg-light text-center">
              <tr>
                <th
                  v-for="day in weekDays"
                  :key="day"
                  class="py-3 text-uppercase text-secondary small fw-bold"
                  style="width: 14.28%"
                >
                  {{ day }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(week, wIndex) in calendarGrid" :key="wIndex">
                <td
                  v-for="(dateObj, dIndex) in week"
                  :key="dIndex"
                  class="p-2 align-top cell-hover position-relative transition-base"
                  :class="getCellClass(dateObj)"
                  style="height: 130px; cursor: pointer"
                  @click="selectDate(dateObj)"
                >
                  <div class="d-flex justify-content-between align-items-start mb-1">
                    <span
                      class="fw-bold small rounded-circle d-flex align-items-center justify-content-center"
                      :class="isToday(dateObj) ? 'bg-primary text-white shadow-sm' : ''"
                      style="width: 28px; height: 28px"
                      >{{ dateObj.date.getDate() }}</span
                    >
                    <small class="text-muted opacity-0 add-icon"
                      ><i class="fa-solid fa-plus"></i
                    ></small>
                  </div>
                  <div
                    class="d-flex flex-column gap-1 overflow-y-auto custom-scrollbar"
                    style="max-height: 85px"
                  >
                    <div
                      v-for="event in getEventsForDate(dateObj.date)"
                      :key="event.id"
                      class="badge text-start fw-normal text-truncate w-100 p-1 border shadow-sm event-badge"
                      :class="getEventColorClass(event.status)"
                      @click.stop="viewEvent(event)"
                      :title="event.title"
                    >
                      <span class="fw-bold me-1">{{ event.time }}</span> {{ event.title }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal fade" id="addEventModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title fw-bold">
              <i class="fa-solid fa-clock me-2"></i>Lên Lịch Đấu Giá
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              id="closeAddModalBtn"
            ></button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="saveNewEvent">
              <div class="mb-3">
                <label class="form-label fw-bold small text-secondary text-uppercase"
                  >Phòng đấu giá</label
                >
                <select class="form-select bg-light" v-model="newEvent.roomId" required>
                  <option value="" disabled>-- Chọn phòng --</option>
                  <option v-for="room in roomsList" :key="room.id" :value="room.id">
                    {{ room.name }} ({{ room.artwork }})
                  </option>
                </select>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase">Ngày</label>
                  <input
                    type="date"
                    class="form-control bg-light"
                    v-model="newEvent.date"
                    required
                  />
                </div>
                <div class="col-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Giờ bắt đầu</label
                  >
                  <input
                    type="time"
                    class="form-control bg-light"
                    v-model="newEvent.time"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold small text-secondary text-uppercase"
                  >Ghi chú</label
                >
                <textarea class="form-control bg-light" rows="2" v-model="newEvent.note"></textarea>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary fw-bold py-2">
                  <i class="fa-solid fa-save me-2"></i>Lưu Lịch Trình
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="viewEventModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold text-primary">Chi tiết phiên đấu giá</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              id="closeViewModalBtn"
            ></button>
          </div>
          <div class="modal-body pt-2" v-if="selectedEvent">
            <div class="card bg-light border-0 mb-3">
              <div class="card-body">
                <h5 class="fw-bold mb-1">{{ selectedEvent.title }}</h5>
                <p class="text-muted small mb-0">ID: #EVT-{{ selectedEvent.id }}</p>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3 p-2 border rounded">
              <span class="fw-bold text-secondary">Trạng thái</span>
              <span
                class="badge rounded-pill px-3 py-2"
                :class="getEventColorClass(selectedEvent.status)"
              >
                {{ getStatusText(selectedEvent.status) }}
              </span>
            </div>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span><i class="fa-regular fa-calendar me-2 text-secondary"></i>Ngày</span>
                <span class="fw-medium">{{ formatDate(selectedEvent.date) }}</span>
              </li>
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span><i class="fa-regular fa-clock me-2 text-secondary"></i>Thời gian</span>
                <span class="fw-medium">{{ selectedEvent.time }} (2 tiếng)</span>
              </li>
            </ul>
          </div>
          <div class="modal-footer border-0 bg-light">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              Đóng
            </button>
            <button
              v-if="selectedEvent && selectedEvent.status === 'live'"
              class="btn btn-danger fw-bold"
            >
              Vào Phòng Live
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionSchedule",
  data() {
    return {
      weekDays: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
      currentDate: new Date(),

      newEvent: {
        roomId: "",
        date: "",
        time: "09:00",
        note: "",
      },
      selectedEvent: null,

      // DATA MẪU
      roomsList: [
        { id: 101, name: "Phòng Tranh Mùa Thu", artwork: "Sơn Dầu" },
        { id: 102, name: "Phòng Trừu Tượng VIP", artwork: "Trừu Tượng" },
        { id: 103, name: "Gây Quỹ Từ Thiện", artwork: "Màu Nước" },
      ],
      events: [
        { id: 1, title: "Phòng Tranh Mùa Thu", date: "2025-11-01", time: "09:00", status: "ended" },
        { id: 2, title: "Phòng Trừu Tượng VIP", date: "2025-11-21", time: "14:00", status: "live" },
        { id: 3, title: "Gây Quỹ Từ Thiện", date: "2025-11-25", time: "19:00", status: "upcoming" },
      ],
    };
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      return this.currentDate.getMonth();
    },

    calendarGrid() {
      const year = this.currentYear;
      const month = this.currentMonth;
      const firstDay = new Date(year, month, 1);
      const startDayOfWeek = firstDay.getDay();
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - startDayOfWeek);

      const weeks = [];
      let currentWeek = [];

      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        currentWeek.push({
          date: date,
          isCurrentMonth: date.getMonth() === month,
        });
        if (currentWeek.length === 7) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }
      return weeks;
    },
  },
  methods: {
    // --- Time Navigation ---
    prevMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth + 1, 1);
    },
    goToToday() {
      this.currentDate = new Date();
    },

    // --- Helpers ---
    isToday(dateObj) {
      const today = new Date();
      return dateObj.date.toDateString() === today.toDateString();
    },
    getCellClass(dateObj) {
      return dateObj.isCurrentMonth ? "bg-white" : "bg-light-subtle text-muted";
    },
    formatDate(dateStr) {
      if (!dateStr) return "";
      const [y, m, d] = dateStr.split("-");
      return `${d}/${m}/${y}`;
    },
    getStatusText(status) {
      const map = { live: "Đang diễn ra", upcoming: "Sắp tới", ended: "Đã kết thúc" };
      return map[status] || status;
    },

    // --- Event Logic ---
    getEventsForDate(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      const dateStr = `${y}-${m}-${d}`;
      return this.events.filter((e) => e.date === dateStr);
    },
    getEventColorClass(status) {
      switch (status) {
        case "live":
          return "bg-danger text-white border-danger";
        case "upcoming":
          return "bg-warning text-dark border-warning";
        case "ended":
          return "bg-secondary text-white border-secondary";
        default:
          return "bg-light text-dark";
      }
    },

    // --- Modal Actions (Dùng click simulation để tương thích tốt nhất) ---

    // 1. Reset form khi bấm nút "Thêm mới"
    resetForm() {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, "0");
      const d = String(today.getDate()).padStart(2, "0");
      this.newEvent = { roomId: "", date: `${y}-${m}-${d}`, time: "09:00", note: "" };
    },

    // 2. Click vào ô ngày -> Mở modal thêm mới
    selectDate(dateObj) {
      const y = dateObj.date.getFullYear();
      const m = String(dateObj.date.getMonth() + 1).padStart(2, "0");
      const d = String(dateObj.date.getDate()).padStart(2, "0");

      this.newEvent.date = `${y}-${m}-${d}`;

      // Dùng JS thuần để kích hoạt nút mở modal (Cách an toàn nhất)
      const btn = document.querySelector('[data-bs-target="#addEventModal"]');
      if (btn) btn.click();
    },

    // 3. Lưu sự kiện
    saveNewEvent() {
      if (!this.newEvent.roomId || !this.newEvent.date) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
      }

      const room = this.roomsList.find((r) => r.id === this.newEvent.roomId);
      this.events.push({
        id: Date.now(),
        title: room ? room.name : "Sự kiện mới",
        date: this.newEvent.date,
        time: this.newEvent.time,
        status: "upcoming",
      });

      // Đóng modal bằng cách click nút close ẩn
      document.getElementById("closeAddModalBtn").click();
    },

    // 4. Xem chi tiết
    viewEvent(event) {
      this.selectedEvent = event;
      // Kích hoạt modal xem chi tiết (cần thêm nút ẩn hoặc dùng JS Bootstrap nếu có)
      // Ở đây tôi dùng cách đơn giản: Yêu cầu bạn thêm data-bs-toggle vào chính cái thẻ event div

      // Cách fix nhanh nhất cho view detail:
      const myModal = new window.bootstrap.Modal(document.getElementById("viewEventModal"));
      myModal.show();
    },
  },
};
</script>

<style scoped></style>
