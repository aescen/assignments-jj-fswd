const isPrime = ($int) => {
  if ($int === 1) return false;
  for (let i = 2; i < $int; i += 1) {
    if ($int % i === 0) return false;
  }
  return true;
};

const getPrime = (start, end) => {
  const primeResult = [];
  for (let i = start; i <= end; i += 1) {
    if (isPrime(i)) primeResult.push(i);
  }
  return primeResult;
};

const isOdd = ($int) => ($int % 2 === 1);

// Soal - 01
// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop,
// untuk mencetak angka prima dari 1 ~ 100
// EDIT HERE
const prime100 = getPrime(1, 100);
console.log(prime100.join(', '));

// Soal - 02
// Kamu diminta untuk menemukan bilangan prima ke-50,
// temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime;

// EDIT HERE
const stop = 50;
let i = 1;
while (primeCounter !== stop) {
  if (isPrime(i)) {
    primeCounter += 1;
    fiftiethPrime = i;
  }
  i += 1;
}

console.log(fiftiethPrime);

// Soal - 03
// Kamu diminta untuk menemukan bilangan ganjil ke-50,
// temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

// EDIT HERE
i = 1;
do {
  if (isOdd(i)) {
    oddCounter += 1;
    fiftiethOdd = i;
  }
  i += 1;
} while (oddCounter !== stop);

console.log(fiftiethOdd);
