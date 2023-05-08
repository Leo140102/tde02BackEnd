function ex1(){
    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0 ){
            console.log(i)
        }
    }
}

function ex2(){
    const arr = [2,4,6,8]
    let soma = 0;
    for(let i = 0 ; i < arr.length ; i++){
        soma = soma + arr[i]
    }
    console.log(soma)
}

function ex3(){
    const arr = [-1,1,-2,2,-3,3]
    let guardIndice = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 ){
            arr.splice(i,1)
        }
    }
    console.log(arr)
}

function ex4(){
    const arr = [1,2,3,4,5]
    const nArra = []
    for(let i = 0 ; i< arr.length ; i++){
        nArra[i] = arr[i] * 2
    }
    console.log(nArra)
}

function somarNumeros(num1, num2){
    return new Promise((resolve, reject)=>{
      let resultado = num1 + num2;
      if(resultado % 2 === 0){
        resolve(resultado);
      } else {
        reject('Erro: A soma dos números é ímpar');
      }
    });
  }
  
somarNumeros(5, 5)
    .then(resultado => {
        console.log(`Resultado: ${resultado}`);
    })
    .catch(erro => {
        console.log(erro);
    });

ex4()

ex3()

ex2()
 
ex1()
