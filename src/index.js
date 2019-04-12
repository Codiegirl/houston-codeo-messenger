const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  const form = document.querySelector('#message_form')
  form.addEventListener('submit', function(e){
  e.preventDefault()
  
  createNewMessage()
})
  
  
  
const input = document.querySelector('#message_input')



 fetch(messagesURL)
    .then(function(response){
      return response.json()
    })
    .then(function(messageData){
     messageData.forEach(function(message){
      new Message(message.content)
    })
  })

  


const createNewMessage = function() {
  
  fetch (messagesURL,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      content: input.value
      
      })
  })
  .then(function(response){
    return response.json()
  })
  .then(function(message){
   //do something with the response
    
    new Message (message.content) //Object of new Message needs content as its
  })//display the new message conttn
}
})//when creating a new message, i need get the content of the return value 
//because


