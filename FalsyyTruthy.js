
//Definir la función area(spec), que es spec.height * spec.width si están las dos definidas, 0 en caso contrario.
/*const mayor = (x) => x || 0;

const area = (spec) => {
    const resultado = mayor(spec.height) * mayor(spec.width);
    return resultado;
};
const cuadrado ={
    height :10,
    width: 3
};

console.log(area(cuadrado));

*/





/*Definir la función importeTotal(factura), donde se define importeTotal = neto + iva - descuento, y cada uno de estos tres puede ser, o no, un atributo de factura. 
Si factura no tiene ninguno de los atributos, pues su importe total será 0.

Porcentaje de descuento
Tener en cuenta que si no está definido el descuento, tal vez sí esté definido el porcDescuento que se aplica sobre el neto … si el neto está definido, claro.

Iva por defecto
Si no está definido el iva, entonces calcularlo como el 20% del neto … si el neto está definido, claro.

Porcentaje de iva específico
Tener en cuenta que se puede indicar el porcIva, si está, hay que usar ese en lugar del 20.*/
/*
const iva = (porcentaje,value) =>  value * (porcentaje/100 || 0.2);

const descuento = (porcentaje,value)  => (value * (porcentaje/100)) || 0;

const importeTotal = (factura) => ((factura.neto || 0) + iva(factura.porIva,factura.neto) - descuento(factura.porDescuento,factura.neto) )|| 0;


let factura = {
 neto : 100,
 porIva : 10,
 porDescuento: 10,
}

console.log(importeTotal(factura))*/





/*Calorías
Definir la función calorias(platoDeFideos), donde el plato puede o no tener los atributos caloriasBase (default 200),
 tieneSalsa y tieneQueso (default de estos dos, false).
 La salsa agrega 20 calorías, el queso 30.*/ 
/*
const tieneQueso = (platoDeFideos) => platoDeFideos.tieneQueso ? 30 : 0; 


const tieneSalsa = (platoDeFideos) => platoDeFideos.tieneSalsa ? 20 : 0; 


 const calorias = (platoDeFideos) => platoDeFideos.caloriasBase || 200 + tieneQueso(platoDeFideos) + tieneSalsa(platoDeFideos) ;


 let platoDeFideos = {

 };

 console.log(calorias(platoDeFideos))
 */



 /* Definir la función fullName(person) donde person puede, o no, tener los atributos name y surname. Si tiene los dos, hay que separarlos con un espacio.

Hint: usar trim().
 */


const haveName = (person) => person.name ? person.name : "";
const haveSurname = (person) => person.surname ? person.surname : "";

const fullName = (person) => haveName(person).trim()+ " " +haveSurname(person).trim();



let person = {
    name: "     lucas",
    surname:"herrera"
    
}


console.log(fullName(person))