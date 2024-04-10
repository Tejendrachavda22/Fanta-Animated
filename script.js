function loco()
{
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

}

loco();


function move1to2(){
  var tl = gsap.timeline({
    scrollTrigger : {
      trigger : ".page2",
      scroller : ".main",
      start : "0% 95%",
      end : "40% 40%",
      scrub : true,
    }
  })
  
tl.to(".page2",{
  backgroundColor : 'rgb(173, 80, 80)'
},"1to2")

  tl.to("#fanta",{
    x: `-130%`,
    y : `200%`,
  },'1to2')
  
  tl.to("#orange",{
    x: `-300%`,
    y: `400%`,
    rotate : '290',
    width : `20vh`
  },'1to2')
  
  tl.to("#orange2",{
    x: `400%`,
    y : `370%`,
    height : `20vh`,
    width : `20vh`
  },'1to2')
}

move1to2();


function move2to3()
{
  var tl = gsap.timeline({
    scrollTrigger : {
      trigger : ".page3",
      scroller : ".main",
      start : `-10% 60%`,
      end : "50% 50%",
      scrub : true,
    }
  })

  tl.to("#fanta",{
    x: `0`,
    y: `458%`,
    height : `40vh`
  },'2to3')

  tl.from("#coco",{
    x: `-50%`,
    rotate : `-20deg`,
    scale : 0
  },`2to3`)

  tl.from("#papsi",{
    x: `50%`,
    scale : 0,
    rotate : `20deg`
  },'2to3')
}

move2to3();

function page1anim()
{

  var tl = gsap.timeline(); 
    
    gsap.from("nav",{
      opacity : 0,
      duration : 2,
    })

    tl.from("h1",{
      top:`40%`,
      scale : 0,
      duration :2,
      opacity :0,
      ease : Expo
    })

    tl.from(".leaf2,.leaf",{
      scale : 0,
      opacity:0
    })
}

page1anim();