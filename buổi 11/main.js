const carts = {};
function add(event){
    const btn = event.target;
    const cardBody = btn.parentNode;
    const name = cardBody.querySelector("h5").innerText;
    let price = cardBody.querySelector("p").innerText;
     price = price.replace( /\./g, '').replace(/VND/g, '');
    const id = btn.getAttribute('data-id');
//    carts[id] = {
//        id : id,
//        name: name,
//        price: Number(price),
//        total: 1
//    };
   if(carts[id]){
       carts[id].total++;
   }
   else{
    carts[id] = {
        id : id,
        name: name,
        price: Number(price),
        total: 1
    };
   }
   render();
}
function render(){
    let totalSum=0;
    const ol= document.querySelector("#cart-list");
   let html='';
   for (let key in carts){
       if(carts.hasOwnProperty(key)){
        totalSum=totalSum+carts[key].price*carts[key].total;
        html+= `<li> 
        <p>Name: ${carts[key].name}</p>
        <p>Price: ${carts[key].price}</p>
        <p>Number:${carts[key].total}</p>
        <p>Total: ${carts[key].price*carts[key].total }</p>
        <input type="number" value="${carts[key].total}" onchange="updateTotal(event, ${key})">
        <button onclick="increaseProduct(${key})">+</button>
        <button onclick="decreaseProduct(${key})">-</button>
        <button onclick="deleteProduct(${key})">Delete</button>
        <hr>
        </li>`;
       }
   }
   html += `<strong>Total price: ${totalSum}</strong>`;
   ol.innerHTML=html;
}
function deleteProduct(id){
    if(carts[id]){
        const result = confirm("xoa k????");
        if(result){
            delete carts[id];
        }
    }
    render();
}
function increaseProduct(id){
    if(carts[id]){
        carts[id].total++;
    }
    render();
}
function decreaseProduct(id){
    if(carts[id]){
        if(carts[id].total>0){
        carts[id].total--;
        }
        else{
            alert("Can't decrease");
        }
    }
    render();
}
function updateTotal(event, id){
    const value = event.target.value;
    carts[id].total= value;
    render();
}