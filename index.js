let addBtn = document.getElementById('plus');
let subtractBtn = document.getElementById('minus');
let clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', () => {
    addValue();
});

subtractBtn.addEventListener('click', () => {
    let num = document.getElementById('counterInputBox').value;
    if(num == 0){
        return;
    }
    document.getElementById('counterInputBox').value = num - 1;
});

clearBtn.addEventListener('click', () => {
    document.getElementById('counterInputBox').value = 0;
});

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32  
       
    ) { 
        addValue();
    }
}

function addValue(){
    let num = document.getElementById('counterInputBox').value;
    document.getElementById('counterInputBox').value = parseInt(num) + 1;
}