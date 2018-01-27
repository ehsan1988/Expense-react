import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export{firebase,database as default};



// database.ref('expenses').push({
//     description:'ehsan',
//     amount:1,
//     createdAt:2000,
//     note:'this is test note'
// })


// database.ref().set({
//     name: 'ehsan',
//     age: 29,
//     isSingle: true,
//     location: {
//         ciny: 'birjand',
//         contry: 'iran'
//     }
// }).then(() => {
//     console.log('all data set good')
// }).catch((e) => {
//     console.log(e);
// });

// database.ref('atrribute').set({
//     weight: 90,
//     heaight: 176
// })


// database.ref('isSingle').remove()
    // .then(() => {
    //     console.log('data is remove')
    // }).catch((e) => {
    //     console.log(e)
    // })