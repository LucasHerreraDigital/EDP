/*const mayor = (x) =>{ x > 10;}

const filtro = (values,fn)=>{
  const r = []
  for(let i = 0 ;i<values.length;i++){
    if(fn(values[i])){
      r.push(values[i])
    }
    return r;
  }
}


console.log(filtro([8,2,7,12], mayor))//recibe una funcion y un array


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("hola")
setTimeout(()=>{console.log("como")},3000) //callback
console.log("Estas?")


console.log("hola")
setTimeout((nombre)=>{console.log('... ${nombre}')},3000,"juan")

console.log("chau")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////     archivo JSON*/ /*
const docentes= [
  {
    nombre: "gerardo",
    edad:50,
  },
  {
    nombre: "sa",
    edad:55,
  },
  {
    nombre: "err",
    edad:45,
  },
];



console.log(docentes.reduce((inicial,next)=>{return inicial.edad > next.edad ? inicial : next}));//returna el objeto docente de mayor edad
console.log(docentes.reduce((inicial,next)=>inicial.edad > next.edad ? inicial : next));//returna el objeto docente de mayor edad


////////////////////////////////////////////////////////////////////////////////////////////
/*
const fn = (x) => Math.abs(x)

const valores = [-3,8,12,-10,14,-16,7]

console.log(valores.reduce((max,next) => fn(max) > fn(next) ? max : next,0));
console.log(valores.reduce((max,next) => fn(max) > fn(next) ? max : next));*/

///// Creamos clase

class Procesador {
    constructor() {
      this.funciones = [];
    }
    agregarFuncion(nombre, fn) {
      this.funciones.push({ nombre: nombre, fn: fn }); ///////es similar this.funciones.push({nombre:nombre,fn})   o    this.funciones.push({name:nombre,fn})
    }
    maximizar(values) {
      return values.map( (each)=> {
        const max = values.reduce((actual, next) =>
          this.funciones[0].fn(actual) > this.funciones[1].fn(next) ? actual : next
        );
  
        return { funcionName: each.nombre, max,  };
      });
    }
  }
  
  const proc = new Procesador();
  
  proc.agregarFuncion("abs", (x) => Math.abs(x));
  
  proc.agregarFuncion("tripe", (x) => x * 3);
  
  proc.agregarFuncion("proximo4", (x) => 1 / Math.abs(x - 4));
  
  const r = proc.maximizar([0, 2, 8, -5, 9]);
  
  console.log(r);
  //////   Probar hacer la inversa    //////
  
  /*
  const axios = require("axios");
  
  axios.get("https://restcountries.com/v3.1/all").then((respuesta) => {
     const d = respuesta.data.filter((p) => p.subregion == "South America").map(f=>{
      return {pais:f.name.common,capital:f.capital};
    });
    console.log(d);
  });
  
  console.log("Paises");
  */
  
  ///////////////////////////////    Ejercicios JavaScript
  
  //1
  /*const mayor = (x) => x || 0;
  
  const area = (spec) => {
      const resultado = mayor(spec.height) * mayor(spec.width);
      return resultado;
  };
  const cuadrado ={
      height :"",
      width: 3
  };
  
  console.log(area(cuadrado));
  */