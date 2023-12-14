/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ImageBackground, Image } from 'react-native';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Element3 } from 'iconsax-react-native';
import { BlogList, CategoryList } from './data';
import { fontType, colors } from './src/theme';
import { ListHorizontal, ItemSmall } from './src/components';


export default function App() {
  const logoUrl = 'https://static.wikia.nocookie.net/mobile-legends/images/e/e6/Site-logo.png/revision/latest?cb=20211110152908';
  const backgroundImage = 'https://i.pinimg.com/564x/59/81/ea/5981eada09c0ccdb38d9c7366960e9fb.jpg';
  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Image source={{ uri: logoUrl }} style={styles.logoImage} />
          <Element3 color={colors.black()} variant="Linear" size={24} />
        </View>
        <View style={styles.listCategory}>
          <FlatListCategory />
        </View>
        <ListBlog />
      </View>
    </ImageBackground>
  );
}


const ItemCategory = ({ item, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        {/* Tambahkan View untuk kotak categoryName */}
        <View style={category.categoryBox}>
          <Text style={{ ...category.title, color }}>{item.categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({ item }) => {
    const color = item.id === selected ? colors.black() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 1 }} />}
      contentContainerStyle={{ paddingHorizontal: 1 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 1);
  const verticalData = BlogList.slice(1, 10);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', // Untuk menutupi seluruh container
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.5)', // Menggunakan warna putih dengan opasitas 0.5
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  logoImage: {
    width: 150, // Adjust the width as needed
    height: 50, // Adjust the height as needed
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 1,
    gap: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
  categoryBox: {
    borderWidth: 1,
    borderColor: colors.black(), // Ganti dengan warna yang diinginkan
    borderRadius: 15, //ujung
    padding: 10,
    paddingHorizontal: 30,  // Sesuaikan dengan kebutuhan
    alignItems: 'center',
    marginHorizontal: 0,  // Sesuaikan dengan kebutuhan

  },
  innerContent: {
    backgroundColor: 'blue', // Warna di dalam border
    flex: 1,
    borderRadius: 13, // Jangan lebih besar dari borderRadius di categoryBox
    overflow: 'hidden', // Agar border-radius berfungsi
  },
});







