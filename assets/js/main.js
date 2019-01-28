// Icard class
class Icard {
  constructor(name, age, gender, dob, bg) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.dob = dob;
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
  const dob = document.querySelector("#dob");
  const bloodGroup = document.querySelector("#blood_group");

  // value of the input fields
  let nameValue = name.value;
  let ageValue = age.value;
  let genderValue = gender.value;
  let dobValue = dob.value;
  let bgValue = bloodGroup.value;

  // check the values are not blank
  if (
    nameValue !== "" &&
    ageValue !== "" &&
    genderValue !== "null" &&
    dobValue !== "" &&
    bgValue !== "null"
  ) {
    // create a new object from the Icard class
    const newCard = new Icard(
      nameValue,
      ageValue,
      genderValue,
      dobValue,
      bgValue
    );

    // create an div with #card and ul in the dom
    const cardDiv = document.createElement("div");
    const ul = document.createElement("ul");

    // add attributes
    cardDiv.setAttribute("id", "card");
    ul.className = "icard";

    // for-in loop in newCard object
    for (item in newCard) {
      // create li and delete button in the dom
      const li = document.createElement("li");

      // each item in the object
      li.innerHTML = newCard[item];

      // append to the ul
      ul.appendChild(li);
    }

    // append ul > #card > .icard-list
    icardList.appendChild(cardDiv);
    cardDiv.appendChild(ul);

    // create the delete button with text and #delete
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete_card");
    deleteBtn.innerHTML = "Delete";

    // append to the #card
    cardDiv.appendChild(deleteBtn);

    // add an event listener to the deleteBtn
    deleteBtn.addEventListener("click", deleteCard);

    // make the input fields blank
    name.value = "";
    age.value = "";
    gender.value = "null";
    dob.value = "";
    bloodGroup.value = "null";
  } else {
    alert("Please complete the form!");
  }
}

// deleteCard function
function deleteCard() {
  if (confirm("Are you want to delete?")) {
    this.parentElement.remove();
  }
}
