(function () {
    var input = document.querySelector("input");
    var btn1 = document.querySelector("#one");
    var btn2 = document.querySelector("#two");
    var btn3 = document.querySelector("#three");
    var s1 = document.querySelector("#sone");
    var s2 = document.querySelector("#stwo");
    console.log("hi");
    var count = 0;
    s1.innerHTML = count.toString();
    btn1.addEventListener("click", function () {
        count += 1;
        s1.innerHTML = count.toString();
        if (count === Number(input.value)) {
            btn1.disabled = true;
            btn2.disabled = true;
            s1.style.color = "green";
            s2.style.color = "red";
        }
    });
    var count2 = 0;
    s2.innerHTML = count2.toString();
    btn2.addEventListener("click", function () {
        count2 += 1;
        s2.innerHTML = count2.toString();
        if (count2 === Number(input.value)) {
            btn2.disabled = true;
            btn1.disabled = true;
            s2.style.color = "green";
            s1.style.color = "red";
        }
    });
    btn3.addEventListener("click", function () {
        s2.innerHTML = "0";
        s1.innerHTML = "0";
        btn2.disabled = false;
        btn1.disabled = false;
        s2.style.color = "black";
        s1.style.color = "black";
        count = 0;
        count2 = 0;
    });
})();
