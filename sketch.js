let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#cdb4db'); // 設定背景顏色

  // 初始化攝影機影像
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像寬高為視窗大小的80%
  capture.hide(); // 隱藏原始攝影機影像
}

function draw() {
  background('#d8e2dc'); // 確保背景顏色持續更新
  image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8); // 將影像顯示在畫布中央
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}
