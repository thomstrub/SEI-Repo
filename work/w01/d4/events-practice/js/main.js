
//When we click the Add Comment button,
//we want to create a new comment
// with the text entered in the input
// and then clear the input.


// =======================================Step one
//When we click the Add Comment button,
// =======================================Step one
//1. grab the element
const btn = document.querySelector('button');
//2. then add the event listner
btn.addEventListener('click', function(event){
  //we want to create a new comment
  const li = document.createElement('li');
  //with the text entered in the input

  // 1. grab the input
  const input = document.querySelector('input');
  // should log input to make sure you are grabbing it
  // 2. Get the text out of the input
  console.log(input.value);
  if(input.value != ''){
    li.textContent = input.value;
    console.log(li);

    // add the LI to the DOM
    // 1 grab the element we want to put it inside of
    // in our case the UL
    const ul = document.querySelector('ul');
    // you should log this and make sure getting it
    ul.appendChild(li)
    //then clear the input.
    // set the value of the input
    input.value = '';
  }
  // add the text from the input to our newly created comment

})


document.querySelector('ul')
   .addEventListener('click', handleClick);

 function handleClick(e) {
   console.log(e.target);
  console.log(e.target.tagName)
   e.target.style.color = 'red'
 }

