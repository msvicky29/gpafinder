const mark1=document.getElementsByName('m1');
const mark2=document.getElementsByName('m2');
const mark3=document.getElementsByName('m3');
const mark4=document.getElementsByName('m4');
const mark5=document.getElementsByName('m5');
const mark6=document.getElementsByName('m6');
const mark7=document.getElementsByName('m7');

var m1,m2,m3,m4,m5,m6,m7;
function display(){
for( var i=0;i<mark1.length;i++){
    if(mark1[i].checked)
        m1 = finder(mark1[i].value);
}
for( var i=0;i<mark2.length;i++){
    if(mark2[i].checked)
    m2 = finder(mark2[i].value);
}
for( var i=0;i<mark3.length;i++){
    if(mark3[i].checked)
    m3 = finder(mark3[i].value);
}
for( var i=0;i<mark4.length;i++){
    if(mark4[i].checked)
    m4 = finder(mark4[i].value);
}
for( var i=0;i<mark5.length;i++){
    if(mark5[i].checked)
    m5 = finder(mark5[i].value);
    
}
for( var i=0;i<mark6.length;i++){
    if(mark6[i].checked)
    m6= finder(mark6[i].value);
}
for( var i=0;i<mark7.length;i++){
    if(mark7[i].checked)
    m7= finder(mark7[i].value);
}

if(m1==null || m2==null || m3==null || m4==null || m5==null || m6==null || m7==null){
    alert("Please,Select All Subject Grade!!!");
}
else{
var credits=(m1*4)+(m2*4)+(m3*3)+(m4*3)+(m5*3)+(m6*3)+(m7*3);
var total=credits/23;
document.getElementById("result").innerHTML="Your GPA is:<br>"+total.toPrecision(3);
document.getElementById("name").innerText="Coded by Vigneswaraa MS";
document.getElementById("cs").innerText="CSE-Department";
}

}


// ==========================================
function finder(x){
    var y;
    if(x=="10"){
       y= 10;
   }
   if(x=="9"){
    y= 9;
   }
   if(x=="8"){
    y= 8;
   }
   if(x=="7"){
    y= 7;
}
if(x=="6"){
    y= 6;
}
if(x=="5"){
    y=5;
}
if(x=="0"){
    y= 0;
}
return y;
}
// ========================
var loader = document.getElementById("spinner");
window.addEventListener("load",function(){
    loader.style.display="none";
})
// =======================
function reset(){
    for(var i=0;i<mark1.length;i++){
        mark1[i].checked=false;
    }
    for( var i=0;i<mark2.length;i++){
        mark2[i].checked=false;
    }
    for( var i=0;i<mark3.length;i++){
        mark3[i].checked=false;
    }
    for( var i=0;i<mark4.length;i++){
        mark4[i].checked=false;
    }
    for( var i=0;i<mark5.length;i++){
        mark5[i].checked=false;
    }
    for( var i=0;i<mark6.length;i++){
        mark6[i].checked=false;
    }
    for( var i=0;i<mark7.length;i++){
        mark7[i].checked=false;
    }
    
    
    document.getElementById("result").innerHTML="";
document.getElementById("name").innerText="";
document.getElementById("cs").innerText="";
var m1=m2=m3=m4=m5=m6=m7=null;
}