
var number=Math.floor(Math.random()*100)+1;
console.log(number);


function guess(){
var guess=document.getElementById("num");
var result=document.getElementById("result");
console.log(guess.value)
if(number==guess.value){
    result.innerHTML=" You guess the correct no."
    result.style.color="green";
}
else if(number>guess.value){
result.innerHTML=" You guess the lesser no.";
result.style.color="red";
}
else{
    result.innerHTML=" You guess the greater no.";
    result.style.color="blue";
    }
}
