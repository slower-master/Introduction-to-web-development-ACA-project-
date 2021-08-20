const form = document.getElementById('loginForm');
form.addEventListener('submit', loginUser);

// 1. Send data as JSON (JavaScript) 
// 2. Send data as urlencoded (PHP)
async function loginUser(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res) => res.json())

    if (result.status === 'ok'){
        //! Means everything went fine..
        console.log('Got the token: ', result.data);
        localStorage.setItem('token', result.data);
        // alert('Successfully Logged In!!');
        var redirect = function(url) {
            var form = document.createElement('form');
            form.style.position = 'absolute';
            form.style.top = '-500px';
            form.style.left = '-500px';
            form.method = 'GET';
            form.action = url;
            document.querySelector('body').appendChild(form);
            form.submit();
        };
        
        redirect('/profile');
    } else {
        //! Mtlb, kuch toh locha h..
        alert(result.error);
    }

    console.log(result);
}