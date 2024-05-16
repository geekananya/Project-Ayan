const logout = document.querySelector(".logout");


const doLogout = () => {
    window.userid = 0;
    window.location.href = 'index.html';
}

logout.addEventListener("click", doLogout);