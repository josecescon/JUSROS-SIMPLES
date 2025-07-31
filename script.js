function calculo(){
    let P = parseFloat(document.getElementById('P').value);
    let C = parseFloat(document.getElementById('C').value);
    let T = parseFloat(document.getElementById('T').value);
      if(C == 0){
        alert("o C não pode ser 0");
        return;
    }
      if(P == 0){
        alert("o P não pode ser 0");
        return;
    }
      if(T == 0){
        alert("o T não pode ser 0");
        return;
    }
    let newP = P/ (100);
    let J = C * newP * T;
    let M = C + J;
    document.getElementById('resultado2').textContent = "O juros é : " + J;
     document.getElementById('resultado').textContent = "O montante é : " + M;




}