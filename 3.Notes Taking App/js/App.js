const addBtn = document.querySelector("#addBtn")

const main = document.querySelector("#main")

// adding a note when the add note button is clicked.

addBtn.addEventListener(
    "click",
    function() {
        addNote();
    }
)


// Save note function
const saveNotes = () => {
    const notes = document.querySelectorAll (".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    localStorage.setItem("notes",JSON.stringify(data)) // save the note to local storage
}


// add note fuction
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="toolbar">
        <i class="save far fa-save"></i>
        <i class="trash fas fa-trash-alt"></i>
    </div>
    <textarea>${text}</textarea>
    `;


    // in the toolbar that perticular note there is a trash button when it is clicked the note gets removed.
    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
            saveNotes()
        }
    )

    // in the toolbar that perticular note there is a save botton when it is clicked the note gets saved.
    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    main.appendChild(note); // inside the main ID div this note div will be added.
    saveNotes()
}


// Note that have beed added to local storage is being retracted.
(
    function() {
        const localNotes = JSON.parse(localStorage.getItem("notes"));
        localNotes.forEach(
            (localNotes) => {
                addNote(localNotes)
            }
        )
        if (localNotes.length === 0) {
            localStorage.removeItem("notes")
            addNote()
        }
        
    }
)()
