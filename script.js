
let students = JSON.parse(localStorage.getItem("students")) || [];
let applications = JSON.parse(localStorage.getItem("applications")) || [];
let loggedInStudent = null;

function searchScholarships() {
    let search = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(search)
            ? "block" : "none";
    });
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        password: document.getElementById("password").value
    };

    if (students.some(s => s.email === student.email)) {
        document.getElementById("registerMessage").innerText =
            "Email already registered!";
        return;
    }

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("registerMessage").innerText =
        "Registration successful!";

    this.reset();
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let student = students.find(s =>
        s.email === email && s.password === password
    );

    if (student) {
        loggedInStudent = student;
        document.getElementById("loginMessage").innerText =
            "Login successful!";

        showDashboard();
    } else {
        document.getElementById("loginMessage").innerText =
            "Invalid email or password!";
    }
});

function applyScholarship(name) {
    if (!loggedInStudent) {
        alert("Please login first!");
        location.href = "#login";
        return;
    }

    document.getElementById("appName").value = loggedInStudent.name;
    document.getElementById("appEmail").value = loggedInStudent.email;
    document.getElementById("appScholarship").value = name;

    location.href = "#application";
}

document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (!loggedInStudent) {
        alert("Please login first!");
        return;
    }

    let application = {
        name: document.getElementById("appName").value,
        email: document.getElementById("appEmail").value,
        scholarship: document.getElementById("appScholarship").value,
        income: document.getElementById("income").value,
        reason: document.getElementById("reason").value,
        status: "Pending"
    };

    applications.push(application);

    localStorage.setItem("applications", JSON.stringify(applications));

    document.getElementById("applicationMessage").innerText =
        "Application submitted successfully!";

    this.reset();
    showDashboard();
});

function showDashboard() {
    if (!loggedInStudent) return;

    let myApps = applications.filter(app =>
        app.email === loggedInStudent.email
    );

    let output = `<h3>Welcome ${loggedInStudent.name}</h3>`;

    if (myApps.length === 0) {
        output += "<p>No applications submitted yet.</p>";
    } else {
        myApps.forEach(app => {
            output += `
                <div class="card">
                    <h3>${app.scholarship}</h3>
                    <p>Status: ${app.status}</p>
                </div>
            `;
        });
    }

    document.getElementById("dashboardContent").innerHTML = output;
}
