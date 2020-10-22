
<<<<<<< HEAD
const titleEl = document.getElementById('title');

titleEl.style.textAlign = 'center';

// console.log(titleEl.style.textAlign) // center

// console.dir(titleEl)

titleEl.innerText = "Title made by JS"

const pEl = document.querySelector('.cool');
console.log(pEl, 'elemnt')
pEl.style.color = 'rgb(243, 245, 100)';

// console.log(pEl.innerText);

// pEl.textContent = 'Comments for <strong>Today</strong>'pEl.textContent = 'Comments for <strong>Today</strong>';
pEl.innerHTML = 'Comments for <strong>Today</strong>';

const aLinkGoogle = document.querySelector('a');

console.log(aLinkGoogle)

aLinkGoogle.setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('.comment');
=======
























>>>>>>> bd698cb81e5595c3c1040d6031573f34fdfd97fa

console.log(commentEls)

for (let comElem of commentEls){
    comElem.style.fontSize = '30px';
}