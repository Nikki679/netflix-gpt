export const checkValidateData = (email, password) => {
const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;'"<>,.?/-]).{8,}$/.test(password);

if(!isValidEmail)
{
    return "Email is not valid"
}
if(!isValidPassword)
{
    return "password is not valid"
}

return null;
}

