const myMain=document.querySelector("main")

const products = [
  {
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    productName: "Cotton Shirt",
    price: 799,
    category: "ClothingClothingClothingClothing"
  },
  {
    img: "https://images.unsplash.com/photo-1528701800489-20be3c7e84b7",
    productName: "Running Shoes",
    price: 2499,
    category: "Footwear"
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    productName: "Smart Phone",
    price: 15999,
    category: "Electronics"
  },
  {
    img: "https://images.unsplash.com/photo-1503602642458-232111445657",
    productName: "Wrist Watch",
    price: 3499,
    category: "Accessories"
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    productName: "Headphones",
    price: 1999,
    category: "Electronics"
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    productName: "Casual Sneakers",
    price: 2799,
    category: "Footwear"
  }
];


for(let item of products)
{
    //creating tags in html by JS
    const card=document.createElement("div")
    const img=document.createElement("img")
    const bottomContainer=document.createElement("div")
    const productName=document.createElement("h3")
    const smallestDiv=document.createElement("div")
    const price=document.createElement("span")
    const category=document.createElement("div")


    //assigning class in attributes
    card.classList.add("card")
    img.classList.add("img")
    bottomContainer.classList.add("bottomConatiner")
    productName.classList.add("productName")
    smallestDiv.classList.add("smallestDiv")
    price.classList.add("price")
    category.classList.add("category")


    //set the attributs
    img.setAttribute("src",item.img)
    productName.innerText=item.productName
    price.innerText=`$ ${item.price}`
    category.innerText=(item.category.length>8?item.category.slice(0,8)+"...":item.category)
   

    //append the tags
   
    bottomContainer.append(productName,smallestDiv)
    smallestDiv.append(price,category)
 card.append(img,bottomContainer)

    //append in main
    myMain.appendChild(card)

}