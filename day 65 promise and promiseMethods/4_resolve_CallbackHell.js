//resolve callback hell of posting picture in instagram

function clickPicture()
{
    return new Promise((resolve,reject)=>{

            setTimeout(()=>{
            resolve("Picture selected")
        },4000)

    })
    
}

function selectPicture()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Picture Selecter")
        },3000)
    })
}

function applyFilter()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                resolve("Filter Applies")
            },2000)
    })
    
}

function chooseCaption()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                resolve("Caption Selector")
            },1000)

    })
     
}

function uploadPicture()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            
                resolve("Picture click")
            },1000)
    })
     
}


clickPicture()
.then(selectPicture)
.then(applyFilter)
.then(chooseCaption)
.then(uploadPicture)