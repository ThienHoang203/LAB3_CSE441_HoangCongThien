import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';

const item = {
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

const renderProduct = ({item}) => {
  const discountAmount = Math.round(item.price * item.discountPercentage) / 100;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.detailsAndBtnContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>Title: {item.title}</Text>
          <Text style={styles.detail} numberOfLines={2}>
            Description: {item.description}
          </Text>
          <Text style={styles.detail}>Price: {item.price}</Text>
          <Text style={styles.detail}>
            <Text style={styles.discount}>Discount: {discountAmount} off</Text>
          </Text>
          <Text style={styles.detail}>Rating: {item.rating}</Text>
          <Text style={styles.detail}>Stock: {item.stock}</Text>
          <Text style={styles.detail}>Brand: {item.brand}</Text>
          <Text style={styles.detail}>Category: {item.category}</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title={'DETAIL'} />
          </View>
          <View style={styles.btn}>
            <Button title={'ADD'} />
          </View>
          <View style={styles.btn}>
            <Button title={'DELETE'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default function Products() {
  const [data, setData] = useState([item]);
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
  }, []);
  return (
    <View>
      <Text style={styles.heading}>Product list</Text>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={e => e.id}
        style={styles.listItemContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 26,
    color: '#000',
    fontWeight: '700',
    padding: '3%',
  },
  listItemContainer: {
    padding: '6%',
    height: '90%',
  },
  itemContainer: {
    backgroundColor: '#F9F9F9',
    width: '100%',
    height: 250,
    flexDirection: 'row',
    elevation: 5,
    marginBottom: '4%',
  },
  imageContainer: {
    width: '33.3%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '33%',
  },
  detailsAndBtnContainer: {
    width: '66.7%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: '3%',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  detail: {
    fontSize: 14,
  },
  discount: {
    color: '#409E40',
    fontWeight: '700',
    fontSize: 15,
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
  },
  btn: {
    margin: 0,
    padding: 0,
    marginRight: '6%',
  },
});
