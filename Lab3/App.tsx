import React, {useState} from 'react';
import Products from './UI/Products';
import ProductAdd from './UI/ProductAdd';
import ProductSearch from './UI/ProductSearch';
import ProductDetail from './UI/ProductDetail';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Products', title: 'Products', focusedIcon: 'heart'},
    {key: 'ProductAdd', title: 'Add', focusedIcon: 'folder'},
    {key: 'ProductSearch', title: 'Search', focusedIcon: 'find'},
    {key: 'ProductDetail', title: 'Detail', focusedIcon: 'details'},
  ]);

  const renderScenes = BottomNavigation.SceneMap({
    Products: Products,
    ProductAdd: ProductAdd,
    ProductSearch: ProductSearch,
    ProductDetail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScenes}
      />
    </SafeAreaProvider>
  );
}
