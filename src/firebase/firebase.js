import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCHD40i-g1l1pcBAvOYw_HFFUMfGprwPwI",
    authDomain: "expense-app-46d95.firebaseapp.com",
    databaseURL: "https://expense-app-46d95.firebaseio.com",
    projectId: "expense-app-46d95",
    storageBucket: "expense-app-46d95.appspot.com",
    messagingSenderId: "868110838179"
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