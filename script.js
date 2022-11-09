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

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("dkenney@sdsu.edu", "Daniel");
var userTwo = new User("yoshi@hotmail.com", "Yoshi");
var admin = new Admin("admin@yahoo.com", "Kenney");

var users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);
userOne.deleteUser(userTwo);

// the "new" keyword
// - creates a new empty object
// - sets the value of "this" to be the new empty object
// - calls the constructor method
