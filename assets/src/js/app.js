const typeList = document.querySelector('.car-type__list');

const form = document.querySelector('.car-search');
const inputCarType = form.querySelector('.car-search__type');
const availability = document.querySelector('.car-availability');

const cars = [
    {
        type: 'tesla',
        doors: 5,
        color: 'green'
    },
    {
        type: 'ferrari',
        doors: 3,
        color: 'red'
    },
    {
        type: 'hummer',
        doors: 5,
        color: 'black'
    },
    {
        type: 'skoda',
        doors: 5,
        color: 'white'
    }
];

// Empty car type array
var carTypes = [];

for (let car of cars) {
    const li = document.createElement('li');
    carTypes.push(car.type)

    li.textContent = car.type;
    typeList.appendChild(li);
}

// Validates the forms
const formValidation = () => {
    const inputCarTypeValue = inputCarType.value;

    if (inputCarTypeValue == '') {
        inputCarType.style.border = '1px solid red';
        return false;
    } else {
        inputCarType.style.border = '1px solid black';

        if (carTypes.includes(inputCarTypeValue)) {
            availability.textContent = 'Hebben we';
            availability.style.color = 'black';
        } else {
            availability.textContent = 'Hebben we niet';
            availability.style.color = 'red';
        }
    
    }

};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formValidation();

    form.reset();
});