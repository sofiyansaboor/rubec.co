
var typed = new Typed(".typing", {
    strings: ["RUBEC.CO","Inovative","Futuristic","Crypto Lover","RUBEC.CO"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

window.addEventListener('load', ()=>{
        const preload = document.querySelector('.load');
        preload.classList.add('load-fin');
        preload.style.display = "none";
});
