const textArea =document.getElementById("textarea");
const totalChar = document.getElementById('totChar');
const remainChar = document.getElementById('reChar');


textArea.addEventListener('keyup', ()=>{
    updateCounter()
})


updateCounter();

function updateCounter(){
totalChar.innerText= textArea.value.length;
remainChar.innerText= textArea.getAttribute('maxLength') -  textArea.value.length;
}