(function () {
  const year = new Date().getFullYear();
  document.querySelectorAll("#year").forEach(e => e.textContent = year);

  const btnPrint = document.getElementById("btnPrint");
  if (btnPrint) btnPrint.onclick = () => window.print();
})();
