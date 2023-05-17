
function crbook(crname,crimg,id)
    {
        var container = document.getElementById("galary"); //get get container div
        const divbook = document.createElement("div"); //create div for book
        divbook.classList.add("book"); // add class "book" to the div of the book
        divbook.setAttribute("id", id);// add id to book div
        container.appendChild(divbook);// add the div we created to container div

        const img = document.createElement("img");//crate img tag
        img.src = crimg;//add src="" attribute to img
        var bookdiv = document.getElementById(id);//get the book div we created 
        bookdiv.appendChild(img);//add img to the book div

        const bookname = document.createElement("h5");
        bookname.innerText=crname;
        bookdiv.append(bookname);


    }



    function title(title){
    
      if(title.length>20)
      { 
         return title.slice(0,20)+"...";
      }
      else{
         return title;
      }

}

/*blob is a methods can be used for processing the data and convert it into a ReadableStream  */
async function getImageBlob(imageUrl) {
    const response = await fetch(imageUrl)
    return response.blob()
}
function gitbooks(){

    document.getElementById('galary').innerHTML="";
 fetch("https://openlibrary.org/search.json?q="+document.getElementById("search").value).then(async a=>a.json()).then(async Response=>{

  
console.log(Response);
    for(var i=0;i<Response.docs.length&&i<20;i++){
    if("isbn" in Response.docs[i])
      {
     const blob = await getImageBlob("http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg");
     if(blob.type == "image/jpeg"){

crbook (title(Response.docs[i].title),"http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg", i);
}           
}
}    
});
}


                                       /* start of form validation */

   /*id for errors*/                                    
var fnerr=document.getElementById("fnerr");
var lnerr=document.getElementById("lnerr");
var emerr=document.getElementById("emerr");

/*first name validation */
function fnamevalid(){
    var fname = document.getElementById("fname").value;
    if (fname.length==0)
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
    var lname = document.getElementById("lname").value;

    if (lname.length==0)
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
    var email = document.getElementById('email').value; 
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
var password = document.getElementById("pass1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

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
  if(password.value.match(lower)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var upper = /[A-Z]/g;
  if(password.value.match(upper)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  

  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

/*password configration validation */

/*id for the error of the configration */
var cferr=document.getElementById("cferr");
function checkpass(){
    var passw=document.getElementById("pass1").value;
    var confpass=document.getElementById("pass2").value;
   
    if(passw.length!=0){
        if(passw==confpass){
            cferr.innerHTML="password matched";
            cferr.style.color="#017b01";
 
        }
        else{
            cferr.innerHTML="password not matched";
            cferr.style.color="#FF0000";
        }

    }
}


                                                     /* end of form validation */


                                                        /*  eye icon */

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

                                                                /* end eye icon */


  async function regist(){    
        const User = 
        {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        pass : document.getElementById("pass1").value
        }
        console.log(User);
        const response = await fetch
        (
            'http://localhost:5000/adduser',
        {
        method: 'POST',
          headers: { "Content-Type": "application/json" },
        body:JSON.stringify(User), 
        }
        )
        }                                                              