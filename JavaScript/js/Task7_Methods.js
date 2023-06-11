// Method - properties of the object, the value of which is the function

// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {
//         console.log('Greetings!!')
//     }
// }

//Short format methods
const myCity = {
    city: 'New York',
    cityGreeting() { 
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()
// 'Greetings!!'

// Methods VS Properties of objects
// myCity.city // Property value access

// myCity.cityGreeting() /// ()Method call