function printNumbers() {
                let i = 1;
                while (i <= 10) {
                    document.getElementsByClassName("output")[0].innerHTML += i + "  ";
                    i++;
                }
            }

function calculateFactorial() {
                const num = parseInt(document.getElementById("factorialInput").value);
                let factorial = 1;
                for (let i = 1; i <= num; i++) {
                    factorial *= i;
                }
                document.getElementsByClassName("output")[1].innerHTML = " factorial of " + num + " is " + factorial;
            }
function printFibonacci() {
                const num = parseInt(document.getElementById("fibonacciInput").value);
                let fibonacci = [0, 1];
                let i = 2;
                while (i < num) {
                    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
                    i++;
                }
                document.getElementsByClassName("output")[2].innerHTML = " Fibonacci sequence up to " + num + " is " + fibonacci.join(", ");
            }

function validateBoolean() {
                const input = document.getElementById("booleanInput").value;
                const result = document.getElementById("booleanResult");
                result.innerHTML = typeof input === "boolean" ? "Boolean" : "Not Boolean";
            }

function findLargestNumber() {
                const input = document.getElementById("arrayInput").value;
                const numbers = input.split(",").map(num => parseFloat(num));
                const largest = Math.max(...numbers);
                document.getElementById("largestResult").innerHTML = largest;
            }
function checkPalindrome() {
                const input = document.getElementById("palindromeInput").value;
                const result = document.getElementById("palindromeResult");
                const isPalindrome = input === input.split("").reverse().join("");
                result.innerHTML = isPalindrome ? "Palindrome" : "Not Palindrome";
            }
function handleDivisionByZero() {
                const numerator = parseFloat(document.getElementById("numerator").value);
                const denominator = parseFloat(document.getElementById("denominator").value);
                const result = document.getElementById("divisionResult");
                try {
                    if (denominator === 0) {
                        throw new Error("Division by zero is not allowed.");
                    }
                    const division = numerator / denominator;
                    result.innerHTML = division;
                } catch (error) {
                    result.innerHTML = error.message;
                }
            }
function validateInput() {
                const input = document.getElementById("inputField").value;
                const result = document.getElementById("inputResult");
                try {
                    if (isNaN(input) || input.trim() === "") {
                        throw new Error("Invalid input. Please enter a number.");
                    }
                    result.innerHTML = input;
                } catch (error) {
                    result.innerHTML = error.message;
                }
            }

function getElementById() {
                const elementId = document.getElementById("elementId").value;
                const result = document.getElementById("elementResult");
                const element = document.getElementById(elementId);
                result.innerHTML = element ? element.outerHTML : "Element not found.";
            }
function createNewElement() {
                const newElement = document.createElement("p");
                newElement.innerHTML = "This is a new paragraph.";
                // document.body.appendChild(newElement);
                document.getElementById("newElementResult").innerHTML = newElement;
            }
function validateEmail() {
                const email = document.getElementById("emailInput").value;
                const result = document.getElementById("emailResult");
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                result.innerHTML = emailPattern.test(email) ? "Valid Email" : "Invalid Email";
            }
function validatePassword() {
                const password = document.getElementById("passwordInput").value;
                const result = document.getElementById("passwordResult");
                const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                result.innerHTML = passwordPattern.test(password) ? "Valid Password" : "Invalid Password";
            }