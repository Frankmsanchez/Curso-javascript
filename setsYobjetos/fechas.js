fechaHoy = new Date();
console.log(fechaHoy);

//La fecha de mi nacimiento
Fnacimiento = new Date(`03-30-2000`);
console.log(Fnacimiento);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
masTarde = fechaHoy > Fnacimiento;
console.log(masTarde); 

//variable que contiene mi dia de nacimiento
Dia = new Date(Fnacimiento).getDay();
console.log(Dia);

//Variable que contenga mi mes de nacimeinto(se le suma uno porque enero es me cero);
mes = new Date(Fnacimiento).getMonth();
mes += 1;
console.log(mes);

//Una variable que contenga el año de mi nacimiento.
Anyo = new Date(Fnacimiento).getFullYear();
console.log(Anyo);