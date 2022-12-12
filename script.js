const image = document.querySelector('.leafs');
const width = image.offsetWidth;
const div = document.querySelector('.logo');
const pw = document.querySelector('.pw')
const pwc = document.querySelector('.pwc')
const error = document.querySelector('.error')

const compare = function(){
    if (pw.value !== pwc.value){
        pw.validity = false;
        error.style.cssText = 'visibility: visible;'
    } else {
        pw.validity = true;
        error.style.cssText = 'visibility: hidden;'
    }
}

pw.addEventListener('keyup', compare);
pwc.addEventListener('keyup', compare);


div.style.width = width + 'px';

window.addEventListener('resize', () => {
    const newWidth = image.offsetWidth;
    div.style.width = newWidth + 'px'
});

