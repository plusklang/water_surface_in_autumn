import "../style/scss/main.scss";

const $d = document;
const $surface = $d.querySelector('.surface');

$surface.addEventListener('click', surfaceClicked);

function surfaceClicked(e){

    window.console.log(e);
    const posX = e.clientX
    const posY = e.clientY


    $surface.querySelectorAll('.drop').forEach(($singleDrop, key) => {
        $surface.removeChild($singleDrop)
    })

    appendDrop(posX, posY, 1);
    appendDrop(posX, posY,  2);
    appendDrop(posX, posY,  3);

}

function appendDrop(posX, posY, index) {
    const $drop = getDrop(posX, posY, index)
    setTimeout(() => {
        $surface.appendChild($drop);
        setTimeout(() => {
            $drop.classList.add('is--fallen');
        },10);
    }, 80 * index);
}

function getDrop(posX, posY, index) {
    let $drop = $d.createElement('div');

    $drop.classList.add('drop');
    $drop.classList.add('drop' + (index ? '-' + index : ''));

    $drop.style.top = posY + 'px';
    $drop.style.left = posX + 'px';

    return $drop;
}