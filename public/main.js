const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')


update.addEventListener('click', _ => {
    // send put request here 
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
        })
    })
})


deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(data => {
            window.location.reload()
        })
})

const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
    fetch(/* ... */)
        .then(/* ... */)
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No Darth Vadar quote to delete'
            } else {
                window.location.reload(true)
            }
        })
        .catch(/* ... */)
})