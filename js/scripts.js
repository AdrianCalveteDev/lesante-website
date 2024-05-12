/* Funciones para rotar las tarjetas de la sección "Servicios"*/

function rotarTarjeta1() {
    var tarjeta = document.querySelector('.tarjeta-uno');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function rotarTarjeta2() {
    var tarjeta = document.querySelector('.tarjeta-dos');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function rotarTarjeta3() {
    var tarjeta = document.querySelector('.tarjeta-tres');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function rotarTarjeta4() {
    var tarjeta = document.querySelector('.tarjeta-cuatro');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function rotarTarjeta5() {
    var tarjeta = document.querySelector('.tarjeta-cinco');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function rotarTarjeta6() {
    var tarjeta = document.querySelector('.tarjeta-seis');
    tarjeta.style.transform = tarjeta.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

/* Lógica para sacar más información al pulsar en los svg de cada especialidad*/

let tarjetaVisible = false; // variable que usarán todas las tarjetas

//Ortodoncia
const infoTarjetaOrtodoncia = document.getElementById('info-ortodoncia');
const tarjetaOrtodoncia = document.getElementById('tarjeta-ortodoncia');
// Agregar un evento de clic al elemento SVG
infoTarjetaOrtodoncia.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaOrtodoncia.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaOrtodoncia.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Blanqueamiento Dental
const infoTarjetaBlanqueamiento = document.getElementById('info-blanqueamiento');
const tarjetaBlanqueamiento = document.getElementById('tarjeta-blanqueamiento');
// Agregar un evento de clic al elemento SVG
infoTarjetaBlanqueamiento.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaBlanqueamiento.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaBlanqueamiento.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Protesis Dental
const infoTarjetaProtesis = document.getElementById('info-protesis');
const tarjetaProtesis = document.getElementById('tarjeta-protesis');
// Agregar un evento de clic al elemento SVG
infoTarjetaProtesis.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaProtesis.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaProtesis.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Implantología
const infoTarjetaImplantologia= document.getElementById('info-implantologia');
const tarjetaImplantologia= document.getElementById('tarjeta-implantologia');
// Agregar un evento de clic al elemento SVG
infoTarjetaImplantologia.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaImplantologia.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaImplantologia.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Lesiones Deportivas
const infoTarjetaLesiones= document.getElementById('info-lesiones');
const tarjetaLesiones= document.getElementById('tarjeta-lesiones');
// Agregar un evento de clic al elemento SVG
infoTarjetaLesiones.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaLesiones.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaLesiones.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia con Indiba
const infoTarjetaTerapia= document.getElementById('info-terapia');
const tarjetaTerapia= document.getElementById('tarjeta-terapia');
// Agregar un evento de clic al elemento SVG
infoTarjetaTerapia.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaTerapia.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaTerapia.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia con Indiba
const infoTarjetaBruxismo= document.getElementById('info-bruxismo');
const tarjetaBruxismo= document.getElementById('tarjeta-bruxismo');
// Agregar un evento de clic al elemento SVG
infoTarjetaBruxismo.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaBruxismo.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaBruxismo.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Reeducación postural
const infoTarjetaReeducacion= document.getElementById('info-reeducacion');
const tarjetaReeducacion= document.getElementById('tarjeta-reeducacion');
// Agregar un evento de clic al elemento SVG
infoTarjetaReeducacion.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaReeducacion.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaReeducacion.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Indiba Facial
const infoTarjetaIndiba= document.getElementById('info-indiba');
const tarjetaIndiba= document.getElementById('tarjeta-indiba');
// Agregar un evento de clic al elemento SVG
infoTarjetaIndiba.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaIndiba.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaIndiba.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Hidrafacial
const infoTarjetaHidrafacial= document.getElementById('info-hidrafacial');
const tarjetaHidrafacial= document.getElementById('tarjeta-hidrafacial');
// Agregar un evento de clic al elemento SVG
infoTarjetaHidrafacial.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaHidrafacial.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaHidrafacial.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Depilación laser
const infoTarjetaDepilacion= document.getElementById('info-depilacion');
const tarjetaDepilacion= document.getElementById('tarjeta-depilacion');
// Agregar un evento de clic al elemento SVG
infoTarjetaDepilacion.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaDepilacion.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaDepilacion.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Ultrasonidos Focalizados
const infoTarjetaUltrasonidos= document.getElementById('info-ultrasonidos');
const tarjetaUltrasonidos= document.getElementById('tarjeta-ultrasonidos');
// Agregar un evento de clic al elemento SVG
infoTarjetaUltrasonidos.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaUltrasonidos.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaUltrasonidos.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Estudio Biomecánico
const infoTarjetaBiomecanico= document.getElementById('info-biomecanico');
const tarjetaBiomecanico= document.getElementById('tarjeta-biomecanico');
// Agregar un evento de clic al elemento SVG
infoTarjetaBiomecanico.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaBiomecanico.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaBiomecanico.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Quiropedia
const infoTarjetaQuiropedia= document.getElementById('info-quiropedia');
const tarjetaQuiropedia= document.getElementById('tarjeta-quiropedia');
// Agregar un evento de clic al elemento SVG
infoTarjetaQuiropedia.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaQuiropedia.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaQuiropedia.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Prevención de lesiones
const infoTarjetaPrevencion= document.getElementById('info-prevencion');
const tarjetaPrevencion= document.getElementById('tarjeta-prevencion');
// Agregar un evento de clic al elemento SVG
infoTarjetaPrevencion.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaPrevencion.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaPrevencion.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Soluciones Ortopédicas
const infoTarjetaOrtopedicas= document.getElementById('info-ortopedicas');
const tarjetaOrtopedicas= document.getElementById('tarjeta-ortopedicas');
// Agregar un evento de clic al elemento SVG
infoTarjetaOrtopedicas.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaOrtopedicas.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaOrtopedicas.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia Parejas
const infoTarjetaParejas= document.getElementById('info-parejas');
const tarjetaParejas= document.getElementById('tarjeta-parejas');
// Agregar un evento de clic al elemento SVG
infoTarjetaParejas.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaParejas.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaParejas.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia familiar
const infoTarjetaFamiliar= document.getElementById('info-familiar');
const tarjetaFamiliar= document.getElementById('tarjeta-familiar');
// Agregar un evento de clic al elemento SVG
infoTarjetaFamiliar.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaFamiliar.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaFamiliar.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia Adultos
const infoTarjetaAdultos= document.getElementById('info-adultos');
const tarjetaAdultos= document.getElementById('tarjeta-adultos');
// Agregar un evento de clic al elemento SVG
infoTarjetaAdultos.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaAdultos.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaAdultos.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Terapia Juvenil
const infoTarjetaJuvenil= document.getElementById('info-juvenil');
const tarjetaJuvenil= document.getElementById('tarjeta-juvenil');
// Agregar un evento de clic al elemento SVG
infoTarjetaJuvenil.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaJuvenil.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaJuvenil.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Neuromodulación
const infoTarjetaNeuromodulacion= document.getElementById('info-neuromodulacion');
const tarjetaNeuromodulacion= document.getElementById('tarjeta-neuromodulacion');
// Agregar un evento de clic al elemento SVG
infoTarjetaNeuromodulacion.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaNeuromodulacion.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaNeuromodulacion.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Rejuvenecimiento Facial
const infoTarjetaRejuvenecimiento= document.getElementById('info-rejuvenecimiento');
const tarjetaRejuvenecimiento= document.getElementById('tarjeta-rejuvenecimiento');
// Agregar un evento de clic al elemento SVG
infoTarjetaRejuvenecimiento.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaRejuvenecimiento.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaRejuvenecimiento.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Hilos Tensores
const infoTarjetaHilos= document.getElementById('info-hilos');
const tarjetaHilos= document.getElementById('tarjeta-hilos');
// Agregar un evento de clic al elemento SVG
infoTarjetaHilos.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaHilos.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaHilos.style.display = 'block';
    tarjetaVisible = true;
  }  
});

//Mesoterapia Facial
const infoTarjetaMesoterapia= document.getElementById('info-mesoterapia');
const tarjetaMesoterapia= document.getElementById('tarjeta-mesoterapia');
// Agregar un evento de clic al elemento SVG
infoTarjetaMesoterapia.addEventListener('click', () => {
  // Si la tarjeta está visible la mostramos, de lo contrario, la ocultamos
  if (tarjetaVisible) {
    tarjetaMesoterapia.style.display = 'none';
    tarjetaVisible = false;
  } else {
    tarjetaMesoterapia.style.display = 'block';
    tarjetaVisible = true;
  }  
});