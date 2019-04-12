class Message{
        constructor(content){
            const messages = document.querySelector('#messages')
            const li = document.createElement('li')
            messages.append(li)
            li.innerText = content 
        }

        // createNewMessage(e) {
        //       e.preventDefault()
        //       fetch (messagesURL,{
        //         method: "POST"cx,
        //         headers: {
        //           "Content-Type" : "application/json"
        //         },
        //         body: JSON.stringify({
        //           content: content,
                  
        //           })
        //       })
        //       .then(function(response){
        //         return response.json()
        //       })
        //       .then(function(response){
        //         console.log(response)
                
        //         createNewMessage(response)
              }
            
    
