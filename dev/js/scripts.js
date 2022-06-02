// import { gsap } from "gsap";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { CustomWiggle, CustomEase } from "gsap/all";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(Flip, MotionPathPlugin, DrawSVGPlugin, Physics2DPlugin, CustomWiggle, CustomEase);

function body(){

    CustomWiggle.create("tailWiggle", {wiggles: 8});
    let tl = gsap.timeline({repeat: -1});
    tl.to(".letter", {drawSVG:"0%", duration: 0, fillOpacity: 0});
    tl.to("#wordOutline", {duration: 0, opacity: 0})
    tl.to("#wordOutline", {duration: 5, opacity: 1}, 'animationBegin')
    tl.to(".letter", {drawSVG:"100%", duration: 3, delay: 2}, 'animationBegin');
    tl.to("#wholeSvg", {backgroundColor: "#0B4266", duration: 3, delay:2}, 'animationBegin')
    tl.to(".letter", {fillOpacity: 1, duration: 2, delay: 3}, 'animationBegin')
    return tl; 

}

body();