import RestClient from 'react-native-rest-client';
 

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
        throw error;
    }
}

export var register = async function(regObj) {
    try {
    let response = await fetch('https://gugo-rpierre23.c9users.io/register', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(regObj)
    });
    let responseJson = await response.json();
    return responseJson;

    } catch(error){

        console.log(error);
        throw error;
    }
}

export var PullInterest = async function() {
    try {
    let response = await fetch('https://gugo-rpierre23.c9users.io/Meta/interest', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    });
    let responseJson = await response.json();
    return responseJson;

    } catch(error){

        console.log(error);
        throw error;
    }
}

