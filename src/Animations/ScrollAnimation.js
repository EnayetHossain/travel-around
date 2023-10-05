import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollAnimation = (titles, pseudoElement, description, trigger) => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
    
    const beforeElement = CSSRulePlugin.getRule(pseudoElement);

    const tl = gsap.timeline({defaults: {duration: 0.5, ease: "circ.out"}});

    tl.fromTo(titles, {
        y: "100%",
    }, {
        y: 0,
        stagger: 0.2
    }).fromTo(beforeElement, {
        width: "0%"
    }, {
        width: "100%"
    }, '-=0.2').fromTo(description, {
        y: "10%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    }, "-=0.4")

    ScrollTrigger.create({
        animation: tl,
        trigger: trigger,
        toggleActions: "play pause resume reverse",
        markers: false,
        start: "top 60%"
    })
}

export default scrollAnimation;