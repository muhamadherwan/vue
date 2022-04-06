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
  },
});
app.mount("#app"); // mount to the html part
