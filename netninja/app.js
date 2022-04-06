// create new vue app
const app = Vue.createApp({
  // template
  // template: "<h2>im template</h2>",

  // data
  data() {
    return {
      url: "http://www.google.com",
      showBooks: true,
      title: "the final empire",
      author: "Daigo Saito",
      age: 43,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "daigo saito",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "chris forsberg",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "chelsea denofa",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
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

    toogleFav(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app"); // mount to the html part
