
document.addEventListener("DOMContentLoaded", function () {

    // 1. Scholarship Search Event
    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("input", function () {
            const value = search.value.toLowerCase();
            const cards = document.querySelectorAll(".card");

            cards.forEach(function (card) {
                card.style.display =
                    card.innerText.toLowerCase().includes(value)
                    ? ""
                    : "none";
            });
        });
    }

    // 2. Registration Form Event
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            if (!name || !email || !password) {
                alert("Please fill all required fields.");
                return;
            }

            alert("Registration form submitted successfully!");
            registerForm.reset();
        });
    }

    // 3. Login Form Event
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (!email || !password) {
                alert("Please enter email and password.");
                return;
            }

            alert("Login form submitted successfully!");
            loginForm.reset();
        });
    }

    // 4. Apply Button Click Event
    document.addEventListener("click", function (event) {
        const button = event.target.closest(".apply-btn");

        if (button) {
            const scholarship =
                button.dataset.scholarship || button.innerText.trim();

            const field = document.getElementById("appScholarship");

            if (field) {
                field.value = scholarship;
            }

            alert("Selected scholarship: " + scholarship);
        }
    });

    // 5. Application Form Submit Event
    const applicationForm = document.getElementById("applicationForm");

    if (applicationForm) {
        applicationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("appName").value.trim();
            const email = document.getElementById("appEmail").value.trim();
            const scholarship =
                document.getElementById("appScholarship").value.trim();
            const reason = document.getElementById("reason").value.trim();

            if (!name || !email || !scholarship || !reason) {
                alert("Please fill all application details.");
                return;
            }

            if (reason.length < 10) {
                alert("Reason must contain at least 10 characters.");
                return;
            }

            alert("Application submitted successfully!");
            applicationForm.reset();
        });
    }

    // 6. Admin Scholarship Form Event
    const scholarshipForm = document.getElementById("scholarshipForm");

    if (scholarshipForm) {
        scholarshipForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const title =
                document.getElementById("scholarshipTitle").value.trim();

            if (!title) {
                alert("Please enter scholarship title.");
                return;
            }

            alert("Scholarship details submitted successfully!");
            scholarshipForm.reset();
        });
    }

    // 7. Edit and Delete Button Events
    document.addEventListener("click", function (event) {

        if (event.target.closest(".edit-btn")) {
            alert("Edit button clicked!");
        }

        if (event.target.closest(".delete-btn")) {
            if (confirm("Are you sure you want to delete?")) {
                alert("Delete confirmed!");
            }
        }
    });

    // 8. Application Status Change Event
    document.addEventListener("change", function (event) {

        if (event.target.matches(".status-select")) {
            alert("Status changed to: " + event.target.value);
        }
    });

    console.log("All event handlers loaded successfully!");

});
