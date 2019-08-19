# 29-08-2019
```
import React, { Component } from 'react'
import {
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity

} from 'react-native'

import Button from 'react-native-button';

export default class LoginTab extends Component {
render() {
return (
<View style={styles.container}>
<View style={styles.up}>
<Text style={styles.title}>
Login with Firebase
</Text>
</View>
<View style={styles.down}>
<View style={styles.textInputContainer}>
<TextInput
style={styles.textInput}
textContentType='emailAddress'
keyboardType='email-address'
placeholder="Enter your email"
>
</TextInput>
</View>
<View style={styles.textInputContainer}>
<TextInput
style={styles.textInput}
placeholder="Enter your password"
secureTextEntry={true}
>
</TextInput>
</View>
<TouchableOpacity style={styles.loginButton}>
<Text style={styles.loginButtonTitle}>LOG IN</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.signupButton}>
<Text style={styles.signupButtonTitle}>SIGN UP</Text>
</TouchableOpacity>
</View>
</View>


)
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'stretch',
backgroundColor: 'rgb(126,187,93)'
},
up: {
flex: 3,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'
},
down: {
flex: 7,
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems: 'center'
},
title: {
color: 'white',
color: 'black',
textAlign: 'center',
width: 400,
fontSize: 23
},
textInputContainer: {
paddingHorizontal: 10,
borderRadius: 6,
marginBottom: 20,
backgroundColor: 'white'
}, 
textInput: {
width: 280,
height: 45
},
loginButton: {
width: 145,
height: 35,
borderRadius: 12,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgb(91, 165, 166)'
},
loginButtonTitle: {
fontSize: 18,
color: 'black'
},
signupButton: {
width: 145,
height: 35,
borderRadius: 12,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgb(91, 165, 166)',
marginTop: 10
},
signupButtonTitle: {
fontSize: 18,
color: 'black'
},
line: {
height: 1,
flex: 2,
backgroundColor: 'grey'
},
textOR: {
flex: 1,
textAlign: 'center'
},
divider: {
flexDirection: 'row',
height: 40,
width: 298,
justifyContent: 'center',
alignItems: 'center'
}
})

```
