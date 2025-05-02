#0502
----
## 第一條指令
產生一個全螢幕的畫布
背景顏色為cdb4db
擷取攝影機的影像
正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js內

說明：
createCanvas(windowWidth, windowHeight): 建立全螢幕畫布。
background('#cdb4db'): 設定背景顏色為 #cdb4db。
createCapture(VIDEO): 啟用攝影機影像。
capture.size(windowWidth * 0.8, windowHeight * 0.8): 設定影像寬高為視窗大小的 80%。
image(capture, width * 0.1, height * 0.1, width * 0.8, height * 0.8): 將影像繪製在畫布中央，並保持比例。

----
