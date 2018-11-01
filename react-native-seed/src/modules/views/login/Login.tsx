import React from 'react';
import { Image, View, Text, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';
import { Button } from 'react-native-elements';

import Field from '../common/Field';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

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
          <View>
              <View>
                <Field
                  secureTextEntry={false}
                  labelTitle={'EMAIL:'}
                  placeholder="user@domain.com"
                  textValue={email}
                  onChangeText={(value) => this.handleOnChange('email', value)}
                />
              </View>

              <View>
                <Field
                    secureTextEntry={true}
                    labelTitle={'Password:'.toUpperCase()}
                    placeholder="Enter your password..."
                    textValue={password}
                    onChangeText={(value) => this.handleOnChange('password', value)}
                />
              </View>

              <View>
                <Button
                  loading={isLoading}
                  disabled={isLoading}
                  onPress={this.login}
                  title="Login"
                  backgroundColor={STYLE.COLOR.PRIMARY}
                  borderRadius={STYLE.BORDER.QUARTER}
                  fontSize={STYLE.FONT.SIZE.BUTTON_LARGE}
                  fontWeight={STYLE.FONT.WEIGHTS.MEDIUM}
                />
              </View>
          </View>
        </KeyboardAvoidingView>
      </View>

    );
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
