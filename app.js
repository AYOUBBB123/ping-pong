const input = document.querySelector("input");
const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")
const btn3 = document.querySelector("#three")
const s1 = document.querySelector("#sone")
const s2 = document.querySelector("#stwo")

let count = 0
s1.innerHTML= count
btn1.addEventListener("click",function () {
    count += 1
    s1.innerHTML= count
    if (count == input.value) {
        btn1.disabled = true;
        btn2.disabled = true;
        s1.style.color = "green"
        s2.style.color = "red"

}})


let count2 = 0
s2.innerHTML= count2
btn2.addEventListener("click",function () {
    count2 += 1
    s2.innerHTML= count2
    if (count2 == input.value) {
        btn2.disabled = true;
        btn1.disabled = true;
        s2.style.color = "green"
        s1.style.color = "red"

}})

btn3.addEventListener("click",function () {
        s2.innerHTML= 0
         s1.innerHTML= 0
        btn2.disabled = false;
        btn1.disabled = false;
        s2.style.color = "black"
        s1.style.color = "black"
        count = 0
        count2 = 0


})