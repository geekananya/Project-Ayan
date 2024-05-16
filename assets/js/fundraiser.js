const fund_form = document.querySelector("#fund-form");
const form = document.querySelector(".form");
const raise = document.querySelector("#raise");
const funds = document.querySelector("#funds");
const msg = document.querySelector(".fund-msg");

// window.userid = 0;

const dologin = ()=>{
    const title = document.querySelector("#title").value;
    const goal = document.querySelector("#goal").value;
    const description = document.querySelector("#description").value;
    const info = document.querySelector("#info").value;
    const link = document.querySelector("#link").value;
    
    if(title.length && goal.length && description){
        fetch("http://localhost:3000/start-fundraiser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, goal, description, info, link})
        }).then(response=> {
            // console.log(response)
            if (response.ok) {
                response.json().then(data=> {
                    // window.userid = data.id
                    // if(data.type === 'Volunteer')
                    //     window.location.href = 'volunteer.html';
                    // else
                    //     window.location.href = 'organization.html';
                    msg.classList.add('makevisible');
                    fund_form.classList.add('invisible');
                    console.log(data);
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
funds.addEventListener("click", ()=>{
    fund_form.classList.add('makevisible');
    msg.classList.add('invisible');
});

