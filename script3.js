document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("button");
    const input = document.getElementById("text");
    const body = document.body;

    addButton.addEventListener("click", () => {
        const color = input.value.trim(); 

        if (color) {
            if (isValidColor(color)) {
                body.style.backgroundColor = color; 
                console.log(`Background color changed to: ${color}`);
            } else {
                alert(`"${color}" өнгө буруу оруулсан бнөө`);
            }
            input.value = ""; 
        } else {
            console.log("Input is empty.");
        }
    });
    function isValidColor(color) {
        const tempElement = document.createElement("div");
        tempElement.style.backgroundColor = color;
        return tempElement.style.backgroundColor !== "";
    }
});
