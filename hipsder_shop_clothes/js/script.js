"use strict";var tl_img=gsap.timeline({ease:"Power1.easeInOut"}).to(".men .img-overlay",{duration:1,y:"100%"}).to(".women .img-overlay",{duration:1,y:"100%"},"-=.7").from(".img img",{opacity:0,duration:1,scale:1.2,stagger:.2}).from(".text h1",{opacity:0,duration:1,y:50}).from(".text h5",{opacity:0,duration:1,y:50},"-=.5").to(".content",{y:"75px"}),tl_header=gsap.timeline({ease:"Power1.easeInOut"}).from(".header",{delay:4.5,y:-75}).from(".header .logo",{duration:1,y:-75}).from(".header .menu li",{duration:1,y:-75,stagger:.1},"-=.4");
//# sourceMappingURL=script.js.map