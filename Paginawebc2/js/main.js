class Numeros{
    limpiar(){
      document.getElementById('num').value = ""  
      document.getElementById('multi').value = ""  
      document.getElementById('resp').textContent = ""  
    }
    vuelto(){
      let num_pago= document.getElementById('num_pago').value
      let num_costo=document.getElementById('num_costo').value
      let num_cant=document.getElementById('num_cant').value

      num_pago = parseInt(num_pago)
      num_costo = parseInt(num_costo)
      num_cant = parseInt(num_cant)

      let resp= document.getElementById('resp')

      let total = num_costo * num_cant
      let vuelto = num_pago - total 
      if ( vuelto >  0){
      resp.textContent = `El vuelto sería: ${vuelto}`
     }else {
      resp.textContent = "El pago es insuficiente para cubrir el costo total";
         }
    }
    multiplo(){
        let num = document.getElementById('num').value 
        let mul = document.getElementById('multi').value
        num = parseInt(num) 
        mul = parseInt(mul) 
        let resp = document.getElementById('resp') 
        if (num % mul == 0) {
          resp.textContent = `${mul} Es multiplo de ${num}`
        } else {
          resp.textContent = `${mul} No es multiplo de ${num}`
                    }
    }
    divisores(){
      let num1 = document.getElementById('num1').value 
      let num2 = document.getElementById('num2').value
      num1 = parseInt(num1) 
      num2 = parseInt(num2) 
      let resp = document.getElementById('resp') 
      if (num1 % num2 == 0) {
        resp.textContent = `${num1} Es divisor de ${num2}`
      } else {
        resp.textContent = `${num1} No es divisor de  ${num2}`
                  }
    }
    tablamult() {
      let num1 = document.getElementById('num1').value;
      let resp = document.getElementById('resp');
      let tabla = "<table><table>";

      for (let i = 1; i <= 12; i++) {
          if (i % 4 === 1) {
              tabla += "<tr><tr>";
          }

          let resultado = num1 * i;
          tabla += `<td><td><td>${num1} * ${i} = ${resultado}</td></td></td>`;

          if (i % 4 === 0 || i === 12) {
              tabla += "</tr></tr>";
          }
      }

      tabla += "</table></table>";
      resp.innerHTML = tabla;
  }
    divisores(){
      let num1 = document.getElementById('num1').value 
      num1 = parseInt(num1) 
      let divisores=""
      let resp = document.getElementById('resp') 
      for(let i=1 ;i<num1;i++){
      if (num1 % i == 0) {
        divisores=divisores+ " " + i.toString()
      resp.textContent=`${divisores}`
    }
    }
    }
    sumadiv(){
      let num1=document.getElementById('num1').value
      let resp=document.getElementById('resp')
      let suma =0
      num1 = parseInt(num1)
      for(let i=1;i<num1 ;i++){
        if(num1%i==0){
        suma=suma+i
        }
        resp.textContent=`la suma de los divisores de ${num1} son ${suma}`
      //  console.log(suma);
      }
    }
    cantidadiv(){
      let num1= document.getElementById('num1').value
    let resp=document.getElementById('resp')
      num1 = parseInt(num1)
      let contador=0
      for(let i=1;i<num1;i++){
        if(num1%i==0){
          contador=contador+1
        }
      //  console.log(contador);
      resp.textContent=`la cantidad de divisores son ${contador} `
      }
    }
    factorial(){
      let num1=document.getElementById('num1').value 
      let resp = document.getElementById('resp')
      let factorial=1
      for(let i=1;i<=num1;i++){
        factorial= factorial*i
        resp.textContent=`el factorial de ${num1} es ${factorial}`
      // console.log(factorial);
      }
    }
    exponente(){
      let base =document.getElementById('base').value
    let exponente = document.getElementById('exponente').value
    let resp = document.getElementById('resp')
    let resultado = base ** exponente
    resp.textContent=` su respuesta es :${resultado}`
    //console.l

    }
    perfecto(){
      let num1= document.getElementById('num1').value
      let resp=document.getElementById('resp')
      num1 = parseInt(num1)
      let suma=0 
      for(let i=1;i<num1 ;i++){
        if(num1%i==0){
        suma=suma+i
        }
      }
        if(suma == num1){
        resp.textContent=`el numero ${num1} es perfecto`;
        }
        else{
          resp.textContent=`el numero ${num1} no es perfecto`
      }
  }
  numeroinv(){
    let num1 = document.getElementById('num1').value;
    let resp=document.getElementById('resp')
    let inv = "";
    while (num1 > 0) {
      let r = num1 % 10;
      num1 = Math.floor(num1 / 10);
      inv = inv + r.toString();
    }
  
    resp.textContent=`${inv}`; //
  }
  fibonacci() {
    let num = document.getElementById('num').value
    num = parseInt(num)
    let resp = document.getElementById('resp');
    let a = 0;
    let b = 1;
    let c = 0
    let fiboSecuencia = " 0, 1 "
    if( num > 0 ){
      for(let i = 2; i <= num; i++){
         c = a + b;
         a = b;
         b = c;
         fiboSecuencia = fiboSecuencia + `, ${b}`
      }
    }
    resp.textContent =  `La secuencia de Fibonacci para ${num} es: ${fiboSecuencia}`;
  }
  amigo() {
    let num1 =document.getElementById('num1').value
    num1 = parseInt(num1)
    let num2 = document.getElementById('num2').value
    num2 = parseInt(num2)
    let resp = document.getElementById('resp');
    let suma1 = 0
    let suma2= 0
    let i = 1, j = 1
    while(i < num1){
     if( num1 % i==0){
      suma1 = suma1 + i 
     }
      i = i + 1
    }
    while (j < num2){
      if (num2 % j==0){
        suma2 = suma2 + j
      }
      j = j + 1
    }
    if( suma1 == num2 && suma2 == num1) {
      resp.textContent = `Los numeros ${num1} y ${num2} son amigos`
    } else {
      resp.textContent = `Los numeros ${num1} y ${num2} no son amigos`
    }
  }
  primo(){
    let num = document.getElementById('num').value
    let resp = document.getElementById('resp')
    let r = 0
    let primo = 1
    let c = 2 
    while(c < num && primo == 1){
      r = num % c
      if ( r == 0){
        primo = 0
      } else {
        c = c +1 
      }
    }
    if(primo == 1){
      resp.textContent = `${num} es un número primo`
    } else{
      resp.textContent =`${num}  no es un número primo`
    }
  }
  primogem(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value 
    let resp = document.getElementById('resp')
    let r = 0
    let primo1 = 1
    let primo2 = 1 
    let c = 2 
    while(c < num1 && primo1 == 1){
      r = num1 % c
      if ( r == 0){
        primo1 = 0
      } else {
        c = c +1 
      }
    }
    while(c < num2 && primo2 == 1){
      r = num2 % c
      if ( r == 0){
        primo2 = 0
      } else {
        c = c +1 
      }
    }
    if( primo1 == 1 && primo2 == 1 && Math.abs(num1- num2)===2){
      resp.textContent = `Los numeros ${num1} y ${num2} son primos gemelos`
    } else {
      resp.textContent = `Los numeros ${num1} y ${num2} no son primos gemelos `
    }
  }
  cantdigitos(){
  let num = document.getElementById("num1").value;
  let digitos = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    digitos++;
  }
  document.getElementById("resp").innerHTML = "La cantidad de dígitos es: " + digitos;
 }

}
const numero = new Numeros()
//numero.multiplo()