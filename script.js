//get reference to the Celcius & Farhenite input field
const Celcius = document.querySelector("#Celcius"),Farhenite = document.querySelector("#Farhenite");
//set focus to the Celcius input field when the page loaded
window.addEventListener("load", ()=>Celcius.focus());
//convert celcius to ferhenite
Celcius.addEventListener("input", ()=> {
    Farhenite.value=((Celcius.value * 9)/ 5+32).toFixed(2);
    //clear farhenite input when celcius input is empty
    if(!Celcius.value) Farhenite.value="";
});
//convert ferhenite to celcius
Farhenite.addEventListener("input", ()=> {
    Celcius.value=(((Farhenite.value - 32)/ 9)* 5).toFixed(2);
    //clear farhenite input when celcius input is empty
    if(!Farhenite.value) Celcius.value="";
});
