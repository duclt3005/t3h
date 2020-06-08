let btn = document.querySelectorAll(".btn-primary");
let cart = document.querySelector(".cart");
let arr = new Array();

for(let i=0; i < btn.length; i++){
    btn[i].onclick = () => {
        let parent= btn[i].parentElement;
        let name = parent.querySelector("h5").innerText;
        let price = parent.querySelector("p").innerText;
        let obj =   {id: i,
        name: name,
        price: price,
        number: 1
        };
        let count = 0;
        for(let k=0; k<arr.length; k++){
            if(obj.id === k){
                arr[k].number++;
                count++;
            }
        }
        if(count===0){
            arr.push(obj);
        }
        cart.innerHTML="";
        for(let j=0; j< arr.length; j++){
            cart.innerHTML=cart.innerHTML+"<div class='cart-item'> <h5 class='card-title'>"+arr[j].name+"</h5><p class='card-text'>"+arr[j].price+"</p> <p class='card-text'>"+arr[j].number+"</p><button onclick='deleteItem("+j+")'>Delete</button></div>";
        }
    };
}
function deleteItem(i){
    arr.splice(i, 0);
    console.log(arr);
    for ( let j=0; j< arr.length; j++){
        cart.innerHTML=cart.innerHTML+"<div class='cart-item'> <h5 class='card-title'>"+arr[j].name+"</h5><p class='card-text'>"+arr[j].price+"</p> <p class='card-text'>"+arr[j].number+"</p><button onclick='deleteItem(j)'>Delete</button></div>";
    }
}