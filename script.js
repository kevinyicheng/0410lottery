// 倒數計時
function updateCountdown() {
    const tripDate = new Date("2025-06-01"); 
    const now = new Date();
    const timeDiff = tripDate - now;

    if (timeDiff <= 0) {
        document.getElementById("countdown").innerText = "🎉 旅行開始囉！";
        return;
    }

    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `🚗 距離出發還有 ${daysLeft} 天！`;
}

// 行程展開/收合效果
function toggleDetails(dayId) {
    const details = document.getElementById(dayId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// 初始化
updateCountdown();
