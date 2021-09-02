const labels = [
    'First Name',
    'Last Name',
    'Address'
]

const placeholders = [
    'John',
    'Doe',
    'Your Address'
]

const emptyForm = document.getElementById('formContainer')

function validateField (event){
    let fieldValue = event.value
    let image = event.parentNode.children[2].children[0]
    let formField = event.parentNode.children[1]
    console.log(formField)
    if (fieldValue === ''){
        image.classList.remove("unhide");
        formField.classList.remove("validated")
    }else{
        image.classList.add("unhide");
        formField.classList.add("validated")
    }
}

const makeForm = (label, id, placeholder) =>{
    const formFieldTemplate =
        `<div class="input-container">
        <label for="input${label}">${label}</label>
        <input id="input${id}" onfocusout="validateField(this)" type="text" placeholder="${placeholder}">
        
        <div class="checkmark-container">
        <img class="checkmark" id="img${id}" src="img/check-mark.svg" alt="checkmark">
        </div>
    </div>`
    
   //return formFieldTemplate
   emptyForm.innerHTML = emptyForm.innerHTML + formFieldTemplate
   
}



makeForm('First Name', 'FirstName', 'John')
makeForm('Last Name', 'LastName', 'Doe')
makeForm('Address', 'Address', '')

