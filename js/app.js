document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

//we decided what we targeting

  const button = document.querySelector('#delete-button');
  button.addEventListener('click', ()=> {

    const readingList = document.querySelector('#reading-list');
    const x = document.querySelector('#table-row');
    readingList.removeChild(x);

  });



  const readerList = [];

  const form = document.querySelector("#new-item-form");
  //interaction between user and app whatever user does its going to keep it
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //it stops submit button to reload the page

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const readingList = document.querySelector('#table-row');
    const newRow = document.createElement("tr");
    readingList.appendChild(newRow);

    const titleCell = document.createElement("tc");
    titleCell.textContent = title;
    newRow.appendChild(titleCell);

    const authorCell = document.createElement("tc");
    authorCell.textContent = author;
    newRow.appendChild(authorCell);

    const categoryCell = document.createElement("tc");
    categoryCell.textContent = category;
    newRow.appendChild(categoryCell);

    // let singleListItem = `${title} ${author} ${category}`;
    // readerList.push(singleListItem);
    //
    //
    // readingList.textContent = readerList;


    //form.reset();
    //const re = document.querySelector("#form");
    //resultForm.textContent = `It is going to be: ${firstName} ${lastName}`;
  });

//


});
