let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slider = document.querySelector(".slide");
let image = document.querySelectorAll(".image");

let i = 1;

for(let i=0;i<image.length;i++){
    let div = document.createElement('div');
    div.classList.add ('circle');
    document.querySelector('.gol').appendChild(div)
}

let buttons = document.querySelectorAll('.circle');

buttons[0].style.backgroundColor ='black';

const reset =()=>{
    buttons.forEach((items)=>{
        items.style.backgroundColor='transparent'
    })
}

buttons.forEach((items)=>{
    items.addEventListener('click',()=>{
        forward();
        reset();
        items.style.backgroundColor='black'
    });

})

function change (){
    reset();
    buttons[i-1].style.backgroundColor='black';
}

function forward(){
     if (i < image.length) {
    slider.style.transform = `translateX(-${i * 100}%)`;

    i++;
  } else {
    slider.style.transform = `translateX(0px)`;

    i = 1;
  }
}

right.addEventListener("click", ()=>{
 forward();
 change()
});

function back(){
      if (i > 1) {
    slider.style.transform = `translateX(-${(i - 2) * 100}%)`;

    i--;
  } else {
    slider.style.transform = `translateX(-${(image.length - 1) * 100}%)`;

    i = 5;
  }
}

left.addEventListener("click", ()=>{
    back();
    change();
});


const slideshow= ()=>{
  start = setInterval(() => {
    forward();
change()
  }, 3000);

}

function stopslide(){
    clearInterval(start);
}

right.addEventListener('mouseover',stopslide);
right.addEventListener('mouseout',slideshow);
left.addEventListener('mouseover',stopslide);
left.addEventListener('mouseout',slideshow);
buttons.forEach((items)=>{
    items.addEventListener('mouseover',stopslide);
})
buttons.forEach((items)=>{
    items.addEventListener('mouseout',slideshow);
})

slider.addEventListener('mouseover',stopslide);
slider.addEventListener('mouseout',slideshow);

slideshow();