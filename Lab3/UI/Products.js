import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Products() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';

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
  });
  return (
    <View>
      <Text>Product list</Text>
    </View>
  );
}
