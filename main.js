//Made by BiraSRT
//Car maker object holding car model, colors and year
const sportCarMaker = {
    sportCars: ['Mazda Miata' , 'Toyota Supra', 'Chevrolet Corvette', 'Porsche 911', 'Audi RS7', 'BMW M4', 'Ford Mustang', 'Mercedes-AMG GT', 'Ferrari F8'],
    carColors: ['Black', 'White', 'Grey', 'Silver', 'Blue', 'Red', 'Brown', 'Green', 'Gold'],
    carYear: ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
};

// function that randomizes  message
function randomize (arr) {
    let random;
    random = Math.floor(Math.random() * arr.length)
    
    return random;
}

//Making for loop and switch case to loop throught object and get random value for each propertie
let randomSportCar;
let randomCarColor;
let randomCarYear;

for (let key in sportCarMaker) {

    let randomIndex = randomize(sportCarMaker[key])

    switch (key) {

        case 'sportCars':
            randomSportCar = sportCarMaker[key][randomIndex];
            break;
        case 'carColors':
            randomCarColor = sportCarMaker[key][randomIndex];
            break;
        case 'carYear':
            randomCarYear = sportCarMaker[key][randomIndex];
            break;
    }
};

//Outputs random sports car
console.log(`Your random sports car is a ${randomCarColor} ${randomSportCar} ${randomCarYear}!`)


