// Object is a value type
// Object is a variable type
// Object is a reference type

// const myCity = {
//     city: 'New Yourk',
//     popular: true,
//     country: 'USA'
// }
// console.log(myCity)


// The order of variable properties does not matter
// const myCity = {
//     city: 'New Yourk',
//     popular: true,
//     country: 'USA'
// }

// const myCity = {
//     popular: true,
//     country: 'USA',
//     city: 'New Yourk'
// }

// Technically identical objects

const myCity = {
    city: 'New Yourk',
    popular: true,
    country: 'USA'
}
console.log(myCity.city)
// 'New Yourk'

console.log(myCity.popular)
// true

myCity.city = 'Las Vegas'

console.log(myCity)
// {city: 'Las Vegas'}

myCity.popular = true

console.log(myCity)
// {city: 'Las Vegas', popular: true}

myCity.city = 'New York'
myCity.country = 'USA'

console.log(myCity)
// {city: 'New York', popular: true, country: 'USA'}

// Delete object
delete myCity.country
delete myCity.popular
console.log(myCity)
// { city: 'New York' }

myCity['popular'] = true
console.log(myCity)
// { city: 'New York', popular: true }

// Using square brackets
const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity)
// { city: 'New York', popular: true, country: 'USA' }