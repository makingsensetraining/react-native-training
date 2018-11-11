import firebase from 'firebase';

export function initialize(){
    firebase.initializeApp({
        apiKey: 'AIzaSyCTJgTf8cjt-s-bD1-Pf4vWMGmi4KtmCDQ',
        authDomain: 'albumauth-c48a2.firebaseapp.com',
        databaseURL: 'https://albumauth-c48a2.firebaseio.com',
        projectId: 'albumauth-c48a2',
        storageBucket: 'albumauth-c48a2.appspot.com',
        messagingSenderId: '1072928945232'
      });
}

export function signIn(email, pssw) {

    try {

        var userCredential = firebase.auth().signInWithEmailAndPassword(email, pssw);
        return userCredential;

    } catch (error) {
        console.log(' Error login ' + error);
        return null;
    }
}