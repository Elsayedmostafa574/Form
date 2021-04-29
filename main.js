const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const btnin = document.getElementById('btn-in');
const btnup = document.getElementById('btn-up');
btnin.onclick = function(){
    signin.classList.add('show1')
    signup.classList.remove('show2')
    
}
btnup.onclick = function(){
    signup.classList.add('show2')
    signin.classList.remove('show1')
    
}