//Variables = Similar to a Pokémon Ball
studentName = "Ananswer" /*String*/
score = 9.7 /*Float*/
payrollCurrency = "$" /*Character*/
inZoomClass = true /*Boolean true|false*/
number = 72 /*Integer*/

console.log("This is a Simple Log")

console.log("Student name is:", studentName, "they have the score in Html/Css of:", score)

function rePaint() {
    console.error("This is an Error");
    alert("this is the Alert Function");
    console.log(Math.random() * 12);
    document.getElementById("Body").style.color = randomColor();
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


/*
Function should go inside the html document, and scan the input-field for text, and if there's text, then the text will be converted into
a TextNode: which is a basically a 2D Text Layer and assign it as
child of <ul></ul>
*/


function addTodo() {
//create a 2D TextLayer from the Input field text, inputted by user
    var inputFieldText = document.getElementById("myInput").value;
    console.log(inputFieldText);
//create an empty html list item
    var textNodeInputField = document.createTextNode(inputFieldText);
//append the 2D text layer inside the empty list item
    var createListItemElement = document.createElement("li");
    createListItemElement.appendChild(textNodeInputField);
//append the list item as a child in the html List
    document.getElementById("myUL").appendChild(createListItemElement);
}

