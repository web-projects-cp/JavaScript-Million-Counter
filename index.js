// Your code here

const button=document.getElementById('btn');
const content=document.getElementById('counter');
let n=1;
let myInterval=setInterval(numberInterval);
function numberInterval(){
    if(n>1000000){
        clearInterval(myInterval);
    }
    else{
        console.log(n);
        content.innerHTML="Total No. of numbers displayed in Console : " + n;
        n++;
    }
}