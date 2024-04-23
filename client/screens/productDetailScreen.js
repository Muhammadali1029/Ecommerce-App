import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/products/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Title: {product.title}</Text>
      <Text>Description: {product.desc}</Text>
      <Text>Price: ${product.price}</Text>
      {/* Add more fields as needed */}
    </View>
  );
};

export default ProductDetailScreen;
