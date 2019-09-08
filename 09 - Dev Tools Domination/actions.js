    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn('OH YEAH YOU MADE IT!!')


    // Error :|
    console.error('DAMAGE, I HAVE TO UNDERSTAND HOW I DID IT')

    // Info
    console.info('We learn by explaining conceps to ourselves or others...')

    // Testing
     console.assert(1 === 2, 'This is not the right way to think about this problem...')

     const p = document.querySelector('p');

     console.assert(p.classList.contains('Master'), 'You have to aproach things with a flexible mindset')

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        //console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`Is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`)
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Ricardo');
    console.count('Richard');
    console.count('Richard');
    console.count('Richard');
    console.count('Ricardo');
    console.count('Ricardo');
    console.count('Ricardo');
    console.count('Ricardo');



    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/Richardbmk')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    // Table
    console.table(dogs);