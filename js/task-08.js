const registerForm = document.querySelector('.login-form');

const usersDatabase = {}; 

registerForm.addEventListener('submit', e => {
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value === "" ||
        event.currentTarget.elements.password.value === "") {
        return alert("Please fill in all the fields!");
    }

    usersDatabase.email = event.currentTarget.elements.email.value
    usersDatabase.password = event.currentTarget.elements.password.value
    console.log(usersDatabase);

    event.currentTarget.reset();
});