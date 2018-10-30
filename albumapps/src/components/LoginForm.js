import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { CardSection, Card, Button, Field, Spinner } from './common';

const styles= {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    async onButtonPress() {
        const { email, password } = this.state;

        this.setState({ 
            error: '',
            loading: true
         });

        var userCredentials = await this.signIn(email, password);
        if (userCredentials)
        {
            this.onLoginSuccess();
        }else {
            this.onLoginFailed();
        }
    }

    async signIn(email, pssw){

        try {

            var userCredential = await firebase.auth().signInWithEmailAndPassword(email, pssw);
            return userCredential;

        } catch (error) {
            this.onLoginFailed.bind(this)
            console.log(' Error login ' + error);
            return null;
        }
    }

    onLoginFailed(){
        this.setState({
            loading: false,
            error: 'Authentication failed.'
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size={'small'}></Spinner>
        }
        return (
            <Button onPress={ this.onButtonPress.bind(this) }>
                Login
            </Button>
        );
    }

    render() {
        
        const { errorStyle } = styles;

        return(
            <Card>
                <CardSection>
                    <Field 
                        labelTitle="Email"
                        placeholder="user@domain.com"
                        textValue={this.state.email}
                        onChangeTextFuncion={email => this.setState({ email: email })}
                        />
                </CardSection>

                <CardSection>
                    <Field
                        secureTextEntry
                        labelTitle={'Password'}
                        placeholder="your password"
                        textValue={this.state.password}
                        onChangeTextFuncion={psw => this.setState({ password: psw })}
                        />
                </CardSection>

                <Text style={errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
}

