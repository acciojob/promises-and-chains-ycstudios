//your JS code here. If required.
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value); 
    if (!name || isNaN(age)) {
        alert('Please enter valid details.');
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});