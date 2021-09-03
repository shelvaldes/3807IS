const emptyForm = document.getElementById('formContainer')

function validateField (event){
    let fieldValue = event.value
    let image = event.parentNode.children[2].children[0]
    let formField = event.parentNode.children[1]
    let errorBox = event.parentNode.children[3]
    //console.log(errorBox)
    if (fieldValue === ''){
        image.classList.remove("formfield__checkmark--unhide");
        formField.classList.remove("formfield__box--validated");
        formField.classList.add("formfield__box--error");
        errorBox.classList.add("form__error--unhide", "form__error--unhide::before", "miau");
        errorBox.classList.remove("form__error--hidden")
    }else{
        image.classList.add("formfield__checkmark--unhide");
        formField.classList.add("formfield__box--validated");
        formField.classList.remove("formfield__box--error");
        errorBox.classList.remove("form__error--unhide", "form__error--unhide::before");
        errorBox.classList.add("form__error--hidden")
    }
}

const makeForm = (label, id, placeholder) =>{
    const formFieldTemplate =
        `<div class="input-container">
            <label for="input${label}">${label}</label>
            <input id="input${id}" onblur="validateField(this)" type="text" placeholder="${placeholder}">
        
            <div class="checkmark-container">
                <img class="checkmark" id="img${id}" src="img/check-mark.svg" alt="checkmark">
            </div>
            <div class="form__error--hidden">This is the error message</div>
        </div>`
    
   //return formFieldTemplate
   emptyForm.innerHTML = emptyForm.innerHTML + formFieldTemplate
   
}



makeForm('First Name', 'FirstName', 'John')
makeForm('Last Name', 'LastName', 'Doe')
makeForm('Address', 'Address', '')

