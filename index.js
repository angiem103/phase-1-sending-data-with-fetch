// Add your code here


function submitData(userName, userEmail){

    const userData = {
        name: userName,
        email: userEmail,
    }
    
    const addingUser = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(userData)
    }

return fetch('http://localhost:3000/users', addingUser)
    .then(function(response) {
        console.log('I am here', response)
        return response.json()
    })
    .then(function(users) {
        console.log('i am the object', users)
        console.log('id', users.id)
        console.log('I am a document', document)
        console.log('body', document.body)
        document.body.innerHTML = users.id
    })
    
    .catch(function(error) {
        console.log('I am the error', error.message)
        document.body.innerHTML = error.message
    })
}