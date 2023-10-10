// const pas =document.getElementById("#pas");
// const chk =document.getElementById("#chk");

// chk.onchange =function(e){
// pas.Type =chk.checked ? "text" :"password";
// };

let email2 = document.getElementById("email");

let name = document.getElementById("name");
let x = /Abdo(zaghloul)/;
function validate() {
  let x = /Abdo(zaghloul)/;
  if (x.test(email2.value) == true) {
    email2.classList.add('is-valid')
  
} else {
    email2.classList.add('is-novalid')

  }
}
email2.addEventListener("blur", validate);
