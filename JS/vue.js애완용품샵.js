const APP_LOG_LIFECYCLE_EVENTS = true;

let webStore = new Vue({
    el : '#app',
    data : {
        showProduct : true,
        sitename : 'Vue.js 애완용품샵',
        order : {
          firstName : '',
          lastName : '',
          address : '',
          city : '',
          zip : '',
          state : '',
          method : '자택',
          gift : '선물로 보내기',
          sendGift : '선물로 보내기',
          dontSendGitf : '선물로 보내지 않기',
          business : '직장 주소',
          home : '자택 주소'
        },
        states : {
          AL : '알라바마',
          AR : '애리조나',
          CA : '캘리포니아',
          NV : '네바다'
        },
        product : {
            id : 1001,
            title : "고양이 사료, 25파운드",
            description : "당신의 고양이를 위한 <em>거부할 수 없는,</em>" + " 유기농 25파운드 사료입니다.",
            price : 2000,
            image : "./../assets/img/1Icon.PNG",
            availableInventory : 5         
        },
        cart : []
    },
    computed : {
      fullName : function() {
        return [this.firstName, this.lastName].join('');
      },
      cartItemCount : function() {
        return this.cart.length || '';
      },
      canAddToCart : function() {
        return this.product.availableInventory > this.cartItemCount;
      }
    },
    filters : {
        formatPrice : function(price) {
            if(!parseInt(price)) {return " "};
            if(price > 99999)
            {
                let priceString = (price/100).toFixed(2);
                let priceArray = priceString.split("").reverse();
                let index = 3;
                while(priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index+=4;
                }
                return "$"+priceArray.reverse().join("");
            }
            else 
            {
                return "$"+(price/100).toFixed(2);
            }
        }
    },
    methods : {
      addToCart : function() {
        this.cart.push(this.product.id);
      },
      showCheckOut() {
        this.showProduct = this.showProduct ? false : true;
      },
      submitForm : function() {
        alert("제출 완료!");
      }
    },
        beforeCreate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("beforeCreate");
        }
      },
      created: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("created");
        }
      },
      beforeMount: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("beforeMount");
        }
      },
      mounted: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("mounted");
        }
      },
      beforeUpdate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("beforeUpdate");
        }
      },
      updated: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("updated");
        }
      },
      beforeDestroy: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("beforeDestroy ");
        }
      },
      destroyed: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
          console.log("destroyed");
        }
      }
});