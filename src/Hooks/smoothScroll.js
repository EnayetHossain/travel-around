import { useEffect } from "react";
import lerp from "../utils/LinearInterpolation";
import setTransform from "../utils/setTransform";
import isTouchDevice from "../utils/touchDevice";

const useSmoothScroll = (root, ease) =>{
    useEffect(()=>{
        let current = 0;
        let target = 0;
    
        // let windowWidth;
        let rootHeight;
    
        let container = document.querySelector(root);

        const smoothScroll = ()=>{
            current = lerp(current, target, ease);
            current = parseFloat(current.toFixed(2));
            target = window.scrollY;
            setTransform(container, `translateY(${-current}px)`);
            requestAnimationFrame(smoothScroll)
        }

        const setAnimation = ()=>{
            // windowWidth = window.innerWidth;
            rootHeight = container.getBoundingClientRect().height;
            document.body.style.height = `${rootHeight}px`;
            smoothScroll();
        }

        // avoid smooth scrolling in touch devices
        const isTouch = isTouchDevice();

        if(!isTouch){
            setAnimation();
        }


    }, [root, ease]);

    return null
}

export default useSmoothScroll;