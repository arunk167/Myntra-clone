import React, {Component} from "react"
import {Text, TouchableOpacity,View} from "react-native"

export default class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            abc: "abc"
        }
    }

    render(){
        return(
            <View style = {{flex: 1, justifyContent: "center"}}>
                <View style = {{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <TouchableOpacity onPress = {()=> this.props.navigation.navigate("login")}><Text>Login</Text></TouchableOpacity>
                    <TouchableOpacity onPress = {()=> this.props.navigation.navigate("signup")}><Text>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }

} 