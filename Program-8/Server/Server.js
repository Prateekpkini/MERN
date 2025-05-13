const express = require("express");
const app = express();
const PORT = 3000;

// Function to find prime numbers less than n
const findPrimes = (n) => {
  const primes = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
};

// Function to find cubes less than n
const findCubes = (n) => {
  const cubes = [];
  for (let i = 1; i < n; i++) {
    const cube = i ** 3;
    if (cube < n) {
      cubes.push(cube);
    } else {
      break;
    }
  }
  return cubes;
};

// Route to find prime numbers less than 100
app.get("/find_prime_100", (req, res) => {
  res.json({ primes: findPrimes(100) });
});

// Route to find cubes less than 100
app.get("/find_cube_100", (req, res) => {
  res.json({ cubes: findCubes(100) });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


