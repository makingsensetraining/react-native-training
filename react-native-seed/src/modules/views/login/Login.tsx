import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

import { Field, Card, CardSection, Button, Spinner } from '../common';

import { ENV, STYLE } from '../../../constants';
import styles from './styles';

export interface ILoginProps {
  isLoading: boolean;
  hasError: boolean;
  navigation: NavigationScreenProp<any, any>;
  login: (email: string, password: string) => void;
  setNavigation: (navigation: NavigationScreenProp<any, any>) => void;
  checkForUpdates: () => void;
}

export interface ILoginState {
  email: string;
  password: string;
}

export default class Login extends React.PureComponent<ILoginProps, ILoginState> {
  public static navigationOptions: NavigationStackScreenOptions = {
    title: 'Login'
  };

  public static isAndroid: boolean = ENV.PLATFORM.IS_ANDROID;

  public state: ILoginState = {
    email: 'dgeslin@makingsense.com',
    password: 'password'
  };

  public componentDidMount() {
    const { setNavigation, navigation, checkForUpdates } = this.props;
    setNavigation(navigation);
    checkForUpdates();
  }

  public render() {
    const { isLoading, hasError } = this.props;
    const { email, password } = this.state;
    debugger;
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.heading1}>Making Sense RN seed</Text>
        <Text style={styles.heading2}>Please login to your account</Text>
        {(hasError) ? <Text style={styles.headingError}>{'Oops! Invalid email or password'}</Text> : null}

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardContainer}
          keyboardVerticalOffset={Login.isAndroid ? ENV.KEYBOARD_VERTICAL_OFFSET : 0}
        >
          <Card>
            <CardSection>
              <Field
                secureTextEntry={false}
                labelTitle={'EMAIL:'}
                placeholder="user@domain.com"
                textValue={email}
                onChangeText={(value) => this.handleOnChange('email', value)}
              />
            </CardSection>

            <CardSection>
              <Field
                secureTextEntry={true}
                labelTitle={'Password:'.toUpperCase()}
                placeholder="Enter your password..."
                textValue={password}
                onChangeText={(value) => this.handleOnChange('password', value)}
              />
            </CardSection>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        </KeyboardAvoidingView>
      </View>

    );
  }

  private renderButton() {

    if (this.props.isLoading) {
      return <Spinner size={'small'} />;
    }

    return <Button onPress={this.login}> Login </Button>;
  }
  private handleOnChange(field: 'email' | 'password', value: string) {
    debugger;
    this.setState({ [field]: value } as any);
  }

  private login = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
  }
}
