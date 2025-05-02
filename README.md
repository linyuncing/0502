# 0502

----

## 第一條指令

```tex
產生一個全螢幕的畫布
背景顏色為cdb4db
擷取攝影機的影像
正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js內
```
說明：
createCanvas(windowWidth, windowHeight): 建立全螢幕畫布。
background('#cdb4db'): 設定背景顏色為 #cdb4db。
createCapture(VIDEO): 啟用攝影機影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8): 設定影像寬高為視窗大小的 80%。
image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8): 將影像繪製在畫布中央，並保持比例。

----
### 程式碼
```javascript=
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

```
## 第二條指令
```tex
攝影機顯示的畫面左右顛倒，請調整
```
更新點：
push() 和 pop(): 用於保存和恢復畫布的狀態，避免翻轉影響其他繪製內容。
translate(width, 0): 將畫布的原點移動到右上角。
scale(-1, 1): 水平翻轉畫布，修正攝影機影像左右顛倒的問題。
### 程式碼
```javascript=
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

  // 翻轉畫布以修正左右顛倒
  push();
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8); // 繪製影像
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}

```
## 第三條指令
```tex
利用createGraphics指令
產生一個與video視訊畫面
一樣的寬高一樣的大小內容
該圖片顯示在視訊上方
```
說明：
createGraphics(): 建立一個與視訊畫面相同大小的圖形緩衝區。
graphics.background(255, 0, 0, 100): 設定圖形的背景為半透明紅色（RGBA 格式）。
image(graphics, ...): 將圖形繪製在視訊上方。
graphics.resizeCanvas(): 當視窗大小改變時，調整圖形緩衝區的大小。
### 程式碼
```javascript=
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
  graphics.background(255, 0, 0, 100); // 設定圖形背景為半透明紅色
}

function draw() {
  background('#d8e2dc'); // 確保背景顏色持續更新

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

```
## 第四條指令
```tex
把graphics背景顏色為9d8189
graphics在寬與高切成每隔20為一個單位
在每一個單位內產生一個寬高為15的圓
圓的顏色採用capture的相對位置的顏色
```
說明：
graphics.background('#9d8189'): 設定 graphics 的背景顏色為 #9d8189。
雙層迴圈: 每隔 20 單位繪製一個圓。
x 和 y 是圓的左上角位置，每次遞增 20。
圓的中心位置為 x + 10 和 y + 10。
capture.get(x, y): 從攝影機影像的對應位置取得顏色。
graphics.ellipse(x + 10, y + 10, 15, 15): 在每個單位內繪製寬高為 15 的圓。
### 程式碼
```javascript=
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

  // 翻轉畫布以修正左右顛倒
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
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製寬高為15的圓
    }
  }

  // 繪製 graphics 在視訊上方
  image(graphics, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
  graphics.resizeCanvas(windowWidth * 0.8, windowHeight * 0.8); // 調整圖形大小
}


```
## 第五條指令
```tex
graphics顯示的畫面會左右顛倒，請修正
```
修正點：
翻轉 graphics 顯示：
使用 push() 和 pop() 保存和恢復畫布狀態。
使用 translate(width, 0) 和 scale(-1, 1) 翻轉畫布，修正 graphics 顯示的左右顛倒問題。
其他部分保持不變：graphics 的內容仍然是每隔 20 單位繪製一個圓，圓的顏色來自攝影機影像的對應位置。
### 程式碼
```javascript=
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
}

function draw() {
  background('#cdb4db'); // 確保背景顏色持續更新

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
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製寬高為15的圓
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

```
## 第六條指令
```tex

```
### 程式碼
```javascript=

```
## 第七條指令
```tex

```
### 程式碼
```javascript=

```
