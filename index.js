
let list= [{
    heading:'First',
    description:'The description of todo1'
},{
    heading:'Second',
    description:'The description of todo2'
},{
    heading:'Third',
    description:'The description of todo3'
},{
    heading:'Fourth',
    description:'The description of todo4'
},{
    heading:'Fifth',
    description:'The description of todo5'
}]

document.getElementsByTagName('body')

let editBtns= document.getElementsByClassName('edit');
for(var i=0; i<editBtns.length; i++){
    editBtns[i].addEventListener('click', editf)
}
let deleteBtns= document.getElementsByClassName('delete');
for(var i=0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', deletef)
}

function deletef(){
    this.parentElement.parentElement.remove();
}

function editf(){
    let ans= ask();
    this.parentElement.parentElement.children[0].innerText=ans.tittle;
    this.parentElement.parentElement.children[1].innerText=ans.description;
}

function ask(){
    let tittle=prompt('Enter the tittle of the task');
    let description= prompt('Enter the description of the task');
    let pass ={tittle: tittle, description: description};
    return pass;
}