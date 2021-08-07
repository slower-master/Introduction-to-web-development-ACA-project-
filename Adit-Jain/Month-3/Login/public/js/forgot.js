function redirect(url){
    var form = document.createElement('form');
    form.style.position = 'absolute';
    form.style.top = '-500px';
    form.style.left = '-500px';
    form.method = 'GET';
    form.action = url;
    document.querySelector('body').appendChild(form);
    form.submit();
}

const form = document.querySelector('form');
form.addEventListener('submit', resetPass);

async function resetPass(event){
    event.preventDefault();
    const email = document.getElementById('email').value;

    const result = await fetch('/api/forgotPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    }).then((res) => res.json())

    if (result.status === 'ok'){
        alert(`If ${result.email} was accepted, a mail containing New Password was sent.`);
        redirect('/login');
    }
}