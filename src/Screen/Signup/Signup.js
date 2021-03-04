import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: 'abc',
    };
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomePage')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Have existing Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
