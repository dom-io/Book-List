const bookAdd = document.querySelector('.add-to-list');

let nameEl = document.querySelector('#book-name');
let authorEl = document.querySelector('#author');
let pageEl = document.querySelector('#page-num');
let completeEl = document.querySelector('#check');

let i = 0;

let myLibrary = [];

class Book {
  constructor(bookName, author, pageNum, complete) {
    this.bookName = bookName;
    this.author = author;
    this.pageNum = pageNum;
    this.complete = complete;
  }
}

function addToLibrary() {
  if (
    nameEl.value.length === 0 ||
    authorEl.value.length === 0 ||
    pageEl.value.length === 0 ||
    completeEl.value === ''
  ) {
    alert('Fill in the empty fields.');
    return;
  }
  const NewBook = new Book(
    nameEl.value,
    authorEl.value,
    pageEl.value,
    completeEl.value
  );
  myLibrary.push(NewBook);
}

bookAdd.addEventListener('click', () => {
  addToLibrary();
  display();
  newDivs();
  i++;
});

function display() {
  nameEl.value = '';
  authorEl.value = '';
  pageEl.value = '';
  completeEl.value = 'Yes';
}

function newDivs() {
  const bookContainer = document.querySelector('.new-book-divs');
  let newNameDiv = document.createElement('div');
  let newAuthorDiv = document.createElement('div');
  let newPageDiv = document.createElement('div');
  let newCompleteBtn = document.createElement('BUTTON');
  let newDeleteBtn = document.createElement('BUTTON');

  newNameDiv.classList = `name-div-${i}`;
  newAuthorDiv.classList = `author-div-${i}`;
  newPageDiv.classList = `page-div-${i}`;
  newCompleteBtn.classList = `complete-btn-${i}`;
  newDeleteBtn.classList = `delete-btn-${i}`;

  let nameText = document.createTextNode(myLibrary[i].bookName);
  newNameDiv.appendChild(nameText);
  bookContainer.appendChild(newNameDiv);

  let authorText = document.createTextNode(myLibrary[i].author);
  newAuthorDiv.appendChild(authorText);
  bookContainer.appendChild(newAuthorDiv);

  let pageNumText = document.createTextNode(myLibrary[i].pageNum);
  newPageDiv.appendChild(pageNumText);
  bookContainer.appendChild(newPageDiv);

  let completeBtnText = document.createTextNode(myLibrary[i].complete);
  newCompleteBtn.appendChild(completeBtnText);
  bookContainer.appendChild(newCompleteBtn);

  let deleteBtnText = document.createTextNode('Delete');
  newDeleteBtn.appendChild(deleteBtnText);
  bookContainer.appendChild(newDeleteBtn);

  function changeCompleteBtn() {
    let btnChange = document.querySelector(`.complete-btn-${i}`);
    btnChange.addEventListener('click', function (e) {
      e.preventDefault();
      if (btnChange.textContent === 'Yes') {
        btnChange.textContent = 'No';
      } else if (btnChange.textContent === 'No') {
        btnChange.textContent = 'Yes';
      }
    });
  }

  function deleteRow() {
    let deleteName = document.querySelector(`.name-div-${i}`);
    let deleteAuthor = document.querySelector(`.author-div-${i}`);
    let deletePage = document.querySelector(`.page-div-${i}`);
    let btnChange = document.querySelector(`.complete-btn-${i}`);
    let deleteRow = document.querySelector(`.delete-btn-${i}`);
    deleteRow.addEventListener('click', function (e) {
      e.preventDefault();
      for (let p = 0; p < myLibrary.length; p++) {
        if (myLibrary[i] == i - 1) {
          myLibrary.splice(p, 1);
        }
      }
      deleteName.remove();
      deleteAuthor.remove();
      deletePage.remove();
      btnChange.remove();
      deleteRow.remove();
    });
  }
  changeCompleteBtn();
  deleteRow();
}
