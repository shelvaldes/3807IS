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

const makeForm = (label, placeholder) =>{
    const formFieldTemplate =
        `<div class="input-container">
        <label for="input${label}">${label}</label>
        <input id="inputName" type="text" placeholder="${placeholder}">
        <div class="checkmark-container">
            <img class="checkmark" src="img/check-mark.svg" alt="checkmark">
        </div>
    </div>`
    
   //return formFieldTemplate
   emptyForm.innerHTML = emptyForm.innerHTML + formFieldTemplate
   
}

makeForm('First Name', 'Juan')
makeForm('Last Name', 'Pérez')
makeForm('Address', 'Your Address')

