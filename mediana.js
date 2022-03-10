
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    300,
    100,
    1,
    100000000,
  ];
  
  var listaOrdenada = lista1;
  listaOrdenada.sort(function(a, b) {
    return a - b;
  });

  console.log(listaOrdenada)
  

  const mitadLista1 = parseInt(listaOrdenada.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista1 - 1];
    const elemento2 = listaOrdenada[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista1];
  }