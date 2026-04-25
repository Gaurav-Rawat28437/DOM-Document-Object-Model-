let p1=new Promise((resolve,reject)=>{

    let dataFromBackend=true

    if(dataFromBackend)
    {
        resolve("succesfull")
    }
    else{
        reject("rejected")
    }

})

p1
.then(()=>{
    console.log("complete")
})
.catch(()=>{
    console.log("fail")
})