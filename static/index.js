document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#submit').disabled = true;
});

function validateForm(){
    var validate = false;

    const items_validate = document.querySelectorAll('.i_empty');

    items_validate.forEach(input => {
        console.log(input.value.length);
        if(input.value.length === 0){
            validate = true;
            alert("Completa el formulario.")
        }
    })

    document.querySelector('#submit').disabled = validate;
    
}
