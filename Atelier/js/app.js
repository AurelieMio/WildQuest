process.stdin.resume()
process.stdin.setEncoding('utf8')



console.log(`What's your age?`)
process.stdin.on('data', (number) => {
    number = parseInt(number, 10);
    if (number === NaN ){
        console.log("Please enter your age with only numbers")
    } if else (number >99) {
        console.log("Are you really this old?")
    } if else (number <1 ) {
        console.log("Are you really this young?")
    }else {
    console.log("Your birth year is " +( 2019 - number))
    }
    process.exit()
})
