//¿se podrá usar en un bloque de “más adentro” un let definido “más afuera”?
/*
function letVar1() {
    let b = 1
    {
        return b
    }
    
  }

  console.log(letVar1())

  //si se puede retorna el valor de let

  */





//¿se puede definir dos veces el mismo var en el mismo scope? ¿Qué pasa con let?
/*
  function letVar1() {
    var b = 1;
    var b = 2;
    {
        return b
    }
    
  }

  console.log(letVar1())
*/
  //se puede definir 2 veces el mismo var pero toma el ultimo definido



//¿Qué pasa con let?
/*
  function letVar1() {
    let b = 1;
    let b = 2;
    {
        return b
    }
    
  }

  console.log(letVar1())
*/
//da error 







const princesa = { nombre: "Carolina", apellido: "Casiraghi" };

//let p2 = princesa;

const p2 = princesa; 

//let p2 = {...princesa};

console.log(princesa)


///con cost da error y con let hace referencia al objeto const anterior