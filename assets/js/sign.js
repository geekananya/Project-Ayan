const form = document.querySelector(".form");
const login = document.querySelector("#login");

// window.userid = 0;

const dologin = ()=>{
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;
    
    if(email.length && pass.length){
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        }).then(response=> {
            // console.log(response)
            if (response.ok) {
                response.json().then(data=> {
                    window.userid = data.id
                    if(data.type === 'Volunteer')
                        window.location.href = 'volunteer.html';
                    else
                        window.location.href = 'organization.html';
                })
                .catch(console.log);
                // userid = respon
            } else {
                alert("Invalid login details!");
            }
        })
        .catch(console.log());
    }
}

form.addEventListener("submit", (e)=>e.preventDefault());
login.addEventListener("click", dologin);

