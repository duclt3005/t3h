const t = document.getElementsByTagName("h1")[1];
t.style.color= "green";
function clickColor(){
    if(t.style.color=="red"){
        t.style.color= "green";
    }
    else{
        t.style.color= "red";
    }
}
const a1= document.getElementsByTagName('a')[0];
console.log(a1);
var x = new Array(2);
for(let i=0; i<2; i++){
    x[i]= new Array(2);
}
x[0][1]= "abc";
console.log(x);