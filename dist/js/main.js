
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
const $d = document;
const $surface = $d.querySelector('.surface');

$surface.addEventListener('click', surfaceClicked);

function surfaceClicked(e){

    window.console.log(e);
    const posX = e.clientX;
    const posY = e.clientY;

    let $drop = getDrop(posX, posY);

    $surface.querySelectorAll('.drop').forEach(($singleDrop, key) => {
        $surface.removeChild($singleDrop);
    });

    $surface.appendChild($drop);

    setTimeout(() => {
        $drop.classList.add('is--fallen');
    },10);

}

function getDrop(posX, posY) {
    let $drop = $d.createElement('div');

    $drop.classList.add('drop');

    $drop.style.top = posY + 'px';
    $drop.style.left = posX + 'px';

    return $drop;
}
//# sourceMappingURL=main.js.map
