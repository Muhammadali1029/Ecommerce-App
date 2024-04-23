import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const UpdateProductScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/products/${productId}`);
        const product = response.data.product;
        setTitle(product.title);
        setDesc(product.desc);
        setPrice(product.price.toString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.put(`${process.env.BASE_URL}/products/${productId}`, {
        title,
        desc,
        price: parseFloat(price),
      });
      Alert.alert('Success', 'Product updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update product');
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
      <Button title="Update Product" onPress={handleSubmit} />
    </View>
  );
};

export default UpdateProductScreen;
