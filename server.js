const express = require("express"); //expressモジュールをインポート（コードの中で使えるようにする）
const { readFileSync } = require("fs"); //fsモジュールの中からreadFileSync関数をインポート
const http = require("http"); //httpモジュールをインポート
const app = express(); //expressモジュールを使ってサーバーの骨組みを作る
const httpPort = 8000; //httpPort という名前の変数に 8000 という値を代入

//サーバーのメインルート ("/") にアクセスするとindex.htmlファイルの内容をユーザーに提供
//サーバーのルートとは,
// google.com/search の /search の部分や、
// github.com/sho96/mediapipeTutorial の /sho96/mediapipeTutorial の部分のことである。
app.get("/", (req, resp) => {
  resp.status(200).send(readFileSync("./index.html"));
});

//作ったサーバーの骨組みから、ポート番号をhttpPort (今回は8000) でサーバーを公開する。
httpServer = http.createServer(app);
httpServer.listen(httpPort);

console.log(`server listening on port ${httpPort}`);
