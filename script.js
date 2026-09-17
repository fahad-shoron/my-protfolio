function liveDateTime() {
  const now = new Date();
  const localFormat = now.toLocaleString();
  document.getElementById("time").innerHTML = localFormat;
}

liveDateTime();

setInterval(liveDateTime, 1000);