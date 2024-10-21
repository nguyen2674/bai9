// SignInScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }) => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');

  const handleSignIn = async () => {
    const phoneRegex = /^[0-9]{10}$/; // Giả sử số điện thoại có 10 chữ số
    if (phoneRegex.test(inputPhoneNumber)) {
      try {
        await AsyncStorage.setItem('phoneNumber', inputPhoneNumber); // Lưu số điện thoại vào AsyncStorage
        navigation.navigate('Home'); // Chuyển sang màn hình Home
      } catch (error) {
        console.error('Lỗi lưu số điện thoại: ', error);
      }
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={inputPhoneNumber}
        onChangeText={setInputPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Đăng nhập" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default SignInScreen;