async function getAllHabits(){
    try {
        const options = {
            header: new Header({'authorization': localStorage.getItem('token')}),
        }
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