const form = document.getElementById('regForm');
form.addEventListener('submit', registerUser);

// 1. Send data as JSON (JavaScript) 
// 2. Send data as urlencoded (PHP)
async function registerUser(event){
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            username,
            password
        })
    }).then((res) => res.json())

    if (result.status === 'ok'){
        //! Means everything went fine..
        alert(`Username ${username} created successfully!!`);
    } else {
        //! Mtlb, kuch toh locha h..
        alert(result.error);
    }

    console.log(result);
}