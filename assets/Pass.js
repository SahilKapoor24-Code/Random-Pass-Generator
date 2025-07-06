const passwordbox = document.getElementById("password");
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&*?";
const allchar = uppercase + lowercase + symbol + number;
function createpass() {         //random password will generate with this function
    let password = "";
    password += uppercase[Math.floor((Math.random()) * uppercase.length)];
    password += lowercase[Math.floor((Math.random()) * lowercase.length)];
    password += number[Math.floor((Math.random()) * number.length)];
    password += symbol[Math.floor((Math.random()) * symbol.length)];
    while (length > password.length) {
        password += allchar[Math.floor((Math.random()) * allchar.length)];
    }

    passwordbox.value = password;
}

//copy password
function copypass() {
    passwordbox.select();
    document.execCommand("copy");

}