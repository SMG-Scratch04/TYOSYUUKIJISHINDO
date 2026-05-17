fetch("https://www.jma.go.jp/bosai/ltpgm/data/list.json")
  .then(res => res.json())
  .then(data => {
    console.log(data); // 日本語で表示される
  });
