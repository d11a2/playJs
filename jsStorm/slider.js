const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const list = document.querySelector('#list');
const computedStyles = getComputedStyle(list)
const items = document.querySelectorAll('.item');

const itemsCount = items.length;
const step = Math.round(parseFloat(getComputedStyle(items[0]).width));
const sliderItemCount = Math.round(parseFloat(
    getComputedStyle(
        document.querySelector('.slider')).width)) / step;
 
rightBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentR = parseInt(computedStyles.right);
    if (currentR < (itemsCount - sliderItemCount) * step) {
        list.style.right = `${currentR + step}px`;
    }
});

leftBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentR = parseInt(computedStyles.right);
    if (currentR > 0) {
        list.style.right = `${currentR - step}px`;
    }
});
        