import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const response = await axios.get(`${process.env.BASE_URL}/products/${productId}`);
        const response = await axios.get(`http://localhost:3333/api/v1/products/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>Title: {product.title}</Text>
      <Text style={styles.description}>Description: {product.desc}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      {/* Add more fields as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
