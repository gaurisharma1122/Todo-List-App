//if user adds a note, add it to the local storage
const addBtn = document.getElementById('addBtn');
const notesContainer= document.getElementById('notes');
const search= document.getElementById('searchTxt');
showNotes();


addBtn.addEventListener('click', e=>{
    const addTxt= document.getElementById('addTxt');
    const notes= localStorage.getItem('notes');
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.push(addTxt.value.trim());
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value= "";
    console.log(notesObj);
    showNotes();
});

function showNotes(){
    
    const notes= localStorage.getItem('notes');
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesContainer.innerHTML= "";
    notesObj.forEach((element, index)=>{
        const html= `
            <div class="note-card my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Todo ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" id="${index}" onclick= deleteNote(this.id) class="btn btn-primary delete-btn">Delete Note</a>
                </div>
            </div>
    `;
    notesContainer.innerHTML+= html;
    });
};


//Function to delete a note
function deleteNote(index){
    console.log('I am deleting Note no ', index);
    const notes= localStorage.getItem('notes');
    if(notes==null){
        notesObj= [];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
    console.log(notesObj);
}

//Searching
search.addEventListener('input', ()=>{
    const inputVal= search.value;
    let noteCard= document.getElementsByClassName('note-card');
    Array.from(noteCard).forEach((element, index)=>{
        let cardTxt= element.querySelector('p').textContent;
        if(cardTxt.includes(inputVal)){
            element.style.display= 'block';
        }
        else{
            element.style.display= 'none';
        }
    });
});




