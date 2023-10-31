// lomotive scroll;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// graps to animate
gsap.from(".nlink",{
    stagger: .2,
    y:10,
    duration:1,
    ease: Power2,
    opacity:0
})
Shery.textAnimate("#heading h1" , {
    style:1,
    y:10,
    delay:0.1,

    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier:0.1,

  });

  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    opoacity:0,
    ease:Expo,
    duration:1,
  })

  Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":24.79,"range":[0,100]},"uFrequencyY":{"value":14.05,"range":[0,100]},"uFrequencyZ":{"value":10.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":22.35},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500050511596813},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
  })

  Shery.imageEffect(".imgeff img","#susimagewrapper img",{
    style:6,
    config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":3.31,"range":[0,10]},"scale":{"value":55.37,"range":[0,100]},"speed":{"value":0.53,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666141519164},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
   
  })

  gsap.from("#imgntext ",{
    y:70,
    opacity:0,
    duration:2,
    ease:Expo.easenInOut
  })
  
  Shery.imageEffect("#bimg img",{
    style:5,
    debug:true,
    gooey:true,
  });