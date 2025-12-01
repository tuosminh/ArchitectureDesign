<template>
  <div class="container py-5">
    <div class="mb-4">
      <router-link to="/admin/management-artwork" class="btn btn-outline-secondary border-0 ps-0">
        <i class="fa-solid fa-arrow-left me-2"></i>Back to Artwork List
      </router-link>
    </div>

    <div class="row g-5">
      <div class="col-12 col-lg-7">
        <div class="card border-0 shadow-sm overflow-hidden">
          <div id="artworkCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                v-for="(img, index) in allImages"
                :key="'ind-' + index"
                type="button"
                data-bs-target="#artworkCarousel"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0"
              ></button>
            </div>

            <div class="carousel-inner bg-light">
              <div
                v-for="(img, index) in allImages"
                :key="'slide-' + index"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <div
                  class="d-flex align-items-center justify-content-center"
                  style="height: 500px; background-color: #f8f9fa"
                >
                  <img
                    :src="img.src"
                    class="d-block mw-100 mh-100 shadow-sm"
                    :alt="img.alt"
                    style="object-fit: contain"
                  />
                </div>
                <div class="carousel-caption d-none d-md-block" v-if="img.type === 'cert'">
                  <span class="badge bg-dark bg-opacity-75 fs-6">
                    <i class="fa-solid fa-file-contract me-2"></i>Certificate / Confirmation
                  </span>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#artworkCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-dark rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#artworkCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-dark rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="mt-3 text-center text-muted small">
          <i class="fa-solid fa-images me-1"></i> Includes {{ artworkImages.length }} artwork photos
          and {{ certImages.length }} certificates.
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <div class="h-100 d-flex flex-column">
          <div class="mb-3">
            <span class="badge text-primary border rounded-pill px-3 mb-2"> Original Work </span>
            <h2 class="fw-bold text-dark mb-1">Đêm đầy sao</h2>
            <p class="text-secondary fs-5 mb-0">
              Artist: <span class="fw-semibold text-dark">Nguyễn Văn A</span>
            </p>
          </div>

          <div class="card border-0 shadow-sm bg-light mb-4">
            <div class="card-body p-4">
              <div class="row g-3 text-center mb-4">
                <div class="col-4 border-end">
                  <small class="text-uppercase text-secondary" style="font-size: 0.75rem"
                    >Year</small
                  >
                  <div class="fw-bold fs-5 text-dark">2004</div>
                </div>
                <div class="col-4 border-end">
                  <small class="text-uppercase text-secondary" style="font-size: 0.75rem"
                    >Material</small
                  >
                  <div class="fw-bold fs-5 text-dark">Oil Paint</div>
                </div>
                <div class="col-4">
                  <small class="text-uppercase text-secondary" style="font-size: 0.75rem"
                    >Size</small
                  >
                  <div class="fw-bold fs-5 text-dark">30x30 cm</div>
                </div>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-secondary text-uppercase small">Description</h6>
                <p class="text-body-secondary mb-0" style="text-align: justify">
                  The work beautifully depicts the starry night, combining traditional oil painting
                  techniques with modern inspiration. Bright colors, the combination creates a
                  mesmerizing effect suitable for modern living spaces.
                </p>
              </div>

              <div
                class="d-flex align-items-center justify-content-between bg-white p-3 rounded border"
              >
                <span class="text-secondary fw-medium">Starting Price</span>
                <span class="fs-3 fw-bold text-primary">50.000 ₫</span>
              </div>
            </div>
          </div>

          <div
            class="alert alert-success d-flex align-items-center border-success shadow-sm mb-4"
            role="alert"
          >
            <div class="fs-1 me-3 text-success">
              <i class="fa-solid fa-shield-check"></i>
            </div>
            <div>
              <h6 class="alert-heading fw-bold mb-0">AI Verification Passed</h6>
              <small>Confirmed by Artist & System AI Analysis</small>
            </div>
            <div class="ms-auto">
              <i class="fa-solid fa-check-circle fs-3"></i>
            </div>
          </div>

          <div class="mt-auto d-grid gap-2 d-md-flex">
            <button type="button" class="btn btn-danger btn-lg flex-grow-1 shadow-sm">
              <i class="fa-solid fa-xmark me-2"></i>Reject
            </button>
            <button type="button" class="btn btn-primary btn-lg flex-grow-1 shadow-sm">
              <i class="fa-solid fa-check me-2"></i>Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dữ liệu giả lập ảnh để render v-for
      artworkImages: [
        { src: "/src/assets/img/4.png", alt: "Artwork View 1", type: "art" },
        { src: "/src/assets/img/4.png", alt: "Artwork View 2", type: "art" },
        { src: "/src/assets/img/cotiendan.png", alt: "Artwork Detail", type: "art" },
        { src: "/src/assets/img/4.png", alt: "Artwork Angle", type: "art" },
        { src: "/src/assets/img/4.png", alt: "Artwork Zoom", type: "art" },
      ],
      // 2 ảnh giấy xác nhận thêm vào
      certImages: [
        {
          src: "https://via.placeholder.com/600x400?text=Certificate+1",
          alt: "Certificate 1",
          type: "cert",
        },
        {
          src: "https://via.placeholder.com/600x400?text=Certificate+2",
          alt: "Certificate 2",
          type: "cert",
        },
      ],
    };
  },
  computed: {
    // Gộp tất cả ảnh lại để hiển thị trong 1 carousel
    allImages() {
      return [...this.artworkImages, ...this.certImages];
    },
  },
};
</script>

<style scoped>
/* Tinh chỉnh icon prev/next của carousel để dễ nhìn trên nền sáng */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-size: 50%, 50%;
}
</style>
