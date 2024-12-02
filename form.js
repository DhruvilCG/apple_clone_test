let buttonVal = document.getElementById('button1');

buttonVal.addEventListener('click', () => {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;

    // Save the values in localStorage
    localStorage.setItem("name", username);
    localStorage.setItem("PassWord", pass);
    localStorage.setItem("Email", email);
});
