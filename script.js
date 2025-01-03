// Get references to elements
const numberList = document.getElementById("numberList");
const rollButton = document.getElementById("rollButton");
const resultDiv = document.getElementById("result");
const diceFacesTextarea = document.getElementById("diceFaces");

// Generate the list of numbers
const totalFaces = 20; // Adjust this for any number of faces
function generateNumberList() {
    numberList.innerHTML = ""; // Clear any existing content
    for (let i = 1; i <= totalFaces; i++) {
        const p = document.createElement("p");
        p.textContent = i;
        numberList.appendChild(p);
    }
}
generateNumberList();

// Handle dice roll
rollButton.addEventListener("click", () => {
    const customFaces = diceFacesTextarea.value
        .trim()
        .split("\n")
        .filter(face => face.length > 0); // Split input into lines

    const randomIndex = Math.floor(Math.random() * totalFaces);
    const result = customFaces[randomIndex];
    resultDiv.textContent = `You rolled: ${result}`;
});