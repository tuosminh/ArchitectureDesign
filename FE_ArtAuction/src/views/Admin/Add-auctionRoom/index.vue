<template>
  <div class="container py-4">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <div class="mb-3 mb-md-0">
        <h4 class="fw-bold text-primary mb-1">Create new auction room</h4>
        <p class="text-body-secondary mb-0">
          Set up information, schedules, and display configurations
        </p>
      </div>
      <!-- <div class="d-flex gap-2">
        <button class="btn btn-light text-danger fw-bold shadow-sm px-4">Hủy bỏ</button>
        <button class="btn btn-primary fw-bold shadow-sm px-4" @click="submitForm">
          <i class="fa-solid fa-check me-2"></i>Hoàn tất
        </button>
      </div> -->
    </div>

    <form @submit.prevent="submitForm">
      <div class="card border-0 shadow-sm mb-4 rounded-3">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-secondary-subtle bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
              style="width: 48px; height: 48px"
            >
              <i class="fa-solid fa-pager fs-5"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-0">Basic information</h5>
              <small class="text-muted">Set up general information for the auction room</small>
            </div>
          </div>

          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Auction room name</label
              >
              <input
                type="text"
                class="form-control bg-light border-0"
                placeholder="Enter room name..."
              />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Main genre of work</label
              >
              <input
                type="text"
                class="form-control bg-light border-0"
                placeholder="VD: Tranh sơn dầu..."
              />
            </div>
            <div class="col-12">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Short description</label
              >
              <textarea
                class="form-control bg-light border-0"
                rows="2"
                placeholder="Detailed description..."
              ></textarea>
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Admin in charge</label
              >
              <input
                type="text"
                class="form-control bg-light border-0"
                placeholder="Manager name..."
              />
            </div>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4 rounded-3">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-4">
            <div
              class="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center me-3"
              style="width: 48px; height: 48px"
            >
              <i class="fa-solid fa-images fs-5"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-0">Select auction artwork</h5>
              <small class="text-muted">Filter by category and add to list</small>
            </div>
          </div>

          <div class="row g-3 mb-4">
            <div class="col-12 col-md-6">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Lọc theo thể loại</label
              >
              <select v-model="selectedCategory" class="form-select bg-light border-0">
                <option value="" disabled selected hidden>
                  -- Select category to display pictures --
                </option>
                <option value="son-dau">Canvas</option>
                <option value="chan-dung">Portrait painting</option>
              </select>
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label fw-bold small text-secondary text-uppercase"
                >Quick search</label
              >
              <div class="input-group border-0">
                <span class="input-group-text bg-light border-0 text-secondary"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input
                  type="text"
                  class="form-control bg-light border-0 shadow-none"
                  placeholder="Enter the name of the picture..."
                />
              </div>
            </div>
          </div>

          <div v-if="selectedCategory">
            <p class="fw-bold text-primary mb-2 small text-uppercase">
              <i class="fa-solid fa-list me-2"></i>List of available works
            </p>

            <div class="row g-3" v-if="filteredArtworks.length > 0">
              <div class="col-12 col-md-6" v-for="art in filteredArtworks" :key="art.id">
                <div class="card border h-100" style="cursor: pointer" @click="addToSchedule(art)">
                  <div class="card-body p-2 d-flex align-items-start">
                    <img
                      :src="art.img"
                      class="rounded me-3 border bg-light"
                      style="width: 80px; height: 80px; object-fit: cover"
                    />

                    <div class="flex-grow-1">
                      <div class="d-flex justify-content-between">
                        <h6
                          class="fw-bold mb-0 text-dark text-truncate"
                          style="max-width: 200px"
                          :title="art.name"
                        >
                          {{ art.name }}
                        </h6>
                        <small class="badge bg-light text-secondary border">ID: {{ art.id }}</small>
                      </div>
                      <small class="text-muted d-block mb-2">{{ art.author }}</small>

                      <div class="d-flex gap-1 flex-wrap">
                        <span
                          class="badge bg-secondary-subtle text-primary border border-secondary-subtle fw-normal"
                          style="font-size: 0.7rem"
                        >
                          <i class="fa-solid fa-ruler-combined me-1"></i>{{ art.size }}
                        </span>
                        <span
                          class="badge bg-secondary-subtle text-secondary border border-secondary-subtle fw-normal"
                          style="font-size: 0.7rem"
                        >
                          {{ art.type }}
                        </span>
                      </div>
                    </div>

                    <div class="ms-2">
                      <button
                        type="button"
                        class="btn btn-sm btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="text-center text-muted py-3 bg-light rounded small">
              No entries are suitable or have been taken.
            </div>
          </div>

          <div v-else class="text-center py-4 bg-light rounded border border-dashed">
            <i class="fa-solid fa-filter text-secondary fs-3 mb-2"></i>
            <p class="text-muted mb-0">
              Please select <b>Category</b> to see the list of pictures.
            </p>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4 rounded-3" v-if="scheduleList.length > 0">
        <div class="card-body p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="d-flex align-items-center">
              <div
                class="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                style="width: 48px; height: 48px"
              >
                <i class="fa-solid fa-hourglass-half fs-5"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-0">Schedule and Pricing Configuration</h5>
                <small class="text-muted"
                  >Sắp xếp thứ tự và đặt giá cho {{ scheduleList.length }} work</small
                >
              </div>
            </div>
            <span class="badge bg-secondary-subtle text-primary fs-6 px-3 py-2 rounded-pill">
              <i class="fa-regular fa-clock me-1"></i> Total: {{ totalDuration }} minute
            </span>
          </div>

          <div class="d-flex flex-column gap-3">
            <div
              class="card border border-secondary-subtle bg-light-subtle"
              v-for="(item, index) in scheduleList"
              :key="item.id"
            >
              <div class="card-body p-3">
                <div class="row align-items-center g-3">
                  <div class="col-12 col-lg-5 d-flex align-items-center gap-3">
                    <div
                      class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style="width: 28px; height: 28px; flex-shrink: 0"
                    >
                      {{ index + 1 }}
                    </div>
                    <img
                      :src="item.img"
                      class="rounded border bg-white"
                      style="width: 60px; height: 60px; object-fit: cover"
                    />
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center gap-2 mb-1">
                        <h6 class="fw-bold mb-0 text-dark text-truncate" style="max-width: 150px">
                          {{ item.name }}
                        </h6>
                        <span
                          class="badge bg-white text-secondary border"
                          style="font-size: 0.65rem"
                          >ID: {{ item.id }}</span
                        >
                      </div>
                      <small class="text-muted d-block">{{ item.author }}</small>
                      <div class="d-flex gap-1 mt-1">
                        <span
                          class="badge bg-white text-secondary border fw-normal"
                          style="font-size: 0.65rem"
                          >{{ item.size }}</span
                        >
                        <span
                          class="badge bg-white text-secondary border fw-normal"
                          style="font-size: 0.65rem"
                          >{{ item.type }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-5">
                    <div class="row g-2">
                      <div class="col-4">
                        <label class="form-label x-small fw-bold text-secondary mb-0"
                          >STARTING PRICE</label
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm border-0 shadow-none"
                          placeholder="50.000đ"
                          v-model="item.startPrice"
                        />
                      </div>
                      <div class="col-4">
                        <label class="form-label x-small fw-bold text-secondary mb-0"
                          >PRICE STEP</label
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm border-0 shadow-none"
                          placeholder="10.000đ"
                          v-model="item.stepPrice"
                        />
                      </div>
                      <div class="col-4">
                        <label class="form-label x-small fw-bold text-secondary mb-0"
                          >DURATION (P)</label
                        >
                        <input
                          type="number"
                          class="form-control form-control-sm border-0 shadow-none"
                          placeholder="15"
                          v-model="item.duration"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-12 col-lg-2 text-end d-flex justify-content-end align-items-center gap-1"
                  >
                    <div class="btn-group shadow-sm" role="group">
                      <button
                        type="button"
                        class="btn btn-sm btn-white bg-white border"
                        @click="moveItem(index, -1)"
                        :disabled="index === 0"
                      >
                        <i class="fa-solid fa-arrow-up"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-white bg-white border"
                        @click="moveItem(index, 1)"
                        :disabled="index === scheduleList.length - 1"
                      >
                        <i class="fa-solid fa-arrow-down"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-danger border-0 ms-2 rounded-circle"
                      @click="removeFromSchedule(index)"
                    >
                      <i class="fa-solid fa-xmark fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-12 col-lg-6">
          <div class="card border-0 shadow-sm h-100 rounded-3">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div
                  class="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                  style="width: 48px; height: 48px"
                >
                  <i class="fa-solid fa-clock fs-5"></i>
                </div>
                <h5 class="fw-bold mb-0">Time configuration</h5>
              </div>

              <div class="row g-3">
                <div class="col-12 col-md-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Start at</label
                  >
                  <input type="datetime-local" class="form-control bg-light border-0" />
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Expected end</label
                  >
                  <input type="datetime-local" class="form-control bg-light border-0" />
                </div>
                <!-- <div class="col-12 col-md-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Automatic renewal(s)</label
                  >
                  <input type="number" class="form-control bg-light border-0" placeholder="30" />
                </div> -->
                <div class="col-12 col-md-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Initialization state</label
                  >
                  <select class="form-select bg-light border-0">
                    <option value="schedule">Scheduled</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="card border-0 shadow-sm h-100 rounded-3">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div
                  class="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                  style="width: 48px; height: 48px"
                >
                  <i class="fa-solid fa-bell fs-5"></i>
                </div>
                <h5 class="fw-bold mb-0">Finance & Announcements</h5>
              </div>

              <div class="row g-3 mb-4">
                <div class="col-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Deposit (VND)</label
                  >
                  <input
                    type="text"
                    class="form-control bg-light border-0"
                    placeholder="VD: 200.000"
                  />
                </div>
                <div class="col-6">
                  <label class="form-label fw-bold small text-secondary text-uppercase"
                    >Payment due date (days)</label
                  >
                  <input type="number" class="form-control bg-light border-0" value="3" />
                </div>
              </div>

              <hr class="text-secondary opacity-25" />

              <div class="mb-3">
                <label class="form-label fw-bold small text-secondary text-uppercase"
                  >Advance Notice (Minutes)</label
                >
                <input type="number" class="form-control bg-light border-0" placeholder="VD: 15" />
              </div>

              <div class="list-group">
                <label
                  class="list-group-item list-group-item-action border-0 rounded px-2 d-flex justify-content-between align-items-center mb-1"
                >
                  <div>
                    <p class="mb-0 fw-medium">Notice when finished</p>
                    <small class="text-muted" style="font-size: 0.75rem"
                      >Send notification to winner</small
                    >
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" checked />
                  </div>
                </label>

                <label
                  class="list-group-item list-group-item-action border-0 rounded px-2 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <p class="mb-0 fw-medium">Show publicly now</p>
                    <small class="text-muted" style="font-size: 0.75rem"
                      >Users can see this room</small
                    >
                  </div>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" checked />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex gap-2 mt-4 justify-content-end">
        <button class="btn btn-danger text-light fw-bold shadow-sm px-4">Cancel</button>
        <button class="btn btn-primary fw-bold shadow-sm px-4" @click="submitForm">
          <i class="fa-solid fa-check me-2"></i>Completed
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "",

      // CẬP NHẬT DATA: Thêm size
      allArtworks: [
        {
          id: 111,
          name: "Sắc màu đại dương",
          author: "Nguyễn Văn B",
          type: "Tranh sơn dầu",
          category: "son-dau",
          img: "/src/assets/img/4.png",
          size: "30x40 cm",
        },
        {
          id: 222,
          name: "Chiều tím",
          author: "Lê Văn C",
          type: "Tranh phong cảnh",
          category: "phong-canh",
          img: "/src/assets/img/4.png",
          size: "50x70 cm",
        },
        {
          id: 333,
          name: "Thiếu nữ bên hoa",
          author: "Trần Văn D",
          type: "Tranh chân dung",
          category: "chan-dung",
          img: "/src/assets/img/4.png",
          size: "60x60 cm",
        },
        {
          id: 444,
          name: "Rừng thu",
          author: "Phạm E",
          type: "Tranh sơn dầu",
          category: "son-dau",
          img: "/src/assets/img/4.png",
          size: "100x120 cm",
        },
      ],

      scheduleList: [],
    };
  },
  computed: {
    filteredArtworks() {
      if (!this.selectedCategory) return [];
      return this.allArtworks.filter(
        (art) =>
          art.category === this.selectedCategory &&
          !this.scheduleList.find((item) => item.id === art.id)
      );
    },
    totalDuration() {
      return this.scheduleList.reduce((sum, item) => sum + (parseInt(item.duration) || 0), 0);
    },
  },
  methods: {
    addToSchedule(artwork) {
      this.scheduleList.push({ ...artwork, startPrice: "", stepPrice: "", duration: 15 });
    },
    removeFromSchedule(index) {
      this.scheduleList.splice(index, 1);
    },
    moveItem(index, direction) {
      const newIndex = index + direction;
      if (newIndex >= 0 && newIndex < this.scheduleList.length) {
        const temp = this.scheduleList[index];
        this.scheduleList[index] = this.scheduleList[newIndex];
        this.scheduleList[newIndex] = temp;
      }
    },
    submitForm() {
      console.log("Danh sách đấu giá:", this.scheduleList);
      alert("Tạo phòng thành công!");
    },
  },
};
</script>

<style scoped></style>
