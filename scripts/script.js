
// ------- 使用 localStorage 儲存答案 -------
function setAnswer(key, value) {
    localStorage.setItem(key, value);
}

function getAnswer(key) {
    return localStorage.getItem(key);
}

// ------- Swiper 初始化 -------
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.6,
    spaceBetween: 0,
    slideToClickedSlide: true,
    coverflowEffect: {
        rotate: 0,
        stretch: -40,
        depth: 250,
        modifier: 1.5,
        slideShadows: false,
    },
});

// ------- 點擊卡牌 -------
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        // 取消其他卡牌選取
        document
            .querySelectorAll(".card")
            .forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");

        let val = card.getAttribute("data-value");
        console.log(val);
        // 判斷目前頁面是 Q1 還是 Q2
        let isQ1 = window.location.pathname.includes("index");
        console.log(val);
        if (isQ1) {
            setAnswer("q1", val);
        } else {
            setAnswer("q2", val);
        }
    });
});

// ------- 下一題（Q1）-------
if (document.getElementById("nextBtn")) {
    document.getElementById("nextBtn").onclick = () => {
        if (getAnswer("")) {
            alert("請先選擇一個選項！");
            return;
        }
        window.location.href = "Q2.html";
    };
}

// ------- 上一題（Q2）-------
if (document.getElementById("prevBtn") && !location.pathname.includes("Q1")) {
    document.getElementById("prevBtn").onclick = () => {
        window.location.href = "Q1.html";
    };
}

// ------- 看結果（Q2）-------
if (document.getElementById("resultBtn")) {
    document.getElementById("resultBtn").onclick = () => {
        if (!getAnswer("q2")) {
            alert("請先選擇一個選項！");
            return;
        }

        let q1 = getAnswer("q1");
        let q2 = getAnswer("q2");

        // --- 簡單的結果演算法（你可再微調）---
        let score = q1 + q2;
        let resultPage = "";

        if (score.includes("A")) resultPage = "result_koli.html";
        else if (score.includes("B")) resultPage = "result_midong.html";
        else if (score.includes("C")) resultPage = "result_pabo.html";
        else resultPage = "result_rongrong.html";

        window.location.href = resultPage;
    };
}