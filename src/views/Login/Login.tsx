import React, {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, Button} from '@rneui/themed';
import {authStyles} from '../styles/Auth.style';

export type Props = {
  navigation: NavigationProp<any, any>;
};

export default function Login({navigation}: Props): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View style={authStyles.container}>
        <Text h2 style={authStyles.title}>
          Picadito
        </Text>
        <TextInput
          value={username}
          style={authStyles.input}
          placeholder="Introducir usuario o dirección de mail"
          onChangeText={setUsername}
        />
        <TextInput
          value={password}
          style={authStyles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
        />
      </View>
      <View style={authStyles.footer}>
        <View style={authStyles.buttonWrapper}>
          <Button
            title="INICIAR SESIÓN"
            loading={false}
            loadingProps={{size: 'large', color: 'white'}}
            buttonStyle={authStyles.button}
            titleStyle={authStyles.buttonTitle}
            containerStyle={authStyles.buttonContainer}
            onPress={() => console.log('aye')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={authStyles.registerButton}>
            <Text>Registrarse</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[authStyles.buttonWrapper, authStyles.googleButtonWrapper]}>
          <TouchableOpacity style={authStyles.googleButton}>
            <Image
              style={authStyles.googleIcon}
              source={{
                uri: 'https://i.ibb.co/j82DCcR/search.png',
              }}
            />
            <Text style={authStyles.googleButtonText}>
              Registrarse con google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
