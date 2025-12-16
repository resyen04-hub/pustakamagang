// Fungsi untuk load HTML header/footer
function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Panggil header dan footer
loadHTML('header-container', 'header.html');
loadHTML('footer-container', 'footer.html');
    function kirim() {
        alert ("Email Terkirim!");
    }
