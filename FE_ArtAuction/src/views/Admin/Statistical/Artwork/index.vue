<template>
  <div class="card border-0 shadow-sm h-100">
    <div
      class="card-header bg-white border-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center flex-wrap gap-2"
    >
      <div>
        <h5 class="fw-bold text-success mb-1">Painting Genre Statistics</h5>
        <p class="text-muted small mb-0">Phân bố tác phẩm theo thể loại</p>
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
      <div v-if="!filterMonth" class="text-center py-5 text-muted bg-light rounded mt-3">
        <i class="fa-solid fa-filter fs-1 mb-3 opacity-25"></i>
        <p class="mb-0">Vui lòng chọn tháng để xem thống kê tác phẩm</p>
      </div>

      <div v-else style="height: 400px; position: relative">
        <canvas id="artworkGenreChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "ArtworkStats",
  data() {
    return {
      chart: null,
      filterMonth: "", // Mặc định rỗng để bắt buộc chọn
    };
  },
  methods: {
    updateChart() {
      if (!this.filterMonth) return;

      // Hủy biểu đồ cũ nếu có để vẽ lại
      if (this.chart) this.chart.destroy();

      const ctx = document.getElementById("artworkGenreChart");

      // Giả lập dữ liệu API trả về
      this.chart = new Chart(ctx, {
        type: "bar", // Hoặc 'pie', 'doughnut' tùy sở thích
        data: {
          labels: ["Sơn dầu", "Màu nước", "Ký họa", "Trừu tượng", "Chân dung", "Điêu khắc"],
          datasets: [
            {
              label: "Số lượng tác phẩm",
              data: [120, 80, 45, 90, 60, 30],
              backgroundColor: [
                "#198754", // Success
                "#0d6efd", // Primary
                "#ffc107", // Warning
                "#dc3545", // Danger
                "#0dcaf0", // Info
                "#6c757d", // Secondary
              ],
              borderRadius: 4,
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }, // Ẩn legend nếu dùng Bar chart
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${context.parsed.y} tác phẩm`;
                },
              },
            },
          },
          scales: {
            y: { beginAtZero: true, grid: { borderDash: [2, 4] } },
            x: { grid: { display: false } },
          },
        },
      });
    },
  },
  beforeUnmount() {
    if (this.chart) this.chart.destroy();
  },
};
</script>
