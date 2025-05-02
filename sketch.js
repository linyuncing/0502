let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#d8e2dc'); // 設定背景顏色

  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的80%
  capture.hide(); // 隱藏原始攝影機影像

  // 建立與視訊畫面相同大小的圖形
  graphics = createGraphics(windowWidth * 0.8, windowHeight * 0.8);
}

function draw() {
  background('#d8e2dc'); // 確保背景顏色持續更新

  // 翻轉畫布以修正攝影機影像左右顛倒
  push();
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8); // 繪製影像
  pop();

  // 更新 graphics 的內容
  graphics.background('#9d8189'); // 設定背景為 #9d8189
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      let col = capture.get(x, y); // 從 capture 的相對位置取得顏色
      graphics.fill(col);
      graphics.noStroke();
      graphics.rect(x + 1, y + 1, 18, 18); // 繪製寬為18的方框

      graphics.fill('#ffe5d9'); // 設定圓的顏色為 #ffe5d9
      graphics.ellipse(x + 10, y + 10, 5, 5); // 在方框中間繪製直徑為5的圓
    }
  }

  // 翻轉畫布以修正 graphics 顯示左右顛倒
  push();
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(graphics, width * 0.1, height * 0.1, width * 0.8, height * 0.8); // 繪製 graphics
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  graphics.resizeCanvas(windowWidth * 0.8, windowHeight * 0.8); // 調整圖形大小
}
