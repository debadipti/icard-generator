// Icard class
class Icard {
  constructor(name, age, gender, bg) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.bg = bg;
  }
}

// dom reference of form and icard list
const form = document.querySelector("#form");
const icardList = document.querySelector(".icard-list");

// form submit event
form.addEventListener("submit", createNewCard);

// createNewCard function
function createNewCard(e) {
  // prevent default submit event
  e.preventDefault();

  // dom references
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  const gender = document.querySelector("#gender");
  const bloodGroup = document.querySelector("#blood_group");

  // value of the input fields
  let nameValue = name.value;
  let ageValue = age.value;
  let genderValue = gender.value;
  let bgValue = bloodGroup.value;

  // check the values are not blank
  if (
    nameValue !== "" &&
    ageValue !== "" &&
    genderValue !== "null" &&
    bgValue !== "null"
  ) {
    // create a new object from the Icard class
    const newCard = new Icard(nameValue, ageValue, genderValue, bgValue);

    // create an ul in the dom
    const ul = document.createElement("ul");

    // add class name
    ul.className = "icard";

    // for in loop
    for (item in newCard) {
      const li = document.createElement("li");
      li.innerHTML = newCard[item];
      ul.appendChild(li);
    }

    // append to the icard-list div
    icardList.appendChild(ul);

    // make the input fields blank
    name.value = "";
    age.value = "";
    gender.value = "null";
    bloodGroup.value = "null";
  } else {
    alert("Please complete the form!");
  }
}
