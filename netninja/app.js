// create new vue app
const app = Vue.createApp({
  // template
  // template: "<h2>im template</h2>",

  // data
  data() {
    return {
      showBooks: true,
      title: "the final empire",
      author: "Daigo Saito",
      age: 43,
      x: 0,
      y: 0,
    };
  },

  // method
  methods: {
    changeTitle(title) {
      //   this.title = "2jz powa";
      this.title = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },

    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount("#app"); // mount to the html part
