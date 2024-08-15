console.log("Welcome to this magic eight ball application");

const first_name = "Ida";
const last_name = "Donkor";
const full_name = `${first_name} ${last_name}`;

let question = "Will it rain today?";

console.log(`Hello my name is ${full_name} and my question is:\n${question.toUpperCase()}`);

const random_number = Math.round(Math.random() * 6) + 2;

console.log(`The answer to your question is ${random_number % 7 === 0 ? 'Yes' : 'No'}`);

function app() {
    greeting("Ida", "Donkor", "Will it rain today?");

    const random_number = get_random_number();
    magic_eight_ball(random_number);
}

function greeting(first_name, last_name, question) {
    const full_name = `${first_name} ${last_name}`;
    console.log("Welcome to this magic eight ball application");
    console.log(`Hello my name is ${full_name} and my question is:\n${question.toUpperCase()}`);
}

function get_random_number() {
    const random_number = Math.round(Math.random() * 3) + 5;
    return random_number;
}

function magic_eight_ball(number_result) {
    switch (number_result) {
        case 1:
            console.log("Yes");
            break;
        case 2:
            console.log("No");
            break;
        case 3:
            console.log("Maybe");
            break;
        case 4:
            console.log("Ask again later");
            break;
        case 5:
            console.log("Definitely");
            break;
        case 6:
            console.log("I don't think so");
            break;
        case 7:
            console.log("Absolutely");
            break;
        case 8:
            console.log("Very doubtful");
            break;
        default:
            console.log("Not a valid case please use a number between 1 and 8");
    }
}
app();


