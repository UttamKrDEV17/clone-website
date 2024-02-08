const locoscroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    mobile: {
      smooth: true,  
    },
});

function videoanimation(){
    var videocon = document.querySelector('#video-container');
    var playbtn = document.querySelector('#play');


videocon.addEventListener("mouseenter",()=>{
    gsap.to(playbtn,{
        scale: 1,
        opacity: 1,
    })
});

videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale: 0,
        opacity: 0,
    })
});

videocon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y,
    })
});
};
function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity: 0,
        delay:0.5,
        duration:0.5,
        stagger: 0.4,
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity: 0,
        delay:1.2,
        duration:0.3,
    })
}


videoanimation();
loadinganimation();

