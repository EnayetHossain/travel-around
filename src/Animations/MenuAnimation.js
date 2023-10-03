import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const MenuAnimation = (currentState, )=>{
    gsap.registerPlugin(CSSRulePlugin);

    const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power4.out",}});
    const beforeElement = CSSRulePlugin.getRule(".menu-title:before");

    if(currentState){
        tl.to(".main-menu", {
            opacity: 1
        }).to(".menu-title h1", {
            y: 0
        }).to(beforeElement, {
            width: "100%"
        }).to(".about-us-container", {
            opacity: 1,
            y: 0,
        }, "once").to(".contact-us-container", {
            opacity: 1,
            y: 0,
        }, "once")
    }else{
        tl.to(".contact-us-container", {
            y: "10%",
            opacity: 0
        }, "once").to(".about-us-container", {
            y: "10%",
            opacity: 0
        }, "once").to(beforeElement, {
            width: "0%"
        }).to(".menu-title h1", {
            y: "100%"
        }).to(".main-menu", {
            opacity: 0
        })
    }
}

export default MenuAnimation;