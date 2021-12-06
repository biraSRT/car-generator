//Made by BiraSRT

//Initializing string arrays for random messages

const sportCars = ['Mazda Miata' , 'Toyota Supra', 'Chevrolet Corvette', 'Porsche 911', 'Audi RS7', 'BMW M4', 'Ford Mustang', 'Mercedes-AMG GT', 'Ferrari F8'];
const carColors = ['Black', 'White', 'Grey', 'Silver', 'Blue', 'Red', 'Brown', 'Green', 'Gold'];
const carYear = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];


// function that randomizes  message
function randomize (arr) {
    let random;
    random = Math.floor(Math.random() * arr.length)
    
    return random;
}

let randomSportCar = sportCars[randomize (sportCars)];
let randomCarColor = carColors[randomize (carColors)];
let randomCarYear = carYear[randomize (carYear)];

//Output random sports car / message
console.log(`Your random sports car is a ${randomCarColor} ${randomSportCar} ${randomCarYear}!`)


