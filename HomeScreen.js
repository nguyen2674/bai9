// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber'); // Lấy số điện thoại từ AsyncStorage
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber); // Cập nhật số điện thoại vào state
        }
      } catch (error) {
        console.error('Lỗi lấy số điện thoại: ', error);
      }
    };

    loadPhoneNumber(); // Gọi hàm để lấy số điện thoại khi component render
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen!</Text>
      <Text style={styles.phoneText}>Số điện thoại đăng nhập: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;