/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    console.log(destination)
    let sum = 0

    // Use a for loop to iterate from 1 up to the destination number (inclusive).
    for (let i = 1; i <= destination; i++) {
        // Add the current number (i) to the sum.
        sum += i
    }

    // Return the final sum.
    return sum
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination. The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
export function evenNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination
    let sum = 0
    let count = 0
    const arrayOfEvenNumbers = []

    for (let i = 0; i <= destination; i++) {
        if (i % 2 === 0) {
            count++
            sum += i
            arrayOfEvenNumbers.push(i)
        }
    }
    return {
        count,
        sum,
        arrayOfEvenNumbers,
    }
}

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    console.log(arrayOfNumbers)

    // Use the `map` method to iterate through each number in the array.
    // The map() method creates a new array by calling a provided function on every element in the calling array.
    return arrayOfNumbers.map((celsius) => {
        // First, apply the conversion formula: Fahrenheit = (Celsius * 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32

        // Next, use Math.trunc() to remove the decimal part of the Fahrenheit value.
        return Math.trunc(fahrenheit)
    })
}

/**
 * Challenge - 4
 *
 * Calculates the count and sum of odd numbers from 0 to the given destination.
 * Stores each odd number in an array. Returns an object with count, sum, and arrayOfOddNumbers.
 *
 * @param {number} destination the destination number
 * @returns {object} the count, sum, and arrayOfOddNumbers
 */
export function oddNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination
    let sum = 0
    let count = 0
    const arrayOfOddNumbers = []

    // Use a for loop to iterate from 0 up to and including the destination number.
    for (let i = 0; i <= destination; i++) {
        // Check if the current number 'i' is odd by using the modulo operator.
        // An odd number divided by 2 will always have a remainder.
        if (i % 2 !== 0) {
            // If the number is odd, add it to the sum.
            sum += i
            // Increment the count of odd numbers.
            count++
            // Push the odd number into the array.
            arrayOfOddNumbers.push(i)
        }
    }
    return {
        count,
        sum,
        arrayOfOddNumbers,
    }
}

/**
 * Challenge - 5
 *
 * Given an array of numbers, find all numbers that are multiples of a given factor.
 * Return an object containing the count of multiples, their sum, and an array of the multiples.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check
 * @param {number} factor the factor to check multiples for
 * @returns {object} the count, sum, and arrayOfMultiples
 */
export function findMultiples(arrayOfNumbers, factor) {
    console.log(arrayOfNumbers, factor)
    let sum = 0
    let count = 0
    const arrayOfMultiples = []

    // Iterate through each number in the input array.
    arrayOfNumbers.forEach((number) => {
        // Use the modulo operator to check if the number is a multiple of the factor.
        // A number is a multiple if the remainder is 0 when divided by the factor.
        if (number % factor === 0) {
            // If it's a multiple, increment the count.
            count++
            // Add the number to the sum.
            sum += number
            // Push the multiple into the array.
            arrayOfMultiples.push(number)
        }
    })
    return {
        count,
        sum,
        arrayOfMultiples,
    }
}

/**
 * Challenge - 6
 *
 * Given an array of numbers, calculate the factorial of each number and return a new array.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * Note: 0! = 1 and negative numbers should return 0.
 *
 * @param {Array} arrayOfNumbers the array of numbers to calculate factorials for
 * @returns {Array} the array of factorial results
 */
export function calculateFactorials(arrayOfNumbers) {
    console.log(arrayOfNumbers)

    // A helper function to compute the factorial of a single number.
    function factorial(n) {
        // Handle the base cases: 0! = 1 and any negative number should return 0.
        if (n < 0) {
            return 0
        }
        if (n === 0) {
            return 1
        }

        // Calculate the factorial by multiplying all integers from 1 up to n.
        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }
        return result
    }

    // Use the map() method to apply the factorial function to each number
    // in the input array, creating a new array of the results.
    return arrayOfNumbers.map(number => factorial(number))
}

/**
 * Challenge - 7
 *
 * Given an array of numbers, find all prime numbers and return an object containing
 * the count of primes, their sum, and an array of the prime numbers found.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check for primes
 * @returns {object} the count, sum, and arrayOfPrimes
 */
export function findPrimeNumbers(arrayOfNumbers) {
    console.log(arrayOfNumbers)

    // A helper function to check if a number is prime.
    // This is more efficient than checking all the way up to the number itself.
    function isPrime(num) {
        // Prime numbers must be greater than 1.
        if (num <= 1) {
            return false
        }

        // Check for divisibility from 2 up to the square root of the number.
        // If a number has a divisor greater than its square root, it must also have one
        // that is less than or equal to its square root.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // If it's divisible by any number other than 1 and itself, it's not prime.
                return false
            }
        }
        // If the loop completes without finding any divisors, the number is prime.
        return true
    }

    // Initialize the variables to store the results.
    let sum = 0
    let count = 0
    const arrayOfPrimes = []

    // Iterate through each number in the input array.
    for (const number of arrayOfNumbers) {
        // Use the helper function to check if the current number is prime.
        if (isPrime(number)) {
            // If it is, update the count, sum, and add it to the array.
            count++
            sum += number
            arrayOfPrimes.push(number)
        }
    }
    return {
        count,
        sum,
        arrayOfPrimes,
    }
}

/**
 * Challenge - 8
 *
 * Given an array of numbers, return the double of the values
 *
 * @param {Array} arrayOfNumbers the array of numbers to double
 * @returns {Array} the array of doubled numbers
 */
export function doubleTheValues(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    // The map() method creates a new array by applying a function
    // to each element of the original array.
    return arrayOfNumbers.map((number) => {
        return number * 2
    })
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
