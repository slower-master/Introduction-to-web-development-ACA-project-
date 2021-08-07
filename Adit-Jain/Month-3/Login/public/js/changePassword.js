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

async function tokenPresence(){
    const resu = await fetch('/api/checkValidity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('token')
        })
    }).then((res) => res.json())

    if (resu.status === 'ok'){
        mainFunc(resu);
    } else {
        redirect('/error');
    }
}

function mainFunc(resu){
    const form = document.getElementById('changeForm');
    form.addEventListener('submit', changePassFunc);

    document.querySelector('h2').innerHTML = resu.user.firstname + ' ' + resu.user.lastname;

    // 1. Send data as JSON (JavaScript) 
    // 2. Send data as urlencoded (PHP)
    async function changePassFunc(event){
        event.preventDefault();
        const password = document.getElementById('password').value;

        const result = await fetch('/api/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newPassword: password,
                token: localStorage.getItem('token')
            })
        }).then((res) => res.json())

        if (result.status === 'ok'){
            //! Means everything went fine..
            alert('Password Changed Successfully!!');
            redirect('/profile')
        } else {
            //! Mtlb, kuch toh locha h..
            alert(result.error);
        }

        console.log(result);
    }
}