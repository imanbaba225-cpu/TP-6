let div = document.createElement("div");
let p = document.createElement("p");
p.textContent = "Ceci est un paragraphe";
div.appendChild(p);
document.body.appendChild(div);

p.style.backgroundColor="lightblue";
p.style.textAlign="center";

let btn1=document.createElement("button");
btn1.textContent="Modifier texte";
let btn2=document.createElement("button");
btn2.textContent="Reset texte";

document.body.appendChild(btn1);
document.body.appendChild(btn2);

btn1.addEventListener("click", function(){
    p.textContent= "Le texte a été modifié";
});
btn2.addEventListener("click", function(){
    p.textContent ="Ceci est un paragraphe";
});