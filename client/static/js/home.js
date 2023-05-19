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
