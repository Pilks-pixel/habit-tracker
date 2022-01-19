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
        console.log("login with data",data);
        if (data.err) { throw new Error('Login not authorised'); }
        // login(data.token);
        login(data.authorization);
        // login(data)
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

function login(token){
    const user = jwt_decode(token);
    // let payload = JSON.parse(window.atob(token.split('.')[1])); 
    console.log("token", token)
    console.log("user", user)
    // let payload2 = JSON.parse(window.atob(token)); 
    // const t = jwtDecode(token);
    // console.log("payload1", t)
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("userEmail", user.email);
    console.log(localStorage)
    window.location.hash = '#dashboard';
}

// temporary until token will be ready
// function login(data) {
//     localStorage.setItem("username", data.user);
//     console.log('local username',localStorage.getItem('username'))
//     window.location.hash = '#dashboard';
// }

function logout(){
    localStorage.clear();
    // console.log('Clear!')
    window.location.hash = '#';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

function jwtDecode(t) {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    console.log("header", token.header)
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    console.log("payload", token.payload)
    return (token)
  }