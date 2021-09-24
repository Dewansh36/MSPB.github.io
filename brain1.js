
let pb = document.querySelectorAll('#prev');
let nb = document.querySelectorAll('#next');
let sb = document.querySelector('#submit');
let circle = document.querySelectorAll('.circle');
const bar = document.getElementById('progress');
let pages = document.querySelectorAll('.page');
let w = 0;
let acpos = 0;
let pgn = 0;
function reset() {
    for (let ele of pages) {
        ele.classList.add('hide');
    }
    for (let ele of circle) {
        ele.classList.remove('circle-active');
    }
    bar.style.width = 0;
    w = 0;
    acpos = 0;
    pgn = 0;
    pages[pgn].classList.remove('hide');
    circle[acpos].classList.add('circle-active');

}
reset();
for (let but of nb) {
    but.addEventListener('click', function () {
        if (pgn < 3) {
            pgn++;
            pages[pgn - 1].classList.add('hide');
            pages[pgn].classList.remove('hide');
        }
        if (w < 82.885 && acpos < 3) {
            if (acpos > -1)
                w += (27.630);
            acpos++;
        }
        bar.style.width = w + "%";
        circle[acpos].classList.add('circle-active');
    });
}
for (let but of pb) {
    but.addEventListener('click', function () {
        if (pgn > 0) {
            pgn--;
            pages[pgn + 1].classList.add('hide');
            pages[pgn].classList.remove('hide');
        }
        if (w > 0 && acpos > -1) {
            w -= (27.630);
            acpos--;
            bar.style.width = w + "%";
            circle[acpos + 1].classList.remove('circle-active');
        }
    });
}
sb.addEventListener('click', () => {
    reset();
    alert('Successfully Submitted!');

})