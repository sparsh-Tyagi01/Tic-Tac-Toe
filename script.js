let x = document.querySelector(".mode");
let z = document.querySelector("body");
let p = document.querySelector("h1");
let a = document.getElementById("item1");
let b = document.getElementById("item2");
let c = document.getElementById("item3");
let d = document.getElementById("item4");
let e = document.getElementById("item5");
let f = document.getElementById("item6");
let g = document.getElementById("item7");
let h = document.getElementById("item8");
let i = document.getElementById("item9");
let y = "one";
x.addEventListener("click",function(){
    if(y=="one"){
    x.innerHTML= "<h2>Light mode</h2>"
    z.style.backgroundColor="black"
    p.style.color="white"
    a.style.backgroundColor="white"
    b.style.backgroundColor="white"
    c.style.backgroundColor="white"
    d.style.backgroundColor="white"
    e.style.backgroundColor="white"
    f.style.backgroundColor="white"
    g.style.backgroundColor="white"
    h.style.backgroundColor="white"
    i.style.backgroundColor="white"
    y = "two"
    }else{
        x.innerHTML= "<h2>Dark mode</h2>"
        z.style.backgroundColor="white"
        p.style.color="black"
        a.style.backgroundColor="black"
        b.style.backgroundColor="black"
        c.style.backgroundColor="black"
        d.style.backgroundColor="black"
        e.style.backgroundColor="black"
        f.style.backgroundColor="black"
        g.style.backgroundColor="black"
        h.style.backgroundColor="black"
        i.style.backgroundColor="black"
        y = "one"
    }
});
let box = document.getElementsByClassName("item");
let number = 1;
a.addEventListener("click",function(){
    if(number==1){
        a.innerHTML="&#10060;"
        number = 2;
    }else{
        a.innerHTML="&#10160;"
        number = 1;
    }
})
b.addEventListener("click",function(){
    if(number==1){
        b.innerHTML="&#10060;"
        number = 2;
    }else{
        b.innerHTML="&#10160;"
        number = 1;
    }
})
c.addEventListener("click",function(){
    if(number==1){
        c.innerHTML="&#10060;"
        number = 2;
    }else{
        c.innerHTML="&#10160;"
        number = 1;
    }
})
d.addEventListener("click",function(){
    if(number==1){
        d.innerHTML="&#10060;"
        number = 2;
    }else{
        d.innerHTML="&#10160;"
        number = 1;
    }
})
e.addEventListener("click",function(){
    if(number==1){
        e.innerHTML="&#10060;"
        number = 2;
    }else{
        e.innerHTML="&#10160;"
        number = 1;
    }
})
f.addEventListener("click",function(){
    if(number==1){
        f.innerHTML="&#10060;"
        number = 2;
    }else{
        f.innerHTML="&#10160;"
        number = 1;
    }
})
g.addEventListener("click",function(){
    if(number==1){
        g.innerHTML="&#10060;"
        number = 2;
    }else{
        g.innerHTML="&#10160;"
        number = 1;
    }
})
h.addEventListener("click",function(){
    if(number==1){
        h.innerHTML="&#10060;"
        number = 2;
    }else{
        h.innerHTML="&#10160;"
        number = 1;
    }
})
i.addEventListener("click",function(){
    if(number==1){
        i.innerHTML="&#10060;"
        number = 2;
    }else{
        i.innerHTML="&#10160;"
        number = 1;
    }
})
