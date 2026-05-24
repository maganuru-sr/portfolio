fetch("http://localhost:5000/projects")
.then((res) => res.json())
.then((data) => {

    const container = document.getElementById("projects-container");

    data.forEach((project) => {

        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.tech}</p>
        `;

        container.appendChild(div);

    });

});


// CONTACT FORM CODE STARTS HERE

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    });

    const data = await response.text();

    alert(data);

    form.reset();

});