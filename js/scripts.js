function rotarTarjeta() {
    var tarjeta = document.querySelector('.tarjeta');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}