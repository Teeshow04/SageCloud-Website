document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.querySelector(".show-password");
    const formInput = document.querySelector("#password"); 
    const passwordIcon = togglePassword.querySelector("i"); 

    togglePassword.addEventListener("click", () => {
        const isPasswordHidden = formInput.getAttribute("type") === "password"; // Check if password is hidden

        // Toggle the password visibility by changing the input type
        formInput.setAttribute("type", isPasswordHidden ? "text" : "password");

        // Toggle the icon between eye and eye-slash
        passwordIcon.classList.toggle("fa-eye", !isPasswordHidden); 
        passwordIcon.classList.toggle("fa-eye-slash", isPasswordHidden);
    });
});