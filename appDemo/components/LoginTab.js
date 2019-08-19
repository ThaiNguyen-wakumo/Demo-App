import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighLight,
  Dimensions,
  TextInput
} from "react-native";

import Button from "react-native-button";
import firebase from "react-native-firebase";
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      //   isAuthenticated: false
      typedEmail: "",
      typedPassword: "",
      user: null
    };
    console.log(firebase.auth());
  }
  onRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword
      )
      .then(loggedInUser => {
        this.setState({ user: loggedInUser });
        console.log(
          `Register with user: ${JSON.stringfy(loggedInUser.toJSON())}`
        );
      })
      .catch(error => {
        console.log("Register fail");
      });
  };
  onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword
      )
      .then(loggedInUser => {
        this.setState({ user: loggedInUser });
        console.log(
          `Register with user: ${JSON.stringfy(loggedInUser.toJSON())}`
        );
      })
      .catch(error => {
        console.log("Register fail");
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: Platform.OS === "ios" ? 30 : 0
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            margin: 40
          }}
        >
          Login with Firebase
        </Text>

        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            color: "black"
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({
              typedEmail: text
            });
          }}
        />

        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            color: "black"
          }}
          keyboardType="default"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({
              typedPassword: text
            });
          }}
        />
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Button
            containerStyle={{
              padding: 10,
              borderRadius: 4,
              margin: 10,
              backgroundColor: "green"
            }}
            style={{
              fontSize: 17,
              color: "white"
            }}
            onPress={this.onRegister}
          >
            Register
          </Button>

          <Button
            containerStyle={{
              padding: 10,
              borderRadius: 4,
              margin: 10,
              backgroundColor: "blue"
            }}
            style={{
              fontSize: 17,
              color: "white"
            }}
            onPress={this.onLogin}
          >
            Login
          </Button>
        </View>
      </View>
    );
  }
}
