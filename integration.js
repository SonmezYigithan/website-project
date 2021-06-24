const email_newsletter = document.getElementById("email_newsletter")
// var axios = require('axios');

function subscribeMailingList() {
    
    if(email_newsletter.value != null){
        console.log(email_newsletter.value);

        axios({
            url: "https://ingest.encharge.io/v1",
            method: 'post',
            headers: { 
                "Content-Type": "application/json",
                'X-Encharge-Token': 'pBnTjHhozeRmGbWG4yJnyJdWg'
            },
            data: {
                name: "identify",
                user: {
                    "email": "jonsnow@thenorthremembers.com",
                    "userId": "1234567890",
                    "firstName": "Jon",
                    "lastName": "Snow"
            },
            }
          })
            .then(res => {
              console.log(`Axios Call completed: ${res}`)
            });

    }
    
}