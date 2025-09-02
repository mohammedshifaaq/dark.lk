 function toggleForms() {
            document.getElementById('loginForm').classList.toggle('hidden');
            document.getElementById('signupForm').classList.toggle('hidden');
        }

        // Login form submission
        const loginFormInner = document.getElementById("loginFormInner");
        const loginSuccess = document.getElementById("loginSuccess");

        loginFormInner.addEventListener("submit", async function (e) {
            e.preventDefault();
            const formData = new FormData(loginFormInner);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    loginSuccess.style.display = "block";
                    loginFormInner.reset();
                } else {
                    alert("Login submission failed!");
                }
            } catch (error) {
                alert("Login submission error!");
            }
        });

        // Sign-Up form submission
        const signupFormInner = document.getElementById("signupFormInner");
        const signupSuccess = document.getElementById("signupSuccess");

        signupFormInner.addEventListener("submit", async function (e) {
            e.preventDefault();
            const email = signupFormInner.email.value.toLowerCase();
            const name = signupFormInner.name.value;

            // One-time email check using localStorage
            let usedEmails = JSON.parse(localStorage.getItem("usedEmails") || "[]");
            if (usedEmails.includes(email)) {
                alert("This email has already been used!");
                return;
            }
            usedEmails.push(email);
            localStorage.setItem("usedEmails", JSON.stringify(usedEmails));

            const formData = new FormData(signupFormInner);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    signupSuccess.style.display = "block";
                    signupFormInner.reset();
                } else {
                    alert("Sign-Up submission failed!");
                }
            } catch (error) {
                alert("Sign-Up submission error!");
            }
        });