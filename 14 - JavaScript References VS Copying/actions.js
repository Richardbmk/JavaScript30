    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);

    let name = 'Richard';
    let name2 = name;
    console.log(name, name2);
    name = 'Ricardin';
    console.log(name, name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    // and we want to make a copy of it.
    const team = players;
    console.log(players, team);

    // You might think we can just do something like this:
    team[3] = 'Hamburger';

    // however what happens when we update that array?
    const team2 = players.slice();
    team2[3] = 'Lux';

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    team3[3] = 'Element4';

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'brand';
    console.log(team4);


    const team5 = Array.from(players);
    team5[3] = 'Mabel';
    console.log(team5);

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    // captain.number = 99; // not to do this!

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    console.log(cap3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const rick = {
        name: 'Richard',
        age: 25,
        social: {
            twitter: '@rick',
            facebook: 'rick.dev'
        }
    };

    console.log(rick);
    const dev = Object.assign({}, rick);

    dev.name = 'Martin';

    dev.social.twitter = '@fun';

    const dev2 = JSON.parse(JSON.stringify(rick));

        // explanation
    JSON.stringify(rick)  // object to JSON
    JSON.parse(JSON.stringify(rick)) // JSON to object again

    dev.social.twitter = '@CLone';