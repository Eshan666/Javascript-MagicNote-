
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", insertNote);

function insertNote() {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notesObj);
  showNotes();
};

function showNotes() {
  let note = localStorage.getItem("notes");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }
  let html = "";
  let i = 0;
  if (notesObj.length == 0) {
    let notesElm = document.getElementById("notes");
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;

  }
  else {

    while (i < notesObj.length) {
      let element = notesObj[i];
      html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Note ${i + 1}</h5>
              <p class="card-text"> ${element}</p>
              <button id="${i}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
      </div>`;
      i++;
      let notesElm = document.getElementById("notes");

      notesElm.innerHTML = html;
    }
  }
}

function deleteNote(index) {
  console.log("I am deleting this note");
  let note = localStorage.getItem("notes");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

var search = document.getElementById('searchTxt');

search.addEventListener("input", function () {
  let inputVal = search.value;
  let notecards = document.getElementsByClassName("noteCard");

  Array.from(notecards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  });

});


