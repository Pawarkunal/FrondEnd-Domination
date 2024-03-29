function locoAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

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
    delay:0,
    duration:0
})

tl.from("#page1",{
    delay: 0.5,
    y: 1000,
    duration: 0.8,
    ease: "power4"
})
tl.to("#loader",{
    display: "none"
})
tl.from("#nav",{
    opacity:0,
    duration:0.5
})
tl.from("#hero-border, .hero h1",{
    y:150,
    stagger:0.1
})
tl.from("#hero-container",{
    opacity:0
},"-=1.2")
}

function cursorAnimation(){
    let mouseFollow = document.querySelector("Shery.mouseFollower");
    let video = document.querySelector("#video-container video");
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .1,
      }); 
    Shery.makeMagnet("#nav-part2 h4");
    let videoContainer = document.querySelector("#video-container");
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(mouseFollow,{
                opacity:0
            })
            gsap.to("#video-cursor",{
                x:dets.x - 1200,
                y:dets.y - 100
            })
        })
    })
    
    videoContainer.addEventListener("mouseleave", function(){
        gsap.to("#video-cursor",{
            left: "67%",
            top: "-18%"
        })
    })

    let flag = 0;
    videoContainer.addEventListener("click",function(){
        if(flag == 0){
            video.play();
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML  = `<i class="ri-pause-line"></i>`;
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag = 1
        }else{
            video.pause();
            video.style.opacity = 0
            document.querySelector("#video-cursor").innerHTML  = `<i class="ri-play-fill"></i>`;
            gsap.to("#video-cursor",{
                scale:1
            })
            flag = 0
        }
    })
}


function sheryAnimation(){
    Shery.imageEffect(".image-line1 , .image-line2",{
        style: 5,
        config: {"a":{"value":2.06,"range":[0,30]},"b":{"value":0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8163449233043133},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}


loaderAnimation()
cursorAnimation()
locoAnimation()
sheryAnimation() 

let flag = document.querySelector("#flag");
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x: dets.x,
        y: dets.y
    })
})

let heroHover = document.querySelector("#hero-hover");
heroHover.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity: 1
    })
})
heroHover.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity: 0
    })
})
