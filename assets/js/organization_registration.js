const form = document.querySelector(".form");
const register = document.querySelector("#register");

const doregister = ()=>{
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cause = document.getElementById('cause').value;
    const instagram = document.getElementById('instagram').value;
    const twitter = document.getElementById('twitter').value;
    const facebook = document.getElementById('facebook').value;
    const password = document.querySelector("#password").value;

    if (name === '' || email === '' || phone === '' || cause === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }
    
    if(name.length && email.length){
        fetch("http://localhost:3000/register?usertype=organization", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phone, address, cause, instagram, twitter, facebook, password})
        }).then(response=> {
            if (response.ok) {
                response.json().then(data=> {window.userid = data.id})
                .catch(console.log);
                window.location.href = 'organization.html';
                // userid = respon
            } else {
                response.json().then(data=> {alert(data)})
                .catch(console.log);
                // alert("Invalid login details!");
            }
        })
        .catch(console.log());
    }
}
    
form.addEventListener("submit", (e)=>e.preventDefault());
register.addEventListener("click", doregister);

