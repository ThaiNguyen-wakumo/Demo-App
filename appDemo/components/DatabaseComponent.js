import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight
} from "react-native";

import firebase from "react-native-firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUserName: "",
      newUserAge: "",
      newUserGender: "",
      newUserEmail: "",
      newUserPassword: "",
      loading: false
    };
    this.iosConfig = {
      clientId:
        "56901142324-kkliklbnmp850dqtj2oaanmo7ull40eh.apps.googleusercontent.com",
      appId: "1:56901142324:ios:1cbc3485c3868103",
      apiKey: "AIzaSyCOLi1lKOaeimUlimjAA6dtgJ6WeSAMtGw",
      databaseURL: "https://appdemo-b6ce0.firebaseio.com",
      storageBucket: "appdemo-b6ce0.appspot.com",
      messagingSenderId: "56901142324",
      projectId: "appdemo-b6ce0",
      persistance: true
    };

    this.androidConfig = {
      persistance: true
    };

    this.animalApp = firebase.initializeApp(
      Platform.OS === "ios" ? this.iosConfig : this.androidConfig,
      "animalApp"
    );

    this.rootRef = firebase.database().ref();
    console.log(this.rootRef);

    this.userRef = this.rootRef.child("user");
    console.log(this.userRef);
  }

  // componentDidMount() {
  //   animalRef.on("value", childSnapshot => {
  //     const animals = [];
  //     childSnapshot.forEach(doc => {
  //       animals.push({
  //         key: doc.key,
  //         animalName: doc.toJSON().animalName
  //       });
  //       this.setState({
  //         animals: animals.sort((a, b) => {
  //           return a.animalName < b.animalName;
  //         }),
  //         loading: false
  //       });
  //     });
  //   });
  // }

  onPressAdd = () => {
    if (this.state.newUserName.trim() === "") {
      alert("User name is blank");
      return;
    }
    if (this.state.newUserAge.trim() === "") {
      alert("User age is blank");
      return;
    }
    if (this.state.newUserGender.trim() === "") {
      alert("User gender is blank");
      return;
    }
    if (this.state.newUserEmail.trim() === "") {
      alert("User email is blank");
      return;
    }
    if (this.state.newUserPassword.trim() === "") {
      alert("User password is blank");
      return;
    }

    this.userRef.push({
      userName: this.state.newUserName,
      userAge: this.state.newUserAge,
      userGender: this.state.newUserGender,
      userEmail: this.state.newUserEmail,
      userPassword: this.state.newUserPassword
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? 1 : 1
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 15
          }}
        >
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
            placeholderTextColor="black"
            placeholder="Enter user name"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                newUserName: text
              });
            }}
            value={this.state.newUserName}
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
            placeholderTextColor="black"
            placeholder="Enter user age"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                newUserAge: text
              });
            }}
            value={this.state.newUserAge}
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
            placeholderTextColor="black"
            placeholder="Enter user gender"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                newUserGender: text
              });
            }}
            value={this.state.newUserGender}
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
            placeholderTextColor="black"
            placeholder="Enter user email"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({
                newUserEmail: text
              });
            }}
            value={this.state.newUserEmail}
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
            placeholderTextColor="black"
            placeholder="Enter user password"
            autoCapitalize="none"
            secureTextEntry="true"
            onChangeText={text => {
              this.setState({
                newUserPassword: text
              });
            }}
            value={this.state.newUserPassword}
          />

          <TouchableHighlight onPress={this.onPressAdd}>
            <Text>Add</Text>
          </TouchableHighlight>
        </View>

        <FlatList>
          data={this.state.users}
          renderItem=
          {({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10
                }}
              >
                {item.userName}
              </Text>
            );
          }}
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
