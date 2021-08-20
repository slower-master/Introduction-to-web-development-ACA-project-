async function tokenPresence(){
    const result = await fetch('/api/checkValidity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('token')
        })
    }).then((res) => res.json())

    if (result.status === 'ok'){
        mainFunc(result);
    } else {
        redirect('/error');
    }
}

function mainFunc(result){
    // alert('Welcome to profile page!!')
    var data = document.querySelectorAll('.data');
    data[0].innerHTML = result.user.firstname;
    data[1].innerHTML = result.user.lastname;
    data[2].innerHTML = result.user.username;
    data[3].innerHTML = result.user.email;
}

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

function logoutFunction(){
    localStorage.clear();
    redirect('/');
}