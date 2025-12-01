<template>
  <div class="card border-0 shadow-sm h-100">
    <div
      class="card-header bg-white border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center flex-wrap gap-2"
    >
      <div>
        <h5 class="fw-bold text-info mb-1">User Registrations</h5>
        <p class="text-muted small mb-0">Lượng người đăng ký mới</p>
      </div>
      <div class="input-group input-group-sm shadow-sm" style="width: 200px">
        <span class="input-group-text bg-white border-end-0"
          ><i class="fa-regular fa-calendar"></i
        ></span>
        <input
          type="date"
          class="form-control border-start-0 ps-0"
          v-model="filterDate"
          @change="updateChart"
        />
      </div>
    </div>
    <div class="card-body px-4 pb-4">
      <div v-if="!filterDate" class="text-center py-5 text-muted bg-light">
        <i class="fa-solid fa-filter fs-1 mb-3 opacity-25"></i>
        <p>Vui lòng chọn ngày để xem biểu đồ người dùng</p>
      </div>
      <div v-else style="height: 400px; position: relative">
        <canvas id="userChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return { chart: null, filterDate: "" };
  },
  methods: {
    updateChart() {
      if (!this.filterDate) return;
      if (this.chart) this.chart.destroy();

      const ctx = document.getElementById("userChart");
      this.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
          datasets: [
            {
              label: "Người đăng ký",
              data: [12, 19, 3, 5, 2, 3, 10],
              backgroundColor: "#0dcaf0",
              borderRadius: 4,
            },
          ],
        },
        options: { responsive: true, maintainAspectRatio: false },
      });
    },
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
  },
};
</script>
