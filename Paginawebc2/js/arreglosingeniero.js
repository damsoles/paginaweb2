class Arreglos{
    
    mayor(){
      let num=document.getElementById("num").value
      let numeros=num.split(";")
      let mayor=parseInt(numeros[0])
      for(let i=1;i<numeros.length;i++){
      if(mayor < parseInt(numeros[i])){
        mayor=parseInt(numeros[i])
        }
      }
    }
    //            9
    acuDivisores(num){
       let acu=0
       for(let c=1;c<num;c++){
          if (num%c==0){
              acu=acu+c
          }
       }
       return acu //1+3=4
    }
    sumaDivisores(){
      //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
      let datos= document.getElementById("datos").value
      let numeros = datos.split(";") //["4","6","9","10"]
      let acu,num=0,resultado=""
      // recorre cada elemento del arreglo
      for(let i=0;i < numeros.length;i++){
          // proceso de suma de divisores
          num=parseInt(numeros[i])
          acu=this.acuDivisores(num)
          resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
      }
      let resp = document.getElementById("resp")
      resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
      
    }
    perfectos(){
      //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
      let datos= document.getElementById("datos").value
      let numeros = datos.split(";") //["4","6","9","10"]
      let acu,num=0,resultado=""
      // recorre cada elemento del arreglo
      for(let i=0;i < numeros.length;i++){
          // proceso de suma de divisores
          num=parseInt(numeros[i])
          acu=this.acuDivisores(num)
          if (acu==num){
             resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
          }
       }
      let resp = document.getElementById("resp")
      resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
  
    }
    decimalRomano(numeroDecimal) {
      const numeros = [100, 90, 50, 40, 10, 9, 5, 4, 1];
      const digitoRomanos = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
      let numRomano = "";
      let indice = 0;
      
      while (numeroDecimal > 0) {
        while (numeroDecimal >= numeros[indice]) {
          numeroDecimal = numeroDecimal -numeros[indice];
         numRomano = numRomano+digitoRomanos[indice];
        }
       indice=indice+1;
      }
  
      return numRomano;
  }
   
    base10_2() {
     //      num
     // 10 =  10/2
     //       0 5/2
     //         1 2/2
     //           0 1/2
     //             1 0            
      let digito,numeros = [], base2 = "",aux
      let num = 10//parseInt(document.getElementById("datos").value)
      aux=num
      while (num > 0) {
        digito = num % 2
        num = Math.floor(num / 2)
        numeros.push(digito)
      }
      for (let ind = numeros.length - 1; ind >= 0; ind--) {
        base2 = base2 + numeros[ind]
      }
      console.table({aux,base2})
      //let resp = document.getElementById("resp")
      //resp.textContent = `Base10[${aux}] es= ${base2} Base2`
    }
  
    buscarArreglo() {
      let datos = document.getElementById("datos").value
      let arreglo =datos.split(";")
      let buscado =document.getElementById("buscado").value
      let c = 0, enc = false
      //arr=[10,20,30,50]  buscado=60
      while (c < arreglo.length && enc == false) {
        if (arreglo[c].toLowerCase() == buscado.toLowerCase()){
          enc = true
        }
        else {
          c = c + 1
        }
      }
      let resp = document.getElementById("resp")
      if (enc == true) {
        //console.log(buscado, "se encuentra en la pos: ",c)
        resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
      } else {
        //console.log(buscado," no se encuentra")
        resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
      }
    }
    estudiantes(){
      // "{nombre:"ana",vh:5,nh:40}"
      // let emp= Json.parse("{nombre:"ana",vh:5,nh:40}")
      const notas = [
        {nombre:"ana",n1:10,n2:20},
        {nombre:"dan",n1:20,n2:10},
        {nombre:"jose",n1:30,n2:50},
        {nombre:"miguel",n1:40,n2:40},
      ]
      //let est1 = { nombre: "ana", n1: 10, n2: 20 }
      //console.log(est, est.nombre, est.n1, est.n2, (est.n1+est.n2)/2)
      let est,prom
      for(let i=0;i<notas.length;i++){
        est = notas[i]
        prom = (est.n1+est.n2)/2
        console.log(est,est.nombre,prom)
      }
    }
  }
  
  const arr = new Arreglos()
  arr.estudiantes()
  // Ejempl   de uso
  // const numero = 97;
  // const romano = arr.decimalRomano(numero);
  // console.log(`${numero} en números romanos es: ${romano}`)