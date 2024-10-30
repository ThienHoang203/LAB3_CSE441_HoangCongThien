import React, {useState} from 'react';
import {Card, Text, Button} from 'react-native-paper';
import {FlatList, StyleSheet, View} from 'react-native';
import {useEffect} from 'react';

const product = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description:
    'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  category: 'beauty',
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ['beauty', 'mascara'],
  brand: 'Essence',
  sku: 'RCH45Q1A',
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  images: [
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
  ],
  thumbnail:
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
};

const RenderCards = ({item}) => {
  <Card>
    <Card.Title title="Product Detail" />
    <Card.Cover
      source={{uri: item.thumbnail}}
      style={styles.imagess}
      resizeMode="contain"
    />
    <Card.Content>
      <Text variant="headlineSmall">Title: {item.title}</Text>
      <Text variant="bodyMedium">Description: {item.description}</Text>
      <Text variant="bodyMedium">Price: ${item.price}</Text>
      <Text variant="bodyMedium">Discount: {item.discountPercentage}%</Text>
      <Text variant="bodyMedium">Rating: {item.rating} stars</Text>
      <Text variant="bodyMedium">Stock: {item.stock} units</Text>
      <Text variant="bodyMedium">Brand: {item.brand}</Text>
      <Text variant="bodyMedium">Category: {item.category}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Delete</Button>
      <Button>Cancel</Button>
    </Card.Actions>
  </Card>;
};

export default function ProductDetail() {
  const filePath = 'https://dummyjson.com/products/';
  const [data, setData] = useState([product]);
  useEffect(() => {
    // Alert.alert(filePath);
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <View>
      <FlatList renderItem={RenderCards} data={data} keyExtractor={e => e.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagess: {
    borderRadius: 15,
    elevation: 2,
  },
});
