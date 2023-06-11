const myCity = {
    city: 'New Yourk',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)
// true

delete myCity.info['isPopular']

console.log(myCity)
// { city: 'New Yourk', info: { country: 'USA' } }