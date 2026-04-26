$done({
  body: "",
  headers: {
    ...$response.headers,
    "Content-Type": "application/json;charset=UTF-8",
    "Content-Length": "0"
  }
});