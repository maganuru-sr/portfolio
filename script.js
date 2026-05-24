fetch("https://portfolio-8pkd.onrender.com/projects")
.then((res) => res.json())
.then((data) => {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    data.forEach((project) => {

        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.tech}</p>
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

    const response = await fetch("https://portfolio-8pkd.onrender.com/contact", {

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