async function getAllUserHabits(){
    try {
        const options = {
            headers: {
                'authorization': localStorage.getItem('token'),
                'Content-Type': "application/json"
            }
        }
        console.log(options)
        const response = await fetch('http://localhost:3000/habitplans', options);
        const data = await response.json();
        if(data.err){
            console.warn(data.err);
            logout();
        }
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getAllHabits(){
    try {
        const options = {
            headers: {
                'authorization': localStorage.getItem('token'),
                'Content-Type': "application/json"
            }
        }
        console.log(options)
        const response = await fetch('http://localhost:3000/habits', options);
        const data = await response.json();
        if(data.err){
            console.warn(data.err);
            logout();
        }
        return data;
    } catch (err) {
        console.warn(err);
    }
}