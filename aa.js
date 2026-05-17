const proxy = "https://corsproxy.io/?";
const url = "https://www.jma.go.jp/bosai/ltpgm/data/list.json";

fetch(proxy + url)
  .then(res => res.json())
  .then(data => {
    const out = document.getElementById("output");
    out.innerHTML = "";

    data.forEach(item => {
      out.innerHTML += `
        <div class="item">
          <div class="name">${item.name}</div>
          <div class="code">コード: ${item.code}</div>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("output").textContent = "読み込みエラー";
  });
