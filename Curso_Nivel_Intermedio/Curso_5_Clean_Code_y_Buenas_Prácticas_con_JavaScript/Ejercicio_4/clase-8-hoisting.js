/*greet()

function greet() {
    let greeting = "Hello World"
    console.log(greeting)
} */

var greet = 'Saludo';

(
    function() {
        console.log(greet)
        var greet = "Hi"
        console.log(greet)
    }
)()