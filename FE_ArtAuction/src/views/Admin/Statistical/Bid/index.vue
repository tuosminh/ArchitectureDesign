<template>
  <div class="card border-0 shadow-sm h-100">
    <div
      class="card-header bg-white border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center flex-wrap gap-2"
    >
      <div>
        <h5 class="fw-bold text-danger mb-1">Total Bids</h5>
        <p class="text-muted small mb-0">Lượt đặt giá theo khung giờ</p>
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
      <div v-if="!filterDate" class="text-center py-5 bg-light text-muted">
        <i class="fa-solid fa-filter fs-1 mb-3 opacity-25"></i>
        <p>Vui lòng chọn ngày để xem biểu đồ lượt bid</p>
      </div>
      <div v-else style="height: 400px; position: relative">
        <canvas id="bidChart"></canvas>
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

      const ctx = document.getElementById("bidChart");
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["08:00", "12:00", "16:00", "20:00"],
          datasets: [
            {
              label: "Lượt Bid",
              data: [50, 120, 80, 300],
              borderColor: "#dc3545",
              tension: 0.3,
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
