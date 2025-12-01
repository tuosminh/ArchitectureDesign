<template>
  <div class="container mt-3">

    <!-- ========== Carousel ========== -->
    <div class="row mb-5">
      <div class="col-12">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade rounded-4 overflow-hidden"
          data-bs-ride="carousel" data-bs-interval="2000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.pinimg.com/736x/88/cd/21/88cd216810a2be6669f35bea9c98293c.jpg" class="d-block w-100"
                style="height: 450px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/1200x/36/19/09/36190987c6cd3c29ec4f1ac202decbf1.jpg" class="d-block w-100"
                style="height: 450px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/736x/c5/8d/17/c58d170aa6f5dd02eae800c604e94c69.jpg" class="d-block w-100"
                style="height: 450px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/1200x/77/e5/c5/77e5c5b3543c4312a06d8279aa0add6a.jpg" class="d-block w-100"
                style="height: 450px;" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/1200x/ca/b4/30/cab4302b07b4c54695c3affacfcf63e3.jpg" class="d-block w-100"
                style="height: 450px;" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- <img src="/src/assets/img/3.png" alt="banner" class="img-fluid w-100 rounded" style="height: 300px" /> -->
      </div>
    </div>

    <!-- <div class="row mb-4">
      <div class="col-lg-8 col-md-6 col-sm-12 d-flex gap-4">
        <div class="search-bar flex-grow-1">
          <div class="position-relative search-bar-box">
            <input type="text" class="form-control search-control ps-5" placeholder="Type to search..." />
            <span class="position-absolute top-50 search-show translate-middle-y"><i
                class="fa-solid fa-magnifying-glass px-3"></i></span>
            <span class="position-absolute top-50 search-close translate-middle-y">
            </span>
          </div>
        </div>
        <button class="btn btn-outline-success d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="row">
          <template v-for="tag in tags" :key="tag">
            <div class="col-lg-4 col-md-6 col-sm-4 d-flex align-items-center">
              <button type="button" class="btn btn-outline-success w-100 " :class="{ active: selectedTag === tag }"
                @click="selectTag(tag)">
                {{ tag }}
              </button>
            </div>
          </template>
</div>
</div>
</div> -->

    <div class="row mb-5">
      <!-- ========== Tiêu đề ========== -->
      <div class="col-lg-6 d-flex flex-column gap-3">
        <h2 class="fw-bold text-success mb-0">Discover Extraordinary Art</h2>
        <p class="text-muted m-0">Bid on exclusive artworks from famous and emerging artists worldwide</p>
        <p class="text-muted m-0">Join a global community of collectors and creators</p>
      </div>

      <!-- ========== Thanh search + filter + tag ========== -->
      <div class="col-lg-6 d-flex flex-column gap-3">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="input-group">
              <input type="text" class="form-control border-success" placeholder="Enter auction room ID">
              <button class="btn btn-success px-4 fw-bold">Search</button>
            </div>
          </div>
          <div class="col-8 mt-3">
            <div class=" d-flex gap-3">
              <input type="date" class="form-control">
              <b>_</b>
              <input type="date" class="form-control">
            </div>
          </div>
          <!-- <div class="col-4">
            <div class=" d-flex flex-column">
              <label for="">From date</label>
              <input type="date" class="form-control">
            </div>
          </div>
          <div class="col-4">
            <div class=" d-flex flex-column">
              <label for="">To date</label>
              <input type="date" class="form-control">
            </div>
          </div> -->
          <div class="col-4 d-flex align-items-end gap-3">
            <button class="btn btn-success w-100">
              <i class="fa-solid fa-filter"></i>
            </button>
            <button class="btn btn-secondary w-100">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
          </div>
        </div>


      </div>


    </div>



    <div class="row mb-4">
      <div class="col-lg-6">
        <ul class="nav nav-tabs border-0 gap-2 flex-wrap row">
          <li class="nav-item col-lg-5">
            <button class="nav-link w-100 fw-semibold auction-tab" :class="{ 'active': activeAuctionTab === 'ongoing' }"
              @click="activeAuctionTab = 'ongoing'">
              <i class="fa-solid fa-broadcast-tower me-2"></i>Đang diễn ra
              <span
                class="badge ms-2"
                :class="activeAuctionTab === 'ongoing' ? 'text-bg-success text-light' : 'bg-light text-secondary'"
              >
                {{ ongoingAuctions.length }}
              </span>
            </button>
          </li>
          <li class="nav-item col-lg-5">
            <button class="nav-link w-100 fw-semibold auction-tab"
              :class="{ 'active': activeAuctionTab === 'upcoming' }" @click="activeAuctionTab = 'upcoming'">
              <i class="fa-solid fa-clock me-2"></i>Sắp diễn ra
              <span
                class="badge ms-2"
                :class="activeAuctionTab === 'upcoming' ? 'text-bg-success text-light' : 'bg-light text-secondary'"
              >
                {{ upcomingAuctions.length }}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <!-- ========== Tag ========== -->
      <div class="col-lg-6">
        <div class="row py-2">
          <template v-for="tag in tags" :key="tag">
            <div class="col-4 d-flex align-items-center">
              <button type="button" class="btn btn-outline-success w-100 fw-bold" :class="{ active: selectedTag === tag }"
                @click="selectTag(tag)">
                {{ tag }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>


    <!-- Danh sách buổi đấu giá -->
    <div class="row">
      <template v-for="auction in displayedAuctions" :key="auction.id">
        <!-- Card đấu giá -->
        <div class="col-lg-3 col-md-6 col-12 mb-4 d-flex">
          <div class="card p-0 overflow-hidden auction-card">
            <div class="p-0 position-relative">
              <img :src="auction.imageAuctionRoom" class="img-auction" alt="" loading="lazy">

              <div class="">
                <span v-if="auction.status === 1"
                  class="badge position-absolute top-0 start-0 m-3 bg-danger px-3">LIVE</span>
                <span v-else-if="auction.status === 2"
                  class="badge position-absolute top-0 start-0 m-3 bg-warning px-3 text-dark">In a few mins</span>
              </div>

              <span v-if="auction.status === 1"
                class="badge position-absolute top-0 end-0 m-3 bg-success px-3">12:35</span>
              <span v-if="auction.status === 1" class="badge position-absolute bottom-0 end-0 m-3 bg-success">{{
                auction.viewCount }}
                bidders</span>
            </div>

            <!-- Nội dung card -->
            <div class="card-body d-flex flex-column gap-3">
              <div class="d-flex flex-column gap-2">
                <p class="fw-bold m-0 text-success fs-5 title-clamp"> {{ auction.roomName }} </p>
                <p class="m-0 text-muted small"> {{ auction.id }} </p>
                <div class="d-flex gap-2 align-items-center justify-content-between">
                  <span class="m-0">Category</span>
                  <span class="m-0"> {{ auction.type }} </span>
                </div>
                <p class="m-0 small description-clamp"> {{ auction.description }} </p>
              </div>
              <div class="mt-auto">
                <div class="" v-if="auction.status === 1">
                  <router-link :to="`/client/auction-room/${auction.id}`" class="w-100">
                    <button class="btn btn-success w-100">Join AuctAuction</button>
                  </router-link>
                </div>

                <div class="" v-else-if="auction.status === 2">
                  <router-link to="" class="w-100">
                    <button class="btn btn-outline-warning w-100">Reserve Spot</button>
                  </router-link>
                </div>
                <!-- <button class="btn btn-success">Join AuctAuction</button> -->
              </div>


            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>
<script>

import axios from "axios";
export default {
  data() {
    return {
      AuctionList: [],
      tags: ["Landscape", "Portrait", "Folk"],
      activeAuctionTab: 'ongoing'
    };
  },

  computed: {
    ongoingAuctions() {
      return this.AuctionList.filter((room) => room.status === 1);
    },
    upcomingAuctions() {
      return this.AuctionList.filter((room) => room.status === 2);
    },
    displayedAuctions() {
      if (this.activeAuctionTab === 'upcoming') return this.upcomingAuctions;
      return this.ongoingAuctions;
    }
  },

  mounted() {
    this.getAuction();
  },

  methods: {
    getAuction() {
      axios
        .get("http://localhost:8081/api/auctionroom/allAuctionRoom")
        .then((res) => {
          if (res.data) {
            this.AuctionList = res.data.filter(room => room.status !== 0);
          }
        })
        .catch((err) => {
          this.error = err.message;
          this.$toast.error("Không thể tải danh sách đấu giá!");
        });
    },
    goToRoom(id) {
      if (!id) return;
      this.$router.push({
        name: 'auction-room',
        params: { id }
      });
    }
  }
};

</script>
<style scoped>
.auction-tab {
  border: 0 !important;
  outline: none;
  color: #6c757d;
  background: transparent;
  padding: 0.75rem 1rem;
  transition: color 0.2s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.auction-tab:not(.active):hover {
  color: #0f584f;
}

.auction-tab.active {
  color: #0f584f;
  background: transparent;
  position: relative;
}

.auction-tab.active::after {
  content: '';
  display: block;
  height: 4px;
  background: #0f584f;
  border-radius: 999px;
  margin-top: 0.4rem;
}

.auction-tab:focus-visible {
  outline: none;
  box-shadow: none;
}
</style>
