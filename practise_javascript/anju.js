function greet(name) {
    console.log("welcome to hii " + name);
}
greet("harsh");

// 1. Create and add HTML element to page
let heading = document.createElement("h2");
heading.textContent = "This heading was created by JavaScript!";
heading.style.color = "blue";
document.body.appendChild(heading);

// 2. Change existing element
document.querySelector("h1").style.color = "green";

// 3. Create a button dynamically
let btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";
btn.style.backgroundColor = "orange";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
document.body.appendChild(btn);

// 4. Add click event to button
btn.addEventListener("click", function() {
    let msg = document.createElement("p");
    msg.textContent = "You clicked the button at " + new Date().toLocaleTimeString();
    msg.style.color = "purple";
    msg.style.fontWeight = "bold";
    document.body.appendChild(msg);
});

// 5. Create a list dynamically
let list = document.createElement("ul");
let items = ["JavaScript", "HTML", "CSS", "React"];
items.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    li.style.padding = "5px";
    list.appendChild(li);
});
document.body.appendChild(list);

// 6. Set attribute
btn.setAttribute("title", "This button adds text below");
