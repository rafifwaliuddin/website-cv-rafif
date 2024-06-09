function showDateTime() {
    var now = new Date();
    var dateTimeElement = document.getElementById("dateTime");
    dateTimeElement.innerHTML = "Tanggal/Waktu: " + now.toLocaleString();
  }
  window.onload = showDateTime;

function toggleFoto() {
    var foto = document.getElementById('foto');
    if (foto.style.display === 'none') {
        foto.style.display = 'block';
    } else {
        foto.style.display = 'none';
    }
}

function gantiNama() {
    var inputNama = document.getElementById('inputNama');
    var nama = document.getElementById('nama');

    var namaBaru = inputNama.value;
    nama.textContent = namaBaru;
}



function tampilkanSkill() {
    var skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(function(bar) {
        var width = bar.style.width;
        bar.style.width = '0';
        setTimeout(function() {
            bar.style.width = width;
        }, 500);
    });
}
tampilkanSkill();

