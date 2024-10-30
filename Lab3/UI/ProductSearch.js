import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import {Card, Text} from 'react-native-paper';

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '700',
  },
});

const renderProduct = ({item}) => {
  return (
    <Card>
      <Card.Title title="Product Detail" />
      <Card.Cover source={{uri: item.thumbnail}} />
      <Card.Content>
        <Text variant="headlineSmall">Title: {item.title}</Text>
        <Text variant="bodyMedium" numberOfLines={2}>
          Description: {item.description}
        </Text>
        <Text variant="bodyMedium">Price: ${item.price}</Text>
        <Text variant="bodyMedium">Discount: {item.discountPercentage}%</Text>
        <Text variant="bodyMedium">Rating: {item.rating} stars</Text>
        <Text variant="bodyMedium">Stock: {item.stock} units</Text>
        <Text variant="bodyMedium">Brand: {item.brand}</Text>
        <Text variant="bodyMedium">Category: {item.category}</Text>
      </Card.Content>
    </Card>
  );
};

export default function ProductSearch() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'http://dummyjson.com/products/';

  const searchProduct = () => {
    if (value !== '') {
      filePath = 'http://dummyjson.com/products/search?q=' + value;
    }
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
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>Search Products</Text>
        <TextInput placeholder="product's name" onEndEditing={setValue} />
        <Button title="Search" onPress={searchProduct} />
      </View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}
