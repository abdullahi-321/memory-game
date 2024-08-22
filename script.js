let items = [
    `<img src='bmw.jpg'></img>`,
    "<img src='audi.png'></img>",
    "<img src='ferrari.jpg'></img>",
    "<img src='lambo.jpg'></img>",
    "<img src='honda.png'></img>",
    "<img src='toyota.png'></img>",
    "<img src='mercedes.png'></img>"
]
items = items.concat(items);

let card1Selected;
let card2Selected;

let selected1 = '';
let selected2 = '';
let errors = 0;

for (i = 0; i < items.length; i++) {
    let j = Math.floor(Math.random() * items.length);

    let temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

for (i = 0; i < items.length; i++) {
    let element = document.createElement('button');
    let text = items[i];
    element.id = items[i]
    element.innerHTML = "<img src='questionmark.jpg'></img>";
    document.querySelector('section').appendChild(element);

    element.addEventListener('click', () => {
        if (!card1Selected) {
            card1Selected = true;
            element.innerHTML = text
            element.disabled = true;
            selected1 = element;
        } else if (!card2Selected) {
            card2Selected = true;
            element.innerHTML = text;
            element.disabled = true;
            selected2 = element;
            if (selected1.innerHTML == selected2.innerHTML) {
                setTimeout(() => {
                    console.log('win');
                    selected1.style.transform = 'translateY(-1000%)'
                    selected2.style.transform = 'translateY(-1000%)'
                    selected1.disabled = false;
                    selected2.disabled = false;
                    selected1 = "";
                    selected2 = "";
                    card1Selected = false;
                    card2Selected = false;
                }, 1000)
            } else {
                setTimeout(() => {
                    console.log('error')
                    selected1.innerHTML = "<img src='questionmark.jpg'></img>";
                    selected2.innerHTML = "<img src='questionmark.jpg'></img>";
                    selected1.disabled = false;
                    selected2.disabled = false;
                    selected1 = "";
                    selected2 = "";
                    card1Selected = false;
                    card2Selected = false;
                    errors += 1;
                    document.querySelector('.errors').innerHTML = 'Errors: ' + errors;
                }, 1100)
            }
        }
        console.log(selected1, selected2, card1Selected, card2Selected)
    })
}
