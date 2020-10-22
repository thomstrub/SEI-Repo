

const titleEl = document.getElementById('title');

titleEl.style.textAlign = 'center';

// console.log(titleEl.style.textAlign) // center

// console.dir(titleEl)

titleEl.innerText = "Title made by JS"

// selecting a class!
const pEl = document.querySelector('.cool');
console.log(pEl, 'elemnt')
pEl.style.color = 'rgb(243, 245, 100)';

// console.log(pEl.innerText);

// pEl.textContent = 'Comments for <strong>Today</strong>'pEl.textContent = 'Comments for <strong>Today</strong>';
pEl.innerHTML = 'Comments for <strong>Today</strong>';

// selecting a link
const aLinkGoogle = document.querySelector('a');

console.log(aLinkGoogle)
// setting an attribute on the fly!
aLinkGoogle.setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('#comments')
// checking to see if I selected comments
console.log(commentEls)

for (let comElem of commentEls){
    comElem.style.fontSize = '30px';
}
