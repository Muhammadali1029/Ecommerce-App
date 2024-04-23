import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/products`);
        setProducts(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { productId: item._id })}
      style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default HomeScreen;