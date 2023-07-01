import $ from "jquery";
import { gsap, Power2 } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


$(window).on("load", function() {
  var $loadingWrapper = $(".loading_wrapper"),
    $loadingInnerContent = $(".loading-inner-content");
  $loadingInnerContent.on("mousemove touchmove", function(e) {
    if (e.clientX > $loadingWrapper.width() / 2) {
      gsap.to($loadingWrapper, {
        duration: 2,
        scrollTo: {
          x: "+=175"
        },
        ease: Power2.easeOut
      });
    } else {
      gsap.to($loadingWrapper, {
        duration: 2,
        scrollTo: {
          x: "-=175"
        },
        ease: Power2.easeOut
      });
    }
  });
});
