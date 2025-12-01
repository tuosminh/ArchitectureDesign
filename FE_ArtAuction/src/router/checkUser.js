import axios from "axios";

export default function (from, to, next) {
  axios
    .get("http://localhost:8081/getEmailAndUsernameFromToken", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }
    })

    .then((res) => {
      if (res.data) {
        next();
        // Lưu thông tin user nếu cần
        localStorage.setItem("name_kh", res.data.username);
        localStorage.setItem("email_kh", res.data.email);
        localStorage.setItem("check_kh", res.data.status);
        localStorage.setItem("avatar_kh", res.data.avt);
      } else {
        next("/login");
        this.$toast.error("Bạn cần đăng nhập trước!!!!");
      }
    })
    .catch((error) => {
      console.error("Auth check failed:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("name_kh");
      localStorage.removeItem("email_kh");
      localStorage.removeItem("check_kh");
      next("/login");
    });

}
