import RestClient from 'react-native-rest-client';
 
// export default class YourRestApi extends RestClient {
//   constructor () {
//     // Initialize with your base URL 
//     super('https://gugo-rpierre23.c9users.io');
//   }
//   // Now you can write your own methods easily 
//  login = function(username, password) {
//     // Returns a Promise with the response. 
//     return this.POST('/login', { username, password });
//   }
//  getCurrentUser = () => {
//     // If the request is successful, you can return the expected object 
//     // instead of the whole response. 
//     return this.GET('/auth')
//       .then(response => response.user);
//   }
// };


export var login = async function(user,password) {
    try {
    let response = await fetch('https://gugo-rpierre23.c9users.io/login', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        UserName: user,
        Password: password,
    }),
    });
    let responseJson = await response.json();
    return responseJson;

    } catch(error){

        console.log(error);
    }
}
