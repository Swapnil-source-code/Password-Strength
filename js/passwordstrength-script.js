let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strength');


pass.addEventListener('input', () => {
  if (pass.value.length > 0 ) {
    msg.style.display = "block";
  }
  else {
    msg.style.display = "none";
  } 
  if (pass.value.length == 0) {
    pass.style.borderColor = "#d7d6d6"; 
  }
  else if (pass.value.length < 4) {
    str.innerHTML = "week";
    pass.style.borderColor = "red";
    msg.style.color = "red";
    msg.style.fontWeight = "500";
  }
  else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
    msg.style.fontWeight = "500";
  }
  else if (pass.value.length > 8) {
    str.innerHTML = "Strong";
    pass.style.borderColor = "green";
    msg.style.color = "green";
    msg.style.fontWeight = "500";

  }
});




