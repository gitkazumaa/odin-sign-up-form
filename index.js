const passwordMatch = () => {
    if (document.getElementById("password").value == document.getElementById("confirm_password").value) {
        document.getElementById("password-match-text").style.visibility = "hidden";
    } else {
        document.getElementById("password-match-text").style.visibility = "visible";
    }
}