// navbar toggle
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// parallax effect

document.querySelector('.home').onmousemove = (d) =>{

    let x = (window.innerWidth - d.pageX * 2) / 90;
    let y = (window.innerHeight - d.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
} 

// faq
let btn = document.getElementsByClassName('btn');

var i;

for(i = 0; i< btn.length; i++){
    btn[i].addEventListener("click", function(){
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block'){
            panel.style.display = 'none';
        }else{
            panel.style.display = 'block';
        }
    });
}