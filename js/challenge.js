let interval_id; 
let state = 1;
let nums = [];
let likes = [];

function on(){
    document.getElementById("plus").addEventListener("click", incrementTime);
    document.getElementById("minus").addEventListener("click", decrementTime);
    document.getElementById("heart").addEventListener("click", addLikeCounter);
    document.getElementById("submit").removeEventListener("click", stopSubmit);
    document.getElementById("submit").addEventListener("click", postComment);
    document.getElementById("pause").addEventListener("click", pause);
    interval_id = setInterval(incrementTime, 1000);
}

function off(){
    document.getElementById("plus").removeEventListener("click", incrementTime);
    document.getElementById("minus").removeEventListener("click", decrementTime);
    document.getElementById("heart").removeEventListener("click", addLikeCounter);
    document.getElementById("submit").removeEventListener("click", postComment);
    document.getElementById("submit").addEventListener("click", stopSubmit);
    clearInterval(interval_id);
}

function incrementTime(){
    let t = document.getElementById("counter");
    let s = parseInt(t.innerText);
    t.innerText = s+1;
}

function decrementTime(){
    let t = document.getElementById("counter");
    let s = parseInt(t.innerText);
    t.innerText = s-1;
}

function addLikeCounter(){
    let ul = document.querySelector(".likes");
    let t = document.getElementById("counter");
    let s = parseInt(t.innerText);

    if (!nums.includes(s)){
        let newLi = document.createElement('LI');
        newLi.setAttribute("id", s);
        newLi.innerHTML = `${s} has been liked 1 times`;
        ul.appendChild(newLi);
        nums.push(s);
        likes.push(1);
    }else{
        let li = document.getElementById(`${s}`);
        let index = nums.indexOf(s);
        likes[index] = likes[index]+1;
        li.innerHTML = `${s} has been liked ${likes[index]} times`;
    }
}

function pause(){
    if(state == 1){
        off();
        document.getElementById("pause").innerHTML = `resume`;
        state = 0;
    }else{
        on();
        document.getElementById("pause").innerHTML = `pause`;
        state = 1;
    }
}

function postComment(e){
    e.preventDefault();
    let c = document.getElementById("comment-input").value;
    let div = document.getElementById("comment-form");
    let newC = document.createElement('P');
    newC.innerHTML = c;
    div.appendChild(newC);
}

function stopSubmit(e){
    e.preventDefault();
}
   


document.addEventListener("DOMContentLoaded", function() {
    on();
});

 




