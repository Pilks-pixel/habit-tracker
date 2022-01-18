async function requestLogin(e){
    e.preventDefault();
    try {
        const loginData = {
            // username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }
        console.log(options)
        const r = await fetch(`http://localhost:3000/auth/login`, options)
        const data = await r.json()
        console.log(data);
        if (data.err) { throw new Error('Login not authorised'); }
        // login(data.token);
        login(data)
    } catch (err) {
        console.warn(err);
    }
} 

async function requestRegistration(e) {
    e.preventDefault();
    try {
        const registerData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        }
        console.log(options);
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        console.log(data);
        if (data.err){ throw Error(data.err) }
        requestLogin(e);
    } catch (err) {
        console.warn(err);
    }
}

// function login(token){
//     const user = jwt_decode(token);
//     localStorage.setItem("token", token);
//     localStorage.setItem("username", user.username);
//     localStorage.setItem("userEmail", user.email);
//     window.location.hash = '#dashboard';
// }

// temporary until token will be ready
function login(data) {
    localStorage.setItem("username", data.user);
    console.log('local username',localStorage.getItem('username'))
    window.location.hash = '#dashboard';
}

function logout(){
    localStorage.clear();
    // console.log('Clear!')
    window.location.hash = '#';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}