import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, TextInput,StyleSheet} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
    };
  }
  onAddText(key) {
    return (value) => {
      this.setState({[key]: value});
    };
  }

  validation = () => {
    this.onAddText();
    const {userEmail, password} = this.state;
    let emailExpression = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    let passwordExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    this.props.navigation.navigate('tabRoutes');
    // if (userEmail == null 
    //   || !userEmail.match(emailExpression)
    //   )
    //   {
    //   alert('Please Enter valid email Address');
    // } else if (password == null || !password.match(passwordExpression)) {
    //   alert('Please Enter Storng Password');
    // } else {
    //   this.props.navigation.navigate('tabRoutes');
    // }
  };

  render() {
    const {userEmail, password} = this.state;
    return (
      
      <View style={styles.parentView}>
        <View>
          <Image
            style={{height: 200, width: '100%'}}
            source={{
              uri:
                'https://constant.myntassets.com/pwa/assets/img/banner_login_landing_400.png',
            }}
          />
          <Text
            style={styles.loginText}>
            Login or SignUp
          </Text>

          <View>
            <TextInput
              placeholder="Enter Email Address"
              value={userEmail}
              onChangeText={this.onAddText('userEmail')}
              style={styles.emailInput}
            />

            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={this.onAddText('password')}
              secureTextEntry={true}
              style={styles.passwordInput}
            />
          </View>

          <TouchableOpacity 
          onPress={() => this.validation()}
          >
            <View
              style={styles.loginButton}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={styles.accountText}>
            <Text style={{color: 'gray', fontSize: 15}}>
              Create an account!
            </Text>
            <Text
              //   onPress={() => this.props.navigation.navigate('signup')}
              style={styles.registerText}>
              Register
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;
const styles=StyleSheet.create({
  parentView:{flex: 1, backgroundColor: 'white'},

  emailInput:{
    height: 45,
    borderColor: '#FF3F6C',

    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  passwordInput:{
    height: 45,
    borderColor: '#FF3F6C',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  loginText:{
    
      fontSize: 20,
      color: '#FF3F6C',
      fontFamily: 'serif',
      marginVertical: 15,
      marginHorizontal: 10,
    
  },
  loginButton:{
    marginTop: 20,
    height: 50,
    backgroundColor: '#e0436c',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  registerText:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e0436c',
    marginLeft: 5,
  },
  accountText:{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}

})