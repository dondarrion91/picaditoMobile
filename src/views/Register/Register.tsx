import React, {useState} from 'react';
import {SafeAreaView, TextInput, View, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {authStyles} from '../styles/Auth.style';
import {Text, Button} from '@rneui/themed';

export type Props = {
  navigation: NavigationProp<any, any>;
};

export default function Register({navigation}: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  return (
    <SafeAreaView>
      <View style={authStyles.container}>
        <Text h2 style={authStyles.title}>
          Picadito
        </Text>
        <TextInput
          value={email}
          style={authStyles.input}
          placeholder="Dirección de mail"
          onChangeText={setEmail}
        />
        <TextInput
          value={username}
          style={authStyles.input}
          placeholder="Usuario"
          onChangeText={setUsername}
        />
        <TextInput
          value={password}
          style={authStyles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
        />
        <TextInput
          value={repeat}
          style={authStyles.input}
          placeholder="Repetir Contraseña"
          onChangeText={setRepeat}
        />
      </View>
      <View style={authStyles.footer}>
        <View style={authStyles.buttonWrapper}>
          <Button
            title="Registrarse"
            loading={false}
            loadingProps={{size: 'large', color: 'white'}}
            buttonStyle={authStyles.button}
            titleStyle={authStyles.buttonTitle}
            containerStyle={authStyles.buttonContainer}
            onPress={() => console.log('aye')}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={authStyles.registerButton}>
            <Text>Ya tienes usuario? Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
