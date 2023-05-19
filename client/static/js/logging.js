 
//hiding passwords icons
//module.exports = {hide,show,fnamevalid,lnamevalid,validateEmail,screen1,screen2,checkpassword,checkpass,regist,login}
 function hide(icon) {
var pass = document.getElementById("pass"+icon)
var icon =document.getElementById("icon"+icon);
  

  icon.classList.remove("bx-show");
   icon.classList.add("bxs-hide");
   pass.type = "password" ;

}
function show(icon){

  var pass = document.getElementById("pass"+icon)
  var icon =document.getElementById("icon"+icon);
   icon.classList.remove("bxs-hide");
   icon.classList.add("bx-show");
   pass.type = "text" ;
  
}


//register
  //warnings
    var fnerr=document.getElementById("fnerr");
    var lnerr=document.getElementById("lnerr");
    var emerr=document.getElementById("emerr");


  //inputs
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById('email'); 
    var registerPassword = document.getElementById("pass1");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var cferr=document.getElementById("cferr");
    var registerConfirmationPassword=document.getElementById("pass2");
  //validation
  /*first name validation */
function fnamevalid(){
    if (fname.value.length==0)
    {
        fnerr.innerHTML="Please fill your first name"
        fnerr.style.color="#FF0000";
        return false;
    }
    else{
    fnerr.innerHTML="valid";
    fnerr.style.color="#017b01";
    return true;
    }
}
/*last name validation */
function lnamevalid(){

    if (lname.value.length==0)
    {
        lnerr.innerHTML="Please fill your first name"
        lnerr.style.color="#FF0000";
        return false;
    }
   else{
    lnerr.innerHTML="valid";
    lnerr.style.color="#017b01";
    return true;
    }
}
/*email validation */
function validateEmail() {
    if(email.length == 0) {
        emerr.innerHTML = "Please fill your email";
        emerr.style.color="#FF0000";
    return false;
    }
     if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emerr.innerHTML = 'Email Invalid'
        fnerr.style.color="#FF0000";
        return false;
    }
    
    emerr.innerHTML = "valid";
    emerr.style.color="#017b01";
    return true;
    
}
/*password  validation */
// When clicking on the password field, show the message box
 function screen1() {
  document.getElementById("vaildpass").style.display = "block";
}
// When clicking outside of the password field, hide the message box
function screen2() {
  document.getElementById("vaildpass").style.display = "none";
}
/*the message box checking for password features */
function checkpassword() {

  var lower = /[a-z]/g;
  if(registerPassword.value.match(lower)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var upper = /[A-Z]/g;
  if(registerPassword.value.match(upper)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(registerPassword.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  

  if(registerPassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
/*password configration validation */
/*id for the error of the configration */
function checkpass(){
  
    if(registerPassword.value.length!=0){
        if(registerPassword.value==registerConfirmationPassword.value){
            cferr.innerHTML="password matched";
            cferr.style.color="#017b01";
 
        }
        else{
            cferr.innerHTML="password not matched";
            cferr.style.color="#FF0000";
        }

    }
}

 async function regist(){    
        const User = 
        {
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        password : registerPassword.value
        }
        console.log(User);
        const response = await fetch
        (
            'http://localhost:8080/adduser',
        {
        method: 'POST',
          headers: { "Content-Type": "application/json" },
        body:JSON.stringify(User), 
        }
        )
        }                                                              

//login
        //inputs
var logmail = document.getElementById("logemail");
var logpass = document.getElementById("pass3");
async function login(){
const User =  {
       email : logmail.value,
       password : logpass.value
        }

        const response = await fetch
        (
            'http://localhost:8080/login',
        {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(User), 
        } )
        .then(result => result.json())
        .then(data => {
            if(data.success){
            window.location.href = "./";
            }
         }
        )
        

        }
     
   