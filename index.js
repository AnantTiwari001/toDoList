array = document.getElementsByClassName("todoItem");

document.getElementsByTagName("body");
function cEdit() {
  let editBtns = document.getElementsByClassName("edit");
  for (var i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", editf);
  }
}
function cDelete() {
  let deleteBtns = document.getElementsByClassName("delete");
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deletef);
  }
}
var itemd;// Just to access it in the console
var zero;
function deletef() {
  itemd = JSON.parse(localStorage.getItem("list"));
  let removeNo= parseInt(this.parentElement.parentElement.children[3].innerText);
  itemd.splice(removeNo,1);
  let stringified= JSON.stringify(itemd)
  localStorage.clear();
  localStorage.setItem('list', stringified);
  
  this.parentElement.parentElement.remove();
  updateId();
  nothingToShow();
}

function editf() {
  let ans = ask();
  this.parentElement.parentElement.children[0].innerText = ans.tittle;
  this.parentElement.parentElement.children[1].innerText = ans.description;
  let removeNo= parseInt(this.parentElement.parentElement.children[3].innerText);
  itemd = JSON.parse(localStorage.getItem("list"));
  itemd[removeNo].title=ans.tittle;
  itemd[removeNo].desc=ans.description;
  let stringified=JSON.stringify(itemd);
  localStorage.clear();
  localStorage.setItem('list', stringified);
}

function ask() {
  let tittle = prompt("Enter the tittle of the task");
  let description = prompt("Enter the description of the task");
  let pass = { tittle: tittle, description: description };
  return pass;
}

function adding() {
  let cardClone = document.querySelector(".todoItem").cloneNode(true);
  document.body.appendChild(cardClone);
  let item = JSON.parse(localStorage.getItem("list"));
  item.push({ title: "Just a sample", desc: "Just a sample" });
  item = JSON.stringify(item);
  localStorage.clear();
  localStorage.setItem("list", item);
  nothingToShow();
  cDelete();
  cEdit();
  updateId();
}
function addingInitial(title, desc) {
  let cardClone = document.querySelector(".todoItem").cloneNode(true);
  document.body.appendChild(cardClone);
  cardClone.children[0].innerText = title;
  cardClone.children[1].innerText = desc;
  return cardClone;
}

function local() {
  let item = JSON.parse(localStorage.getItem("list"));
  nothingToShow();
  for (let i = 0; i < item.length; i++) {
    addingInitial(item[i].title, item[i].desc);
  }
}

function updateId() {
  array = document.getElementsByClassName("todoItem");
  for (let i = 1; i < array.length; i++) {
    array[i].children[3].innerText = i - 1;
  }
}
var test;
function nothingToShow() {
  let item = JSON.parse(localStorage.getItem("list"));
  if (item.length===0) {
    test=addingInitial('','Nothing to show here!');
  }else{
    try {
      test.remove()
    } catch (error) {
      console.log('not the first adding here')
    }
  }
}


local();
updateId();

cEdit();
cDelete();

// to get the first synatx/sample element out of the way
