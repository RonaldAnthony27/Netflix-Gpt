const isValid = (email,password) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailRegex)return "Email is not Valid"
    if(!passwordRegex)return "Password is not Valid"
    return (null);
}
export default isValid; 