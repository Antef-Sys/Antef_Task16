like this   # 📊 JavaScript Array Operations

This project demonstrates basic array operations using JavaScript, including:

* Finding the **maximum element**
* Calculating the **sum of all elements**
* Counting the **number of odd elements**

---

## 📁 Project Structure

```
project-folder/
│── index.html
│── script.js
```

---

## 🚀 Features

### 1. Find Maximum Element

* Iterates through the array
* Compares each value
* Returns the largest number

### 2. Calculate Sum

* Loops through all elements
* Adds them together
* Returns total sum

### 3. Count Odd Numbers

* Checks each element using modulus operator (`%`)
* Counts numbers that are not divisible by 2

---

## 🧠 Code Overview

### Array Used

```js
let arr = [4, 8, 2, 11, 6, 7, 10];
```

---

### Functions

#### 🔹 Maximum Value

```js
let max1 = function() {
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}
```

---

#### 🔹 Sum of Elements

```js
let sum1 = function () {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}
```

---

#### 🔹 Count Odd Numbers (Arrow Function)

```js
const greet = () => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            count++;
        }
    }
    return count;
}
```

---

## 🖥️ Output

```
Maximum element is: 11
Sum of all elements: 48
Count of Odd numbers: 2
```

---

## ▶️ How to Run

1. Create two files:

   * `index.html`
   * `script.js`

2. Paste the HTML code in `index.html`

3. Paste the JavaScript code in `script.js`

4. Open `index.html` in your browser

5. Open **Console (F12 → Console tab)** to view output

---

## 💡 Concepts Used

* Arrays
* Loops (`for`)
* Functions
* Arrow Functions
* Conditional Statements
* JavaScript Console

---

## 📌 Author

**Antef Idrisi**

---

## ⭐ Future Improvements

* Add user input support
* Display results on webpage (not just console)
* Use modern methods like `map`, `filter`, `reduce`
* Add UI for better interaction

---
