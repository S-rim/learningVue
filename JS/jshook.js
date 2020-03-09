function addEventListener(el,done) {
    el.addEventListener("animationed", function() {
        el.style="";
        done();
    });
}

new Vue({
    el:'#app',
    data(){
        return{
            title : '전쟁 그리고 평화',
            description : '설명',
            show : false
        }
    },
    methods: {
        enter(el, done) {
          console.log("enter");
          addEventListener(el,done);
          el.style.animationName = "bounceIn"
          el.style.animationDuration = "1.5s";
        },
        leave(el, done) {
          console.log("leave");
          addEventListener(el,done);
          el.style.animationName = "bounceIn"
          el.style.animationDuration = "1.5s";
          el.style.animationDirection="reverse";
        },
        beforeEnter(el) {
            console.log("before enter");
        },
        afterEnter(el) {
            console.log("after enter");
        },
        enterCancelled(el) {
            console.log("enter cancelled");
        },
        beforeLeave(el) {
            console.log("before leave");
        },
        afterLeave(el) {
            console.log("after leave");
        },
        leaveCancelled(el) {
            console.log("leave cancelled");
        }
      }
  
    });