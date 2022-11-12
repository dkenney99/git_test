const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation

  const username = form.username.value;
  console.log(usernamePattern.test(username));

  if (usernamePattern.test(username)) {
    feedback.textContent = "that username is valid";
  } else {
    feedback.textContent =
      "username must be letter only between 6-12 characters long";
  }
});

// live feedback

form.username.addEventListener("keyup", (e) => {
  console.log(e);
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
