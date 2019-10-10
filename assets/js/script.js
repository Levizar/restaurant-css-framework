
function test(){
  let x = document.querySelectorAll(".cadre");
  console.log(x)
  for (let i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.backgroundColor = "white";
  }
}



