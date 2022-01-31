const openButton = document.querySelector('#openOverlay');
const bodyContainer = document.querySelector('.container');

openButton.addEventListener('click', e => {
    const overlayElem = document.createElement('div');
    overlayElem.classList.add('overlay');

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay__container');

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay__content');


    

    overlayContent.innerHTML = '<p>Hello <b>world</b>!</p>';

    const closeElem = document.createElement('a');
    closeElem.classList.add('close');
    closeElem.textContent = 'X';
    closeElem.href = '#';

    closeElem.addEventListener('click', e => {
        e.preventDefault();
        bodyContainer.removeChild(overlayElem);
    });

    overlayElem.addEventListener('click', e => {
        if(e.target.classList.contains('overlay') ||
           e.target.classList.contains('overlay__container'))
                closeElem.click();
    });

    overlayElem.appendChild(overlayContainer); 
    overlayContainer.appendChild(overlayContent);
    overlayContent.appendChild(closeElem);
    bodyContainer.appendChild(overlayElem);


});