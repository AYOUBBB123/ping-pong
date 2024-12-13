(() => {
    const input = document.querySelector("input") as HTMLInputElement;
    const btn1 = document.querySelector("#one") as HTMLButtonElement;
    const btn2 = document.querySelector("#two") as HTMLButtonElement;
    const btn3 = document.querySelector("#three") as HTMLButtonElement;
    const s1 = document.querySelector("#sone") as HTMLElement;
    const s2 = document.querySelector("#stwo") as HTMLElement;
    console.log("hi");

    let count:any  = 0;
    s1.innerHTML = count.toString();

    btn1.addEventListener("click", function ():void {
        count += 1;
        s1.innerHTML = count.toString();

        if (count === Number(input.value)) {
            btn1.disabled = true;
            btn2.disabled = true;
            s1.style.color = "green";
            s2.style.color = "red";
        }
    });

    let count2:any = 0;
    s2.innerHTML = count2.toString();

    btn2.addEventListener("click", function ():void  {
        count2 += 1;
        s2.innerHTML = count2.toString();

        if (count2 === Number(input.value)) {
            btn2.disabled = true;
            btn1.disabled = true;
            s2.style.color = "green";
            s1.style.color = "red";
        }
    });

    btn3.addEventListener("click", function ():void  {
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
