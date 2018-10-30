import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import AlbumList from './src/components/AlbumsList';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  state= {
    loggedIn: null
  };

  componentDidMount(){

    // initializeFirebase();
    firebase.initializeApp({
      apiKey: 'AIzaSyCTJgTf8cjt-s-bD1-Pf4vWMGmi4KtmCDQ',
      authDomain: 'albumauth-c48a2.firebaseapp.com',
      databaseURL: 'https://albumauth-c48a2.firebaseio.com',
      projectId: 'albumauth-c48a2',
      storageBucket: 'albumauth-c48a2.appspot.com',
      messagingSenderId: '1072928945232'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });
      } else{
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <View>

            <CardSection>
              <Button isSignOut={true} onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>

            <AlbumList />

          </View>);
          
      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large'/>;
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header headerText={'Welcome'}/>
        {this.renderContent()}
      </View>
    );
  }
}
