AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
   const agora = new Date();
   const timeStampAtual = agora.getTime();

   const distanciaEvento = timeStampDoEvento - timeStampAtual;

   const diaMs = 1000 * 60 * 60 * 24;
   const horaMs = 1000 * 60 * 60;
   const minutosMs = 1000 * 60;

   const dias = Math.floor(distanciaEvento / diaMs);
   const horas = Math.floor((distanciaEvento % diaMs ) / horaMs);
   const minutos = Math.floor((distanciaEvento% horaMs) / minutosMs);
   const segundos = Math.floor((distanciaEvento % minutosMs) / 1000);

   document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

},1000)