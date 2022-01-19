var btn = document.querySelector(".btn");
btn.innerHTML = 0;

btn.onclick = () => {
    btn.innerHTML = Number(btn.innerHTML) + 1;
};




