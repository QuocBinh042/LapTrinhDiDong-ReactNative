import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

export default function App() {

  // 1. Print numbers from 1 to 10
  useEffect(() => {
    console.log("1. Numbers from 1 to 10:");
    for (let i = 1; i <= 10; i++) console.log(i);
  }, []);

  // 2. Print odd numbers less than 100
  useEffect(() => {
    console.log("2. Odd numbers less than 100:");
    for (let i = 1; i < 100; i += 2) console.log(i);
  }, []);

  // 3. Print multiplication table with 7
  useEffect(() => {
    console.log("3. Multiplication table of 7:");
    for (let i = 1; i <= 10; i++) console.log(`7 x ${i} = ${7 * i}`);
  }, []);

  // 4. Print all multiplication tables from 1 to 10
  useEffect(() => {
    console.log("4. Multiplication tables from 1 to 10:");
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log('------------');
    }
  }, []);

  // 5. Sum of numbers from 1 to 10
  const sumOfNumbers = () => Array.from({ length: 10 }, (_, i) => i + 1).reduce((a, b) => a + b);

  // 6. Factorial of 10
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  // 7. Sum of even numbers greater than 10 and less than 30
  const sumEvenNumbers = () => Array.from({ length: 10 }, (_, i) => (i + 6) * 2).reduce((a, b) => a + b);

  // 8. Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;

  // 9. Convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;

  // 10. Sum of numbers in an array
  const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

  // 11. Average of numbers in an array
  const averageArray = (arr) => sumArray(arr) / arr.length;

  // 12. Return positive numbers in array
  const positiveNumbers = (arr) => arr.filter((num) => num > 0);

  // 13. Maximum number in an array
  const maxInArray = (arr) => Math.max(...arr);

  // 14. First 10 Fibonacci numbers (without recursion)
  const fibonacci = () => {
    const fib = [0, 1];
    for (let i = 2; i < 10; i++) fib.push(fib[i - 1] + fib[i - 2]);
    return fib;
  };

  // 15. Nth Fibonacci number using recursion
  const fibonacciNth = (n) => (n <= 1 ? n : fibonacciNth(n - 1) + fibonacciNth(n - 2));

  // 16. Check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 17. Sum of digits of a positive integer
  const sumOfDigits = (num) => num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);

  // 18. First 100 prime numbers
  const first100Primes = () => {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  // 19. First "p" prime numbers greater than "n"
  const primesGreaterThanN = (p, n) => {
    const primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  // 20. Rotate array left by 1 position
  const rotateLeft = (arr) => [...arr.slice(1), arr[0]];

  // 21. Rotate array right by 1 position
  const rotateRight = (arr) => [arr[arr.length - 1], ...arr.slice(0, -1)];

  // 22. Reverse an array
  const reverseArray = (arr) => arr.reverse();

  // 23. Reverse a string
  const reverseString = (str) => str.split('').reverse().join('');

  // 24. Merge two arrays
  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

  // 25. Numbers in first or second array but not both
  const symmetricDifference = (arr1, arr2) => [
    ...arr1.filter((n) => !arr2.includes(n)),
    ...arr2.filter((n) => !arr1.includes(n)),
  ];

  // 26. Numbers in first array but not in second
  const difference = (arr1, arr2) => arr1.filter((n) => !arr2.includes(n));

  // 27. Distinct elements in array
  const distinctArray = (arr) => [...new Set(arr)];

  // 28. Sum of first 100 prime numbers
  const sumFirst100Primes = () => sumArray(first100Primes());

  // 29. Distance between first 100 prime numbers
  const primeDistances = () => {
    const primes = first100Primes();
    return primes.slice(1).map((prime, i) => prime - primes[i]);
  };

  // 30. Add two large numbers as strings
  const addLargeNumbers = (num1, num2) => (BigInt(num1) + BigInt(num2)).toString();

  // 31. Count words in a text
  const wordCount = (text) => text.trim().split(/\s+/).length;

  // 32. Capitalize first letter of each word
  const capitalizeWords = (text) =>
    text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  // 33. Sum numbers in comma delimited string
  const sumCommaDelimited = (str) => sumArray(str.split(',').map(Number));

  // 34. Return words in text as an array
  const textToWordsArray = (text) => text.trim().split(/\s+/);

  // 35. Convert CSV to bi-dimensional array
  const csvToArray = (csv) => csv.split('\n').map((row) => row.split(','));

  // 36. String to array of characters
  const stringToCharArray = (str) => str.split('');

  // 37. String to ASCII codes array
  const stringToAscii = (str) => str.split('').map((char) => char.charCodeAt(0));

  // 38. ASCII codes array to string
  const asciiToString = (arr) => arr.map((code) => String.fromCharCode(code)).join('');

  // 39. Caesar cipher implementation
  const caesarCipher = (str, shift) =>
    str.replace(/[a-z]/gi, (char) =>
      String.fromCharCode(((char.toLowerCase().charCodeAt(0) - 97 + shift) % 26) + 97)
    );

  // 40. Bubble sort algorithm
  const bubbleSort = (arr) => {
    const sortedArr = [...arr];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return sortedArr;
  };

  // 41. Distance between two points
  const distanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  // 42. Check if two circles intersect
  const circlesIntersect = (x1, y1, r1, x2, y2, r2) =>
    distanceBetweenPoints(x1, y1, x2, y2) <= r1 + r2;

  // 43. Extract column from bi-dimensional array
  const extractColumn = (arr, colIndex) => arr.map((row) => row[colIndex]);

  // 44. Flatten bi-dimensional array
  const flattenArray = (arr) => arr.flat();

  // 45. Create matrix with n rows and m columns of zeroes
  const createMatrix = (n, m) => Array.from({ length: n }, () => Array(m).fill(0));

  // 46. Sum of elements in bi-dimensional array
  const sumMatrix = (matrix) => sumArray(matrix.flat());

  // 47. Transpose a matrix
  const transposeMatrix = (matrix) =>
    matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));

  // 48. Create an identity matrix of size n
  const identityMatrix = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));

  // 49. Multiply two matrices
  const multiplyMatrices = (A, B) =>
    A.map((row, i) =>
      B[0].map((_, j) => row.reduce((sum, _, k) => sum + A[i][k] * B[k][j], 0))
    );

  // 50. Sum elements above main diagonal in square matrix
  const sumAboveDiagonal = (matrix) =>
    matrix.reduce((sum, row, i) => sum + row.slice(i + 1).reduce((a, b) => a + b, 0), 0);

  // 51. Sum elements below main diagonal in square matrix
  const sumBelowDiagonal = (matrix) =>
    matrix.reduce((sum, row, i) => sum + row.slice(0, i).reduce((a, b) => a + b, 0), 0);

  // 52. Find determinant of 2x2 matrix
  const determinant2x2 = (matrix) => matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

  // 53. Calculate inverse of 2x2 matrix
  const inverse2x2 = (matrix) => {
    const det = determinant2x2(matrix);
    if (det === 0) throw new Error("Matrix is not invertible");
    return [
      [matrix[1][1] / det, -matrix[0][1] / det],
      [-matrix[1][0] / det, matrix[0][0] / det],
    ];
  };

  return (
    <ScrollView>
      <div>
        <h2>Task Results</h2>
        <p>5. Sum of numbers from 1 to 10: {sumOfNumbers()}</p>
        <p>6. Factorial of 10: {factorial(10)}</p>
        <p>7. Sum of even numbers between 10 and 30: {sumEvenNumbers()}</p>
        <p>8. 25°C to Fahrenheit: {celsiusToFahrenheit(25)}°F</p>
        <p>9. 77°F to Celsius: {fahrenheitToCelsius(77)}°C</p>
        <p>10. Sum of array [1, 2, 3, 4, 5]: {sumArray([1, 2, 3, 4, 5])}</p>
        <p>11. Average of array [1, 2, 3, 4, 5]: {averageArray([1, 2, 3, 4, 5])}</p>
        <p>12. Positive numbers in [-1, 2, -3, 4]: {positiveNumbers([-1, 2, -3, 4]).join(', ')}</p>
        <p>13. Maximum in [1, 2, 3, 4, 5]: {maxInArray([1, 2, 3, 4, 5])}</p>
        <p>14. First 10 Fibonacci numbers: {fibonacci().join(', ')}</p>
        <p>15. 10th Fibonacci number (recursion): {fibonacciNth(10)}</p>
        <p>16. Is 29 prime? {isPrime(29) ? "Yes" : "No"}</p>
        <p>17. Sum of digits of 12345: {sumOfDigits(12345)}</p>
        <p>18. First 100 prime numbers: {first100Primes().slice(0, 10).join(', ')}...</p>
        <p>19. First 5 primes greater than 50: {primesGreaterThanN(5, 50).join(', ')}</p>
        <p>20. Rotate [1, 2, 3, 4] left: {rotateLeft([1, 2, 3, 4]).join(', ')}</p>
        <p>21. Rotate [1, 2, 3, 4] right: {rotateRight([1, 2, 3, 4]).join(', ')}</p>
        <p>22. Reverse [1, 2, 3, 4]: {reverseArray([1, 2, 3, 4]).join(', ')}</p>
        <p>23. Reverse "hello": {reverseString("hello")}</p>
        <p>24. Merge [1, 2] and [3, 4]: {mergeArrays([1, 2], [3, 4]).join(', ')}</p>
        <p>25. Symmetric difference [1, 2, 3] and [2, 3, 4]: {symmetricDifference([1, 2, 3], [2, 3, 4]).join(', ')}</p>
        <p>26. Difference [1, 2, 3] and [2, 3]: {difference([1, 2, 3], [2, 3]).join(', ')}</p>
        <p>27. Distinct elements in [1, 2, 2, 3]: {distinctArray([1, 2, 2, 3]).join(', ')}</p>
        <p>28. Sum of first 100 primes: {sumFirst100Primes()}</p>
        <p>29. Prime distances: {primeDistances().slice(0, 10).join(', ')}...</p>
        <p>30. Add "123456789" and "987654321": {addLargeNumbers("123456789", "987654321")}</p>
        <p>31. Word count in "hello world": {wordCount("hello world")}</p>
        <p>32. Capitalize "hello world": {capitalizeWords("hello world")}</p>
        <p>33. Sum numbers in "1,2,3,4,5": {sumCommaDelimited("1,2,3,4,5")}</p>
        <p>34. Words in "hello world": {textToWordsArray("hello world").join(', ')}</p>
        <p>35. CSV to array: {JSON.stringify(csvToArray("1,2\n3,4"))}</p>
        <p>36. String to char array "abc": {stringToCharArray("abc").join(', ')}</p>
        <p>37. String "abc" to ASCII: {stringToAscii("abc").join(', ')}</p>
        <p>38. ASCII [97, 98, 99] to string: {asciiToString([97, 98, 99])}</p>
        <p>39. Caesar cipher "abc" by 2: {caesarCipher("abc", 2)}</p>
        <p>40. Bubble sort [4, 3, 2, 1]: {bubbleSort([4, 3, 2, 1]).join(', ')}</p>
        <p>41. Distance between points (0,0) and (3,4): {distanceBetweenPoints(0, 0, 3, 4)}</p>
        <p>42. Do circles (0,0,3) and (5,0,2) intersect? {circlesIntersect(0, 0, 3, 5, 0, 2) ? "Yes" : "No"}</p>
        <p>43. Extract column 1 from [[1,2], [3,4]]: {extractColumn([[1, 2], [3, 4]], 1).join(', ')}</p>
        <p>44. Flatten [[1,2], [3,4]]: {flattenArray([[1, 2], [3, 4]]).join(', ')}</p>
        <p>45. Create 2x3 matrix of zeroes: {JSON.stringify(createMatrix(2, 3))}</p>
        <p>46. Sum of matrix [[1,2], [3,4]]: {sumMatrix([[1, 2], [3, 4]])}</p>
        <p>47. Transpose [[1,2,3], [4,5,6]]: {JSON.stringify(transposeMatrix([[1, 2, 3], [4, 5, 6]]))}</p>
        <p>48. Identity matrix of size 3: {JSON.stringify(identityMatrix(3))}</p>
        <p>49. Multiply [[1,2], [3,4]] and [[5,6], [7,8]]: {JSON.stringify(multiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]))}</p>
        <p>50. Sum above diagonal in [[1,2,3], [4,5,6], [7,8,9]]: {sumAboveDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}</p>
        <p>51. Sum below diagonal in [[1,2,3], [4,5,6], [7,8,9]]: {sumBelowDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}</p>
        <p>52. Determinant of [[1,2], [3,4]]: {determinant2x2([[1, 2], [3, 4]])}</p>
        <p>53. Inverse of [[1,2], [3,4]]: {JSON.stringify(inverse2x2([[1, 2], [3, 4]]))}</p>
      </div>
    </ScrollView>
  );

}
