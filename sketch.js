let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#cdb4db'); // 設定背景顏色

  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的80%
  capture.hide(); // 隱藏原始攝影機影像

  // 建立與視訊畫面相同大小的圖形
  graphics = createGraphics(windowWidth * 0.8, windowHeight * 0.8);
  graphics.background(255, 0, 0, 100); // 設定圖形背景為半透明紅色
}

function draw() {
  background('#cdb4db'); // 確保背景顏色持續更新

  // 翻轉畫布以修正左右顛倒
  push();
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8); // 繪製影像
  pop();

  // 繪製圖形在視訊上方
  image(graphics, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  graphics.resizeCanvas(windowWidth * 0.8, windowHeight * 0.8); // 調整圖形大小
}
