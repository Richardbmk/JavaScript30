console.log("flow");

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y} = e;

    //console.log(this, e.target);

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        x = y + e.target.offsetTop;
    }

    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));

    //console.log(x, y);
    //console.log(xwalk, ywalk);

    text.style.textShadow = `
        ${xwalk}px ${ywalk}px 0 rgba(255, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);