
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
const $d = document;
const $surface = $d.querySelector('.surface');

$surface.addEventListener('click', surfaceClicked);

function surfaceClicked(e){

    window.console.log(e);
    const posX = e.clientX;
    const posY = e.clientY;


    $surface.querySelectorAll('.drop').forEach(($singleDrop, key) => {
        $surface.removeChild($singleDrop);
    });

    appendDrop(posX, posY, 1);
    appendDrop(posX, posY,  2);
    appendDrop(posX, posY,  3);
    appendDrop(posX, posY,  4);
    appendDrop(posX, posY,  5);

}

function appendDrop(posX, posY, index) {
    const $drop = getDrop(posX, posY, index);
    setTimeout(() => {
        $surface.appendChild($drop);
        setTimeout(() => {
            $drop.classList.add('is--fallen');
        },40);
    }, 25 * index);
}

function getDrop(posX, posY, index) {
    let $drop = $d.createElement('div');

    $drop.classList.add('drop');
    $drop.classList.add('drop' + (index ? '-' + index : ''));

    $drop.style.top = posY + 'px';
    $drop.style.left = posX + 'px';

    return $drop;
}
//# sourceMappingURL=main.js.map
