// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     if (read) {
//       return `${title} by ${author}, ${pages}, has been read`;
//     } else {
//       return `${title} by ${author}, ${pages}, has not been read`;
//     }
//   };
// }

const userOne = {
  email: "dkenney@sdsu.edu",
  name: "Daniel",
  login: function () {
    console.log(this.email, "has logged in");
  },
  logout: function () {
    console.log(this.email, "has logged out");
  },
};

console.log(userOne.name);
