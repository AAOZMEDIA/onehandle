function post() {
  fetch("/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: document.getElementById("text").value
    })
  })
    .then(res => res.json())
    .then(() => {
      document.getElementById("status").innerText = "Posted!";
    });
}