(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btnPrint = document.getElementById("btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());

  // Configuration for this policy page
  const CONFIG = {
    developerName: "Simon Chitepo",
    supportEmail: "cypherzw@gmail.com",
    effectiveDate: "2026-01-06",
    lastUpdated: "2026-01-06",
    appName: "Offline Games : Blind Maze"
  };

  const devNameEl = document.getElementById("developerName");
  if (devNameEl) devNameEl.textContent = CONFIG.developerName;

  const supportEmailEl = document.getElementById("supportEmail");
  if (supportEmailEl) {
    supportEmailEl.textContent = CONFIG.supportEmail;
    supportEmailEl.href = `mailto:${CONFIG.supportEmail}`;
  }

  const effectiveEl = document.getElementById("effectiveDate");
  if (effectiveEl) effectiveEl.textContent = CONFIG.effectiveDate;

  const updatedEl = document.getElementById("lastUpdated");
  if (updatedEl) updatedEl.textContent = CONFIG.lastUpdated;

  const title = document.querySelector("title");
  if (title) title.textContent = `Privacy Policy | ${CONFIG.appName}`;
})();
