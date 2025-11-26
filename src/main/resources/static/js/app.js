// ==== CHUÔNG ====
document.querySelector(".bell")?.addEventListener("click", () => {
    alert("Bạn không có thông báo mới.");
});

// ==== TABS ====
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        contents[i].classList.add("active");
    });
});

// ==== FILTER POPUP ====
const filterBtn = document.querySelector(".filter-btn");
const filterBox = document.getElementById("filterBox");
const cancelFilter = document.getElementById("cancelFilter");
const applyFilter = document.getElementById("applyFilter");

filterBtn.addEventListener("click", () => {
    filterBox.classList.toggle("hide");
});

cancelFilter.addEventListener("click", () => {
    filterBox.classList.add("hide");
});

applyFilter.addEventListener("click", () => {
    const type = document.getElementById("filterType").value;
    alert("Đang lọc theo: " + type);
    filterBox.classList.add("hide");
});

// ==== POPUP JOIN CLASS ====
const openJoin = document.getElementById("openJoin");
const joinPopup = document.getElementById("joinPopup");
const overlay = document.getElementById("overlay");
const cancelJoin = document.getElementById("cancelJoin");
const confirmJoin = document.getElementById("confirmJoin");

openJoin.addEventListener("click", () => {
    overlay.classList.remove("hide");
    joinPopup.classList.remove("hide");
});

// Đóng popup
overlay.addEventListener("click", closePopup);
cancelJoin.addEventListener("click", closePopup);

function closePopup() {
    overlay.classList.add("hide");
    joinPopup.classList.add("hide");
}

// Join Class
confirmJoin.addEventListener("click", () => {
    const code = document.getElementById("classCode").value.trim();

    if (code === "") {
        alert("Vui lòng nhập mã lớp!");
        return;
    }

    alert("Đang tham gia lớp với mã: " + code);
    closePopup();
});
