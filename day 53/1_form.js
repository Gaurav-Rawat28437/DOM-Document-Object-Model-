const submitBtn=document.getElementById("button")

submitBtn.addEventListener("click",(event)=>{

    event.preventDefault()  //   it hepls to prevent from reloading the website after submit the form.
    console.log("form submit")

})