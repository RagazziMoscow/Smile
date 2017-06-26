    var menu = new Vue({
      el: "#header",
      data: {
        seen: false
      },
      methods: {
        toggleMenu: function() {
          this.seen = !(this.seen);
        }
      }
    });