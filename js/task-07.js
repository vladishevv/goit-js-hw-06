const fontSizeControl = document.querySelector('#font-size-control');
const abraText = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    abraText.style.fontSize = `${fontSizeControl.value}px`
});