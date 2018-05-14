export function numeroAleatorio (min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  return num;
  console.log("nro random: " + num );
}

export function calculateAge (birthday) {
  var birthday = birthday.split("/");
  var fechaRandom = [
    this.numeroAleatorio(1, 31),
    this.numeroAleatorio(1, 12),
    this.numeroAleatorio(2018, 2030)
  ];
  // fechaRandom[1] = 7;
  var edad = fechaRandom[2] - birthday[2];
  if ( fechaRandom[1] < birthday[1] ) {  //Si el mes de la fecha random es menor al mse de cumpleanos
    edad--;
  }
  if ( fechaRandom[2] === birthday[2] && fechaRandom[0] < birthday[0]) {  //si el mes random == al de cumpleanos Y el dia es menos al dia que cumple años
    edad--;
  }
  console.log(edad);
}
