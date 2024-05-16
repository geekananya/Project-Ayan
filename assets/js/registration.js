const form = document.querySelector(".form");
const register = document.querySelector("#register");

const doregister = ()=>{
    const name = document.querySelector("#firstName").value+document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const occupation = document.getElementById('occupation').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const password = document.querySelector("#password").value;

    if (name === '' || email === '' || phone === '' || occupation === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }
    
    if(name.length && email.length){
        fetch("http://localhost:3000/register?usertype=volunteer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phone, address, occupation, password, gender})
        }).then(response=> {
            if (response.ok) {
                response.json().then(data=> {window.userid = data.id})
                .catch(console.log);
                window.location.href = 'index.html';
                // userid = respon
            } else {
                alert("Invalid login details!");
            }
        })
        .catch(console.log());
    }
}
    
form.addEventListener("submit", (e)=>e.preventDefault());
register.addEventListener("click", doregister);

