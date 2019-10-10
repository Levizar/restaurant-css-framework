
function test(){
  let x = document.querySelectorAll(".cadre");
  console.log(x)
  for (let i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.backgroundColor = "white";
  }
}


function jour2(){
    document.getElementById('theme').style.backgroundColor='white';
    document.getElementById('theme').style.backgroundColor='white';
    document.getElementById('theme').style.color='black';
    document.getElementById('formulaire').style.backgroundColor='gray';
    let x = document.querySelectorAll(".cadre");
    console.log(x)
    for (let i = 0; i < x.length; i++) {
      console.log(x[i])
      x[i].style.backgroundColor = "#eeeeee";
    }
  }

  function nuit2(){
    document.getElementById('theme').style.backgroundColor='#292b2c';
    document.getElementById('theme').style.color='white';
    document.getElementById('formulaire').style.backgroundColor='black';
    document.querySelector('#js-color').style.color='white'; 
    let x = document.querySelectorAll(".cadre");
    console.log(x)
    for (let i = 0; i < x.length; i++) {
      console.log(x[i])
      x[i].style.backgroundColor = "#9e9e9e";
    }
  }


