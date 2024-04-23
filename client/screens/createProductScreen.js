import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CreateProductScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${process.env.BASE_URL}/products`, {
        title,
        desc,
        price: parseFloat(price),
      });
      Alert.alert('Success', 'Product created successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create product');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}
      />
      <Button title="Create Product" onPress={handleSubmit} />
    </View>
  );
};

export default CreateProductScreen;
