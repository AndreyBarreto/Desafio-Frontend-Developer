fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
.then(function(response) {
    return response.json();
  })
.then(function(data) {
    console.log(data)
    const generateHTML = data.products.map((api)=>{
    
    
           
        
        return `
            <div class="js">
            <a><img class="image" src=${api.image}></a>
            <p class="productname" >${api.name}</p>
            <p class="description" >${api.description}</p>
            <p class="oldprice" >${api.oldPrice}</p>
            <p class="price" >${api.price}</p>
            <p class="installments" >${api.installments}</p>
            <button class="compra"></button>
            </div>
                
           
        `
    })
        .join("")
        document.getElementById("cards").innerHTML=generateHTML
        
        
});