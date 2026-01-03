function go(page) {
  window.location.href = page;
}

function logout() {
  localStorage.clear();
  window.location.href = "employee-dashboard.html";
}

/* ===== MOCK DATA ===== */
const user = {
  role: "employee", // change to "admin" to test admin
  name: "Dhruvrajsinh",
  phone: "9999999999",
  address: "Gujarat, India",
  department: "Computer Engineering",
  salary: "₹45,000"
};

const attendance = [
  { date: "2026-01-01", status: "Present" },
  { date: "2026-01-02", status: "Leave" }
];

const leaves = [
  { type: "Sick", from: "2026-01-05", to: "2026-01-06", status: "Pending" }
];
function updateClock() {
  const now = new Date();
  document.getElementById("liveClock").innerText =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

let punchedIn = true;

function togglePunch() {
  const btn = event.target;
  punchedIn = !punchedIn;
  btn.innerText = punchedIn ? "Punch Out →" : "Punch In →";
}
