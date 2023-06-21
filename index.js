const passwordMatch = () => {
    if (document.getElementById("password").value == document.getElementById("confirm_password").value) {
        console.log("Passwords match!");
    } else {
        console.log("Passwords do not match!");
    }
}