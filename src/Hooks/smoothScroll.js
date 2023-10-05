import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";

const useSmoothScroll = (start, root) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (!start) return;


        const container = document.querySelector(root);

        const locoScroll = new LocomotiveScroll({
            el: container,
            smooth: true,
            multiplier: 1,
            class: "is-reveal"
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(container, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },

            pinType: document.querySelector(root).style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", ()=>{
            locoScroll.update();
        });
        ScrollTrigger.defaults({ scroller: container });

    }, [start, root]);
}

export default useSmoothScroll;