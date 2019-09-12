const pressed = [];
const secretCode = 'ricardin';




window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    //console.log(-secretCode.length -1);
    //console.log(pressed.length);
    //console.log(pressed.length - secretCode.length);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    //console.log(pressed);
    if(pressed.join('').includes(secretCode)) {
        window.alert('DING DING!');
        cornify_add();
    }
    console.log(pressed);
});