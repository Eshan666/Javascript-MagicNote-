console.log("hello world");
showNote();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addNote);

function addNote(e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }

    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);


}

addBtn.addEventListener("click", showNote);

function showNote(e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`
    });

    let noteElem = document.getElementById("notes");

    if (notesObj.length != 0) {
        noteElem.innerHTML = html;
    }
    else {
        noteElem.innerHTML = `Add your text here`;
    }
}



function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNote();

}


let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})





/*



let search = document.getElementById("searchtxt");

search.addEventListener("input", function () {
    let inputVal = search.value;
    let cards = document.getElementsByClassName("card");

    Array.from(cards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.include(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })

})
*/

