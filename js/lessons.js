// console.log("lessons.js loaded"); // Already here from previous step, can be removed or kept

const lessons = [
    {
        id: 'intro-to-js',
        title: 'Introduction to JavaScript',
        description: 'Learn the basics of JavaScript, what it is, how it runs, and your first line of code.',
        content: `
            <p>JavaScript (JS) is a versatile and widely used programming language, primarily known as the scripting language for Web pages.</p>
            <p><strong>Key Characteristics:</strong></p>
            <ul>
                <li><strong>Client-Side Scripting:</strong> Runs directly in the user's web browser, enabling dynamic content, interactive maps, animated graphics, etc.</li>
                <li><strong>Versatile:</strong> Can also be used on the server-side (Node.js), for mobile app development (React Native, Ionic), desktop app development (Electron), and game development.</li>
                <li><strong>Interpreted Language:</strong> Code is executed line by line.</li>
                <li><strong>Dynamically Typed:</strong> Variable types are checked at runtime.</li>
            </ul>
            <p><strong>How JavaScript Runs in a Browser:</strong></p>
            <p>When you visit a website, your browser downloads the HTML, CSS, and JavaScript files. The browser's JavaScript engine then executes the JavaScript code. This allows developers to manipulate the HTML and CSS of the page, react to user events (like clicks or key presses), make requests for data from servers, and much more.</p>
            <p><strong>Your First Line of Code: The Console</strong></p>
            <p>Most browsers have a built-in developer console where you can write and test JavaScript code. A common first step is to print a message to the console using <code>console.log()</code>.</p>
        `,
        exampleCode: 'console.log("Hello, World! Welcome to JavaScript!");',
        quiz: {
            question: 'What is the primary role of JavaScript in web development?',
            options: [
                { text: 'Styling web pages', correct: false },
                { text: 'Defining the structure of web pages', correct: false },
                { text: 'Adding interactivity and dynamic content to web pages', correct: true },
                { text: 'Managing databases', correct: false }
            ]
        }
    },
    {
        id: 'variables',
        title: 'JavaScript Variables',
        description: 'Understand how to declare and use variables to store and manage data in JavaScript.',
        content: `
            <p>Variables are containers for storing data values. In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
            <p><strong>Declaring Variables:</strong></p>
            <ul>
                <li><strong><code>var</code>:</strong> The older way to declare variables. Variables declared with <code>var</code> are function-scoped or globally-scoped. They can be re-declared and updated.</li>
                <li><strong><code>let</code>:</strong> Introduced in ES6 (ECMAScript 2015). Variables declared with <code>let</code> are block-scoped (scope is limited to the block, statement, or expression where they are defined). They can be updated but not re-declared within the same scope.</li>
                <li><strong><code>const</code>:</strong> Also introduced in ES6. Variables declared with <code>const</code> are block-scoped. They cannot be updated or re-declared. This means their value is constant. However, for objects and arrays declared with <code>const</code>, their properties or elements can be changed.</li>
            </ul>
            <p><strong>Naming Conventions:</strong></p>
            <ul>
                <li>Names can contain letters, digits, underscores, and dollar signs.</li>
                <li>Names must begin with a letter, <code>$</code>, or <code>_</code>.</li>
                <li>Names are case-sensitive (<code>y</code> and <code>Y</code> are different variables).</li>
                <li>Reserved keywords (like <code>let</code>, <code>const</code>, <code>if</code>, etc.) cannot be used as names.</li>
                <li>It's a common practice to use camelCase for variable names (e.g., <code>myVariableName</code>).</li>
            </ul>
            <p><strong>Data Types:</strong></p>
            <p>JavaScript is dynamically typed, meaning you don't have to specify the data type of a variable when you declare it. Common data types include:</p>
            <ul>
                <li><strong>String:</strong> Text, e.g., <code>"Hello"</code></li>
                <li><strong>Number:</strong> Numeric values, e.g., <code>100</code>, <code>3.14</code></li>
                <li><strong>Boolean:</strong> True or false values, e.g., <code>true</code></li>
                <li><strong>Object:</strong> A collection of key-value pairs, e.g., <code>{ name: "Alice", age: 30 }</code></li>
                <li><strong>Array:</strong> An ordered list of values, e.g., <code>[1, 2, 3]</code></li>
                <li><strong>Null:</strong> Represents the intentional absence of any object value.</li>
                <li><strong>Undefined:</strong> Indicates that a variable has been declared but not yet assigned a value.</li>
            </ul>
        `,
        exampleCode:
`// Using var (older way)
var name = "John Doe";
console.log(name); // Output: John Doe

// Using let (block-scoped, can be updated)
let age = 30;
age = 31;
console.log(age); // Output: 31

// Using const (block-scoped, cannot be reassigned)
const country = "USA";
// country = "Canada"; // This would cause an error
console.log(country); // Output: USA

let message = "Hello"; // String
let count = 100; // Number
let isStudent = true; // Boolean`,
        quiz: {
            question: 'Which keyword is used to declare a variable whose value cannot be reassigned?',
            options: [
                { text: 'var', correct: false },
                { text: 'let', correct: false },
                { text: 'const', correct: true },
                { text: 'static', correct: false }
            ]
        }
    },
    {
        id: 'operators',
        title: 'JavaScript Operators',
        description: 'Learn about various operators in JavaScript for performing arithmetic, assignment, comparison, and logical operations.',
        content: `
            <p>Operators are special symbols used to perform operations on operands (values and variables).</p>
            <p><strong>1. Arithmetic Operators:</strong> Used to perform mathematical calculations.</p>
            <ul>
                <li><code>+</code> (Addition)</li>
                <li><code>-</code> (Subtraction)</li>
                <li><code>*</code> (Multiplication)</li>
                <li><code>/</code> (Division)</li>
                <li><code>%</code> (Modulus - remainder of division)</li>
                <li><code>**</code> (Exponentiation - ES2016)</li>
                <li><code>++</code> (Increment)</li>
                <li><code>--</code> (Decrement)</li>
            </ul>
            <p><strong>2. Assignment Operators:</strong> Used to assign values to variables.</p>
            <ul>
                <li><code>=</code> (Assignment)</li>
                <li><code>+=</code> (Add and assign, e.g., x += y is x = x + y)</li>
                <li><code>-=</code> (Subtract and assign)</li>
                <li><code>*=</code> (Multiply and assign)</li>
                <li><code>/=</code> (Divide and assign)</li>
                <li><code>%=</code> (Modulus and assign)</li>
                <li><code>**=</code> (Exponentiation and assign)</li>
            </ul>
            <p><strong>3. Comparison Operators:</strong> Used to compare two values and return a boolean (true or false).</p>
            <ul>
                <li><code>==</code> (Equal to - checks value only, performs type coercion)</li>
                <li><code>===</code> (Strictly equal to - checks value and type)</li>
                <li><code>!=</code> (Not equal to - performs type coercion)</li>
                <li><code>!==</code> (Strictly not equal to - checks value and type)</li>
                <li><code>></code> (Greater than)</li>
                <li><code><</code> (Less than)</li>
                <li><code>>=</code> (Greater than or equal to)</li>
                <li><code><=</code> (Less than or equal to)</li>
            </ul>
             <p><strong>4. Logical Operators:</strong> Used to combine or modify boolean expressions.</p>
            <ul>
                <li><code>&&</code> (Logical AND)</li>
                <li><code>||</code> (Logical OR)</li>
                <li><code>!</code> (Logical NOT)</li>
            </ul>
        `,
        exampleCode:
`// Arithmetic Operators
let sum = 10 + 5; // 15
let product = 4 * 3; // 12
let remainder = 10 % 3; // 1

// Assignment Operators
let x = 10;
x += 5; // x is now 15

// Comparison Operators
let a = 5;
let b = "5";
console.log(a == b);  // true (loose equality, type coercion)
console.log(a === b); // false (strict equality, different types)

// Logical Operators
let isSunny = true;
let isWarm = false;
console.log(isSunny && isWarm); // false (AND)
console.log(isSunny || isWarm); // true (OR)
console.log(!isSunny);          // false (NOT)`,
        quiz: {
            question: 'What is the result of <code>"5" == 5</code> in JavaScript?',
            options: [
                { text: 'true', correct: true },
                { text: 'false', correct: false },
                { text: 'TypeError', correct: false },
                { text: 'undefined', correct: false }
            ]
        }
    }
];

function getLessons() {
    return lessons;
}

function getLessonById(id) {
    return lessons.find(lesson => lesson.id === id);
}

console.log("lessons.js populated with initial data and functions.");
