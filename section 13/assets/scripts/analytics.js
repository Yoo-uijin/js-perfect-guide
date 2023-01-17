const intervalId = setInterval(
  (data) => {
    console.log(`Sending analytics data... ${data}`);
  },
  2000,
  "A....B...C.."
);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
