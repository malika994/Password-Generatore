let passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&";

function generatePassword(l) {
    let randomPass = '';
    for (let i = 0; i < l; i++) {

        let randomN = Math.floor(Math.random() * passChars.length);
        randomPass += passChars.charAt(randomN);

    }
    return randomPass;
}
let password = generatePassword(7);
console.log(`Generated password: ${password}`);