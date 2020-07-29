const formDelete = document.getElementById('form-delete')
formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Deseja Deletar?")
    if(!confirmation) {
        event.preventDefault()
    }
})