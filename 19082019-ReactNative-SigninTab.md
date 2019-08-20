# 19-08-2019
```
import React, { Component } from 'react';
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
} from 'react-native';
import Button from 'react-native-button';

export default class SignupTab extends Component {

render() {
return (
<View>
<View style={styles.containerUp}>
<Text style={styles.title}> Sign Up </Text>
</View>
<View style={styles.containerMid}>
<Text> Full Name </Text>
<TextInput
style={styles.input}
placeholder='Enter your fullname'
/>
<Text> Email </Text>
<TextInput style={styles.input} placeholder='Enter your email' />
</View>
<View style={styles.containerDown}>
<Button style={styles.btnUpdate}>
Update
</Button>
</View>
</View>
)
}
}


styles = StyleSheet.create({
containerUp: {
alignItems: 'center',
marginTop: 40
},
title: {
color: 'black',
fontSize: 20,
fontWeight: 'bold'
},
containerMid: {
marginTop: 20
},
input: {
height: 40,
width: 200,
margin: 10,
padding: 10,
borderColor: 'gray',
borderWidth: 1,
color: 'black'
},
containerDown: {
alignItems: 'center'
},
btnUpdate: {
backgroundColor: 'green',
width: 80,
height: 30,
color: 'white',
paddingTop: 5
}
})
```
