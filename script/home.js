

// I'll separate this script because applying it to other pages breaks the dark mode.
// due to added container hide/show

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const body = document.body;
    const hideShow = document.getElementById("hideShow"); // Added container
    const paragraphs = document.querySelectorAll("p");
    const h3 = document.querySelectorAll("h3");
    const h6 = document.querySelectorAll("h6");
    const divContainer = document.querySelectorAll("#divContainer");
    const firstfooter = document.querySelectorAll("#ffooter");
    const footerA = document.querySelectorAll(".footer-a");
    const footerIMG = document.querySelectorAll(".IMG");
    const secondfooter = document.querySelectorAll("#sfooter");
    const listItems = document.querySelectorAll("li");
    const button = document.querySelectorAll(".btn-text");
    const btn = document.querySelectorAll(".btn-outline-dark");


    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.style.backgroundColor = "#151623";
            body.style.color = "#fff";
            hideShow.style.display = "block"; // Show container

            h3.forEach(h => h.style.color = "#fff");

            h6.forEach(h => h.style.color = "#fff");
            
            paragraphs.forEach(p => p.style.color = "#fff");

            divContainer.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });
            

            listItems.forEach(li => li.style.color = "#fff");
            

            button.forEach(button => {
                button.style.color = "#fff";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #fff";
            });

            footerA.forEach(div => {
                div.style.color = "#fff";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(1)";
            
            });

            
            firstfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#272935";
                div.style.color = "#fff";
            
            });

        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            hideShow.style.display = "none"; // Hide container

            h3.forEach(h => h.style.color = "black");

            h6.forEach(h => h.style.color = "#5E5E5E");
            
            
            paragraphs.forEach(p => p.style.color = "black");

            button.forEach(button => {
                button.style.color = "#000";
            });

            btn.forEach(btn => {
                btn.style.border = "1px solid #000";
            });
            
            
            listItems.forEach(li => li.style.color = "black");

            divContainer.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "black";
            });

            firstfooter.forEach(div => {
                div.style.backgroundColor = "#F8F8F8";
                div.style.color = "#fff";
            
            });

            footerA.forEach(div => {
                div.style.color = "#000";
            
            });

            footerIMG.forEach(div => {
                div.style.filter = "invert(0)";
            
            });

            secondfooter.forEach(div => {
                div.style.backgroundColor = "#000";
                div.style.color = "#fff";
            
            });
            
        }
    });
});
