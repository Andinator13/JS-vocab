/** Declaration */

function userName(name) {
    console.log(`Hello, ${name}`)
}

userName('Mike Stoklasa');

/** Expression */

const hello = function (name = 'Will Turner') {
    console.log(`Is your name ${name}?`)
}

hello()