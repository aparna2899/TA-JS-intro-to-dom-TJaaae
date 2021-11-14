/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label,type = 'text'){
  let labelElm = document.createElement('label');
  labelElm.innerText = label;
  let inputElm = document.createElement('input');
  inputElm.type = type;
  labelElm.append(inputElm);
  return labelElm;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`


// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>


function createList(array){
  let ul = document.createElement('ul');
  array.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element;
    ul.append(li);
  });
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/*
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(array){
  let ul = document.createElement('ul');
  array.forEach(element => {
    let li = document.createElement('li');
    ul.append(li);
    let pElm = document.createElement('p');
    pElm.innerText = element.name;
    li.append(pElm);
    let inputElm = document.createElement('input');
    inputElm.checked = true
    li.append(inputElm);
    let spanElm = document.createElement('span');
    if(element.isDone == false)
    spanElm.innerText = '❌';
    else
    spanElm.innerText = '✅';
    li.append(spanElm);
  });
  return ul;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
