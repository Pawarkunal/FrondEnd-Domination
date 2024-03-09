function loaderAnimation(){
    let tl = gsap.timeline();

tl.from(".line h1",{
    y: 200,
    duration: 0.8,
    stagger: 0.2
})
tl.from("#loader #line-counter, .line span, #loader #loader-footer",{
    duration: 0.8,
    opacity: 0,
    onStart: function(){
        let num = document.querySelector("#loader #counter-num");
    let count = 0;
    let stopper = setInterval(function(){
    if(count === 100){
        clearInterval(stopper);
    }
    num.textContent = count;
    count++;
    },30)
    }
});

tl.to("#loader",{
    opacity: 0,
    delay:3,
    duration:1
})

tl.from("#page1",{
    delay: 0.5,
    y: 1000,
    duration: 0.8,
    ease: "power4"
})
tl.from("#nav",{
    opacity:0,
    duration:0.2
})
tl.from(".hero h1",{
    y:120,
    stagger:0.1
})
tl.to("#loader",{
    display: "none"
})

}

function cursorAnimation(){
    document.addEventListener("mousemove",function(point){
        gsap.to("#crsr",{
            left:point.x,
            top:point.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

// loaderAnimation()
// cursorAnimation()
