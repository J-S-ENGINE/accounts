// This function gets the value from the text input and uses it in a prompt
function showPromptWithInput() {
    // 1. Get the value from the text input field
    const inputValue = document.getElementById('myInput').value;

    // 2. Use the inputValue as the default value for the prompt
    //    The syntax is: prompt("Your message", "Default value");
    const promptResult = prompt("The text from your input is below:", inputValue);

    // 3. Show the result to the user to prove it worked
    if (promptResult !== null) {
        alert("You entered: " + promptResult);
    } else {
        alert("You cancelled the prompt.");
    }
}
