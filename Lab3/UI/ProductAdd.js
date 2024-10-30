import {useState} from 'react';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function ProductAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('http://dummyjson.com/products/add', {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successfull');
  };

  return (
    <ScrollView>
      <Text style={styles.heading}>Add a Product</Text>
      <View>
        <Text>Title</Text>
        <TextInput placeholder="Enter title" onEndEditing={setTitle} />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          placeholder="Enter description"
          onEndEditing={setDescription}
        />
      </View>
      <View>
        <Text>Price</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter price"
          onEndEditing={setPrice}
        />
      </View>
      <View>
        <Text>Discount Percentage</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter discount percentage"
          onEndEditing={setDiscountPercentage}
        />
      </View>
      <View>
        <Text>Rating</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter rating"
          onEndEditing={setRating}
        />
      </View>
      <View>
        <Text>Stock</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter stock"
          onEndEditing={setStock}
        />
      </View>
      <View>
        <Text>Brand</Text>
        <TextInput placeholder="Enter brand" onEndEditing={setBrand} />
      </View>
      <View>
        <Text>Category</Text>
        <TextInput placeholder="Enter category" onEndEditing={setCategory} />
      </View>
      <View>
        <Text>Images</Text>
        <TextInput
          keyboardType="url"
          placeholder="Enter images URL(s)"
          onEndEditing={setImages}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0000FF',
  },
});
