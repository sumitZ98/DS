let cursor = document.querySelector('#cursor')
let cursorBlur = document.querySelector('#cursor-blur');
const mouse = document.addEventListener('mousemove', (details) =>{
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    cursorBlur.style.left = details.x - 200 + "px";
    cursorBlur.style.top = details.y - 200 + "px";
});


gsap.to("#nav", {
    backgroundColor : "#000000",
    opacity: "0.8",
    duration: 0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})

gsap.to('#main', {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger : "#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end: "top -60%",
        scrub:2
    }
})
