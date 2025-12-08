const line1 = "這是第一行文字"; // 替換成你的文字
const line2 = "這是第二行文字"; // 替換成你的文字
const line1El = document.getElementById('line1');
const line2El = document.getElementById('line2');
const imageContainer = document.getElementById('imageContainer');

function typeWriter(text, element, delay = 100) {
  return new Promise(resolve => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function startAnimation() {
  await typeWriter(line1, line1El, 100);
  await typeWriter(line2, line2El, 100);
  // 文字跑完後顯示圖片
  imageContainer.classList.add('show');
}

startAnimation();
