import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <Image source={require('./img/1_QY5S4senfFh-mIViSi5A_Q.png')} />
      </View>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>
      <Text>Welcome your React App! </Text>
      <Text>Enter Name:</Text>
      <TextInput placeholder='First Name' />
      <Text>Enter Surname:</Text>
      <TextInput placeholder='Surname' />
      <Button title="Add user" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color:'purple',
    fontWeight:'bold',
    fontSize: 28,
    textAlign: 'center'
  },



});
