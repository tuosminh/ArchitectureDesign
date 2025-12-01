<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center mt-4 mb-3">
        <div class=""  data-aos="fade-right" data-aos-duration="800">
          <h3 class="fw-bold">
            <!-- <i class="fas fa-palette me-2"></i> -->
            Register Artwork for Auction
          </h3>
          <p class="text-muted">
            Please fill in all information below to register your artwork for auction.
            All fields marked with <span class="text-danger">*</span> are required.
          </p>
        </div>
        <div class=" d-flex gap-3"  data-aos="fade-left" data-aos-duration="800">
          <button type="button" class="btn btn-secondary" @click="resetForm" :disabled="isSubmitting">
            <i class="fas fa-redo me-2"></i>Reset
          </button>
          <button type="submit" class="btn btn-success btn-lg px-5" :disabled="isSubmitting">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin me-2"></i>
            <i v-else class="fas fa-paper-plane me-2"></i>
            {{ isSubmitting ? 'Submitting...' : 'Register Artwork' }}
          </button>
        </div>
      </div>
    </div>
    <div class="row"  data-aos="fade-up" data-aos-duration="800">
      <div class="col-lg-7">
        <div class="card border-top border-4 border-success">
          <div class="card-body">
            <div class="row">
              <!-- name artwork -->
              <div class="col-lg-12 mb-4">
                <label class="form-label fw-bold">
                  Artwork Title <span class="text-danger">*</span>
                </label>
                <input v-model="formData.title" type="text" class="form-control" :class="{ 'is-invalid': errors.title }"
                  placeholder="Enter artwork title" required />
                <div v-if="errors.title" class="invalid-feedback">{{ errors.title }}</div>
              </div>
              <!-- Painting Genre -->
              <div class="col-lg-6 mb-4">
                <label class="form-label fw-bold">
                  Genre <span class="text-danger">*</span>
                </label>
                <select v-model="formData.paintingGenre" class="form-select"
                  :class="{ 'is-invalid': errors.paintingGenre }" required>
                  <option value="">-- Select Genre --</option>
                  <option value="Landscape">Landscape</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Abstract">Abstract</option>
                  <option value="Still Life">Still Life</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Modern">Modern</option>
                  <option value="Other">Other</option>
                </select>
                <div v-if="errors.paintingGenre" class="invalid-feedback">{{ errors.paintingGenre }}</div>
              </div>
              <!-- Material -->
              <div class="col-lg-6 mb-4">
                <label class="form-label fw-bold">
                  Material <span class="text-danger">*</span>
                </label>
                <select v-model="formData.material" class="form-select" :class="{ 'is-invalid': errors.material }"
                  required>
                  <option value="">-- Select Material --</option>
                  <option value="Oil">Oil</option>
                  <option value="Acrylic">Acrylic</option>
                  <option value="Watercolor">Watercolor</option>
                  <option value="Ink">Ink</option>
                  <option value="Mixed Media">Mixed Media</option>
                  <option value="Digital">Digital</option>
                  <option value="Other">Other</option>
                </select>
                <div v-if="errors.material" class="invalid-feedback">{{ errors.material }}</div>
              </div>
              <!-- Size -->
              <div class="col-lg-6 mb-4">
                <label class="form-label fw-bold">
                  Size <span class="text-danger">*</span>
                </label>
                <input v-model="formData.size" type="text" class="form-control" :class="{ 'is-invalid': errors.size }"
                  placeholder="E.g: 70x50cm or 100x80x5cm" required />
                <div v-if="errors.size" class="invalid-feedback">{{ errors.size }}</div>
                <small class="text-muted">Format: Length x Width (x Height if applicable)</small>
              </div>
              <!-- Year of Creation -->
              <div class="col-lg-6 mb-4">
                <label class="form-label fw-bold">
                  Year of Creation <span class="text-danger">*</span>
                </label>
                <input v-model.number="formData.yearOfCreation" type="number" class="form-control"
                  :class="{ 'is-invalid': errors.yearOfCreation }" placeholder="Enter year of creation" :min="1900"
                  :max="currentYear" required />
                <div v-if="errors.yearOfCreation" class="invalid-feedback">{{ errors.yearOfCreation }}</div>
              </div>
              <!-- Description -->
              <div class="col-lg-12">
                <label class="form-label fw-bold">
                  Description <span class="text-danger">*</span>
                </label>
                <textarea v-model="formData.description" class="form-control"
                  :class="{ 'is-invalid': errors.description }" rows="4"
                  placeholder="Detailed description of the artwork" required></textarea>
                <div v-if="errors.description" class="invalid-feedback">{{ errors.description }}</div>
              </div>
            </div>

          </div>



        </div>
      </div>
      <div class="col-lg-5">
        <div class="card border-top border-4 border-success">
          <div class="card-body">
            <div class="row">
              <!-- Starting Price -->
              <div class="col-lg-12 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                  <label class="form-label fw-bold">
                    Starting Price (VND) <span class="text-danger">*</span>
                  </label>
                  <small class="text-muted">
                    Price: {{ formatCurrency(formData.startedPrice) }}
                  </small>
                </div>

                <input v-model.number="formData.startedPrice" type="number" class="form-control"
                  :class="{ 'is-invalid': errors.startedPrice }" placeholder="Enter starting price" min="0" step="1000"
                  required />
                <div v-if="errors.startedPrice" class="invalid-feedback">{{ errors.startedPrice }}</div>

              </div>
              <!-- Certificate File -->
              <div class="mb-3">
                <label class="form-label fw-bold">
                  Certificate File <span class="text-danger">*</span>
                </label>
                <input type="file" class="form-control" @change="handleCertificateUpload" accept=".pdf,.jpg,.jpeg,.png"
                  required />
                <small class="text-muted">Format: PDF, JPG, PNG (Max 5MB)</small>

                <!-- Certificate file name display -->
                <div v-if="certificateFile" class="mt-2">
                  <div class="alert alert-success py-2 mb-0 d-flex align-items-center justify-content-between">
                    <div>
                      <i class="fas fa-file-check me-2"></i>
                      <span>{{ certificateFile.name }}</span>
                    </div>
                    <button type="button" class="btn btn-sm btn-danger" @click="removeCertificate">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <div v-if="errors.certificateId" class="invalid-feedback d-block">{{ errors.certificateId }}</div>
              </div>

              <!-- Image Upload (Required) -->
              <div class="mb-3">
                <label class="form-label fw-bold">
                  Artwork Image <span class="text-danger">*</span>
                </label>
                <input type="file" class="form-control" @change="handleFileUpload" accept="image/*" required />
                <small class="text-muted">Format: JPG, PNG, WEBP (Max 5MB)</small>

                <!-- Preview Image -->
                <div v-if="imagePreview" class="mt-3">
                  <img :src="imagePreview" class="img-thumbnail" style="max-height: 200px;" alt="Preview">
                  <button type="button" class="btn btn-sm btn-danger mt-2" @click="removeImage">
                    <i class="fas fa-times me-1"></i>Remove Image
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col-lg-7">

        <!-- Info Card -->
        <div class="card border-info mt-4">
          <div class="card-body">
            <h6 class="text-info mb-2">
              <i class="fas fa-info-circle me-2"></i>
            </h6>
            <ul class="mb-0 small">
              <li>All fields marked with <span class="text-danger">*</span> are required</li>
              <li>Artwork image is <strong>required</strong>, should be clear and high quality</li>
              <li>Certificate file is <strong>required</strong>, accepts PDF or images (JPG, PNG)</li>
              <li>Starting price must be greater than 0 and a multiple of 1,000 VND</li>
              <li>Year of creation must be from 1900 to present</li>
              <li>Artwork will be reviewed within 24-48 hours</li>
            </ul>
          </div>
        </div>

        <!-- AI Detection Result Card -->
        <div v-if="showAIDetectionResult" class="card border-danger mt-4 shadow-lg">
          <div class="card-header bg-danger text-white">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-0">
                <i class="fas fa-exclamation-triangle me-2"></i>
                AI Image Detection
              </h5>
              <button type="button" class="btn-close btn-close-white" @click="closeAIDetectionResult"></button>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center mb-3">
              <div class="alert alert-danger mb-3">
                <i class="fas fa-robot fa-3x mb-3"></i>
                <h5>{{ aiDetectionResult?.message || 'Image detected as AI' }}</h5>
                <h4 class="mt-2 mb-0">
                  <span class="badge bg-danger fs-5">
                    AI: {{ formatProbability(aiDetectionResult?.aiProbability) }}%
                  </span>
                </h4>
              </div>

              <div class="row text-center mb-3">
                <div class="col-6">
                  <div class="card bg-light">
                    <div class="card-body py-3">
                      <h6 class="text-muted mb-1">AI Probability</h6>
                      <h3 class="text-danger mb-0">
                        {{ formatProbability(aiDetectionResult?.aiProbability) }}%
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card bg-light">
                    <div class="card-body py-3">
                      <h6 class="text-muted mb-1">Human Probability</h6>
                      <h3 class="text-success mb-0">
                        {{ formatProbability(aiDetectionResult?.humanProbability) }}%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-muted mb-3">
                Your image has a high probability of being AI-generated.
                If you believe this is an error, please report it for our review.
              </p>

              <div class="d-flex justify-content-center gap-2">
                <button type="button" class="btn btn-secondary" @click="closeAIDetectionResult">
                  <i class="fas fa-times me-2"></i>Close
                </button>
                <button type="button" class="btn btn-warning" @click="handleReportAI">
                  <i class="fas fa-flag me-2"></i>Report Error
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        title: '',
        description: '',
        startedPrice: 0,
        yearOfCreation: new Date().getFullYear(),
        paintingGenre: '',
        material: '',
        size: '',
        certificateId: '',
        status: 0 // 0 = Pending approval
      },
      errors: {},
      isSubmitting: false,
      imageFile: null,
      imagePreview: null,
      certificateFile: null,
      currentYear: new Date().getFullYear(),
      // AI Detection Result
      showAIDetectionResult: false,
      aiDetectionResult: null
    }
  },

  methods: {
    // Validate form
    validateForm() {
      this.errors = {};
      let isValid = true;

      // Title
      if (!this.formData.title || this.formData.title.trim().length < 3) {
        this.errors.title = 'Artwork title must be at least 3 characters';
        isValid = false;
      }

      // Description
      if (!this.formData.description || this.formData.description.trim().length < 10) {
        this.errors.description = 'Description must be at least 10 characters';
        isValid = false;
      }

      // Starting Price
      if (!this.formData.startedPrice || this.formData.startedPrice <= 0) {
        this.errors.startedPrice = 'Starting price must be greater than 0';
        isValid = false;
      }

      // Year of Creation
      if (!this.formData.yearOfCreation ||
        this.formData.yearOfCreation < 1900 ||
        this.formData.yearOfCreation > this.currentYear) {
        this.errors.yearOfCreation = `Year of creation must be from 1900 to ${this.currentYear}`;
        isValid = false;
      }

      // Painting Genre
      if (!this.formData.paintingGenre) {
        this.errors.paintingGenre = 'Please select a genre';
        isValid = false;
      }

      // Material
      if (!this.formData.material) {
        this.errors.material = 'Please select a material';
        isValid = false;
      }

      // Size
      if (!this.formData.size || this.formData.size.trim().length < 3) {
        this.errors.size = 'Please enter the size';
        isValid = false;
      }

      // Certificate File
      if (!this.certificateFile) {
        this.errors.certificateId = 'Please select a certificate file';
        isValid = false;
      }

      return isValid;
    },

    // Handle file upload
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
          this.$toast?.error?.('File size must not exceed 5MB');
          event.target.value = '';
          return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
          this.$toast?.error?.('Please select an image file');
          event.target.value = '';
          return;
        }

        this.imageFile = file;

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    // Remove image
    removeImage() {
      this.imageFile = null;
      this.imagePreview = null;
    },

    // Handle certificate file upload
    handleCertificateUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
          this.$toast?.error?.('File size must not exceed 5MB');
          event.target.value = '';
          return;
        }

        // Validate file type
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
          this.$toast?.error?.('Please select a PDF file or image (JPG, PNG)');
          event.target.value = '';
          return;
        }

        this.certificateFile = file;
      }
    },

    // Remove certificate
    removeCertificate() {
      this.certificateFile = null;
    },

    // Format currency
    formatCurrency(value) {
      if (!value) return '0 VND';
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(value);
    },

    // Format probability percentage
    formatProbability(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return Number(value).toFixed(2);
    },

    // Submit form
    submitArtwork() {
      // Validate
      if (!this.validateForm()) {
        this.$toast?.error?.('Please check the information you entered');
        return;
      }

      // Check if image is required
      if (!this.imageFile) {
        this.$toast?.error?.('Please select an artwork image');
        return;
      }

      this.isSubmitting = true;

      // Prepare form data for multipart/form-data
      const formData = new FormData();

      // Tạo metadata object theo yêu cầu của backend
      const metadata = {
        title: this.formData.title,
        description: this.formData.description,
        startedPrice: this.formData.startedPrice,
        yearOfCreation: this.formData.yearOfCreation,
        paintingGenre: this.formData.paintingGenre,
        material: this.formData.material,
        size: this.formData.size,
        certificateId: this.formData.certificateId,
        status: this.formData.status
      };

      // Append metadata as JSON string
      formData.append('metadata', JSON.stringify(metadata));

      // Append image if exists
      if (this.imageFile) {
        formData.append('image', this.imageFile);
      }

      // Append certificate file if exists
      if (this.certificateFile) {
        formData.append('certificate', this.certificateFile);
      }

      // Debug: log formData
      console.log('Sending metadata:', metadata);
      console.log('Sending image:', this.imageFile?.name);
      console.log('Sending certificate:', this.certificateFile?.name);

      // Send to API
      axios
        .post('http://localhost:8081/api/artworks/ingest', formData, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
            // Không set Content-Type, để browser tự động set boundary cho multipart/form-data
          }
        })
        .then((res) => {
          console.log('Artwork registered:', res.data);

          // Kiểm tra AI detection result
          const prediction = res.data.prediction;
          const aiProbability = parseFloat(res.data.aiProbability) || 0;
          const humanProbability = parseFloat(res.data.humanProbability) || 0;
          const status = res.data.status;

          console.log('AI Probability:', res.data.aiProbability);
          console.log('Human Probability:', res.data.humanProbability);

          // Nếu phát hiện là AI hoặc status = false
          if (prediction === 'AI' || status === false) {
            // Lưu thông tin AI detection
            this.aiDetectionResult = {
              prediction: prediction,
              aiProbability: aiProbability,
              humanProbability: humanProbability,
              message: res.data.message
            };

            console.log('Setting aiDetectionResult:', this.aiDetectionResult);

            // Hiển thị kết quả AI detection
            this.showAIDetectionResult = true;
            this.isSubmitting = false;

            // Scroll đến vị trí kết quả AI detection
            this.$nextTick(() => {
              const resultCard = document.querySelector('.border-danger');
              if (resultCard) {
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            });
          } else {
            // If Human - success
            const successMessage = res.data.message || 'Artwork registered successfully! Awaiting approval.';
            this.$toast?.success?.(successMessage);

            // Reset form
            this.resetForm();


            // Redirect về home sau 2 giây
            // setTimeout(() => {
            //   this.$router.push('/');
            // }, 2000);
          }
        })
        .catch((err) => {
          console.error('Error submitting artwork:', err);

          if (err.response?.data?.message) {
            this.$toast?.error?.('Error: ' + err.response.data.message);
          } else {
            this.$toast?.error?.('An error occurred while registering the artwork. Please try again.');
          }
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },

    // Reset form
    resetForm() {
      this.formData = {
        title: '',
        description: '',
        startedPrice: 0,
        yearOfCreation: new Date().getFullYear(),
        paintingGenre: '',
        material: '',
        size: '',
        certificateId: '',
        status: 0
      };
      this.errors = {};
      this.imageFile = null;
      this.imagePreview = null;
      this.certificateFile = null;
    },

    // Close AI Detection Result
    closeAIDetectionResult() {
      this.showAIDetectionResult = false;
      this.aiDetectionResult = null;
    },

    // Handle Report AI Image
    handleReportAI() {
      // Feature under development
      this.$toast?.info?.('Report feature is under development. Please try again later!');
      console.log('Report AI detection:', this.aiDetectionResult);

      // Đóng result card sau khi thông báo
      setTimeout(() => {
        this.closeAIDetectionResult();
      }, 1000);
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 15px;
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #044a42 0%, #066a5e 100%);
}

.form-label {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-control:focus,
.form-select:focus {
  border-color: #044a42;
  box-shadow: 0 0 0 0.2rem rgba(4, 74, 66, 0.25);
}

.btn-success {
  background: linear-gradient(135deg, #044a42 0%, #066a5e 100%);
  border: none;
  transition: all 0.3s ease;
}

.btn-success:hover {
  background: linear-gradient(135deg, #033831 0%, #055548 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(4, 74, 66, 0.3);
}

.btn-success:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.img-thumbnail {
  border: 2px solid #044a42;
  border-radius: 8px;
}

.invalid-feedback {
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem !important;
  }

  .btn-lg {
    width: 100%;
    margin-top: 1rem;
  }

  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-secondary {
    width: 100%;
  }

  /* AI Detection buttons on mobile */
  .card.border-danger .d-flex.gap-2 {
    flex-direction: column;
    width: 100%;
  }

  .card.border-danger .d-flex.gap-2 button {
    width: 100%;
  }
}

/* AI Detection Result Card */
.fa-robot {
  color: #dc3545;
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

.card.border-danger {
  border-width: 3px;
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header.bg-danger {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
