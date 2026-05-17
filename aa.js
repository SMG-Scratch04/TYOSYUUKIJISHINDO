const proxy = "https://api.allorigins.win/raw?url=";
const url = "https://www.jma.go.jp/bosai/ltpgm/data/list.json";

fetch(proxy + encodeURIComponent(url))
  .then(res => res.json())
  .then(data => {
    const viewer = document.getElementById("json-viewer");
    viewer.innerHTML = syntaxHighlight(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error(err);
    document.getElementById("json-viewer").textContent = "読み込みエラー";
  });

function syntaxHighlight(json) {
  json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? "key" : "string";
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}
