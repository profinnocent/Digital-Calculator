const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const amPm = document.querySelector('.am')

let secCount = 0;
let minCount = 59;
let hourCount = 12;
let mhpass = 0;
let ampm = 'PM';

hour.innerText = hourCount;
if(minCount<10){
  min.innerText = '0' + minCount;
}else{
  min.innerText = minCount;
}

amPm.innerText = ampm;

const timRun = setInterval(runClock, 1000);

function runClock() {
 secCount++;
 if(secCount===60){
   secCount = 0;
 }
 
 //seconds handler
 if(secCount<10){
   sec.innerText = '0' + secCount;
 }else{
 sec.innerText = secCount;
 }
 
 //minute handler
 if(secCount==0){
   minCount++;
   if(minCount===60){
     mhpass = minCount;
     minCount=0;
   }
   if(minCount<10){
     min.innerText = '0'+ minCount;
   }else{
    min.innerText =  minCount;
   }
 }
 
 //hour handler
 if(mhpass===60){
   if(hourCount == 12){
     hourCount = 1;
     mhpass= 0;
     if(amPm.innerText=='AM'){
     amPm.innerText = 'PM'
     }else{
       amPm.innerText = 'AM';
     }
   }else{
   hourCount++;
   }
   hour.innerText = hourCount;
 }
}