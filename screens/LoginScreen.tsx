import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo com animação de entrada - Bounce */}
      <MotiView
        from={{
          opacity: 0,
          scale: 0.5,
          rotate: '-180deg',
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: '0deg',
        }}
        transition={{
          type: 'spring',
          delay: 100,
          damping: 15,
        }}
        style={styles.logoContainer}
      >
        <Text style={styles.logo}>🌍</Text>
        <Text style={styles.title}>EcoConsciente</Text>
        <Text style={styles.subtitle}>Preservando o Futuro</Text>
      </MotiView>

      {/* Campo Email com animação sequencial */}
      <MotiView
        from={{
          opacity: 0,
          translateX: -100,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 400,
          easing: Easing.out(Easing.ease),
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </MotiView>

      {/* Campo Senha com animação sequencial */}
      <MotiView
        from={{
          opacity: 0,
          translateX: 100,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 600,
          easing: Easing.out(Easing.ease),
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </MotiView>

      {/* Botão com animação de pulso */}
      <MotiView
        from={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          delay: 800,
          damping: 12,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </MotiView>

      {/* Texto de rodapé com fade */}
      <MotiView
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 1000,
        }}
      >
        <Text style={styles.footer}>Junte-se à mudança! 🌱</Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    fontSize: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#66bb6a',
    fontStyle: 'italic',
  },
  input: {
    width: 300,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#a5d6a7',
  },
  button: {
    width: 300,
    height: 55,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#66bb6a',
  },
});
