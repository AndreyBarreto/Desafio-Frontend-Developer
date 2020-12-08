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
                <p class="oldprice" >De: R$${api.oldPrice}</p>
                <p class="price" >Por: R$${api.price}</p>
                <p class="installments" >ou ${api.installments.count}x de R$${api.installments.value}</p>
                <button class="compra">Comprar</button>
            </div>
                
           
        `
    })
        .join("")
        document.getElementById("cards").innerHTML=generateHTML
        
        
});

function myFunction(){

    fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2")
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
                <p class="oldprice" >De: R$${api.oldPrice}</p>
                <p class="price" >Por: R$${api.price}</p>
                <p class="installments" >ou ${api.installments.count}x de R$${api.installments.value}</p>
                <button class="compra">Comprar</button>
            </div>
                
           
        `
    })
        .join("")
        document.getElementById("cards2").innerHTML=generateHTML
 
        
        
});

}