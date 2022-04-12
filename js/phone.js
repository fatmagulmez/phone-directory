let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('#alert')

const alertFuction = (title , message) => `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
     <strong>${title}</strong> ${message}
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


function formHandler (event){
    event.preventDefault()                // form submit edildiğinde tarayıcının yenilenmesi engellendi
    const FİRST_NAME = document.querySelector ('#firstName')
    const LAST_NAME = document.querySelector ('#lastName')
    const PHONE_NUMBER = document.querySelector ('#phone')
    if(FİRST_NAME.value && LAST_NAME.value && PHONE_NUMBER.value){
        addItem(FİRST_NAME.value, LAST_NAME.value , PHONE_NUMBER.value) // bilgi gönderildikten sonra sifirlandi
        FİRST_NAME.value = ""
        LAST_NAME.value = ""
        PHONE_NUMBER.value = ""
    }else{
        alertDOM.innerHTML = alertFuction("Hoşgeldiniz !" , "Eksik Bilgi Girdiniz !")
    }
}

let userListDOM = document.querySelector ('#userList')

const addItem = (firstName ,lastName , phone) => {
    
    let liDOM = document.createElement('li')
    liDOM.innerHTML = ` ${firstName} ${lastName}
    <span class="badge bg-primary rounded-pill">${phone}</span>  `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}

