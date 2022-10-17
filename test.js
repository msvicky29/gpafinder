const mathsMark=document.querySelectorAll('input[name=maths]');
const scienceMark=document.querySelectorAll('input[name=science]');
const btn=document.querySelector('#btn');
btn.addEventListener("click",()=>{


let scienceSelect;
for(const scienceM of scienceMark){
    if(scienceM.checked){
        scienceSelect=scienceM.value;
        console.log(scienceSelect);
        break;
    }
}
result.innerTEXT=scienceMark;
});