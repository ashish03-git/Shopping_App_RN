import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../Redux/Slice';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

import { SliderBox } from "react-native-image-slider-box"
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navgation = useNavigation()

  const sliderImg = [
    require("../../Images/Home/upcoming1.jpg"),
    require("../../Images/Home/upcoming2.jpg"),
    require("../../Images/Home/upcoming3.jpg"),
    require("../../Images/Home/upcoming4.jpg"),
    require("../../Images/Home/upcoming4.jpg"),
    require("../../Images/Home/Electronics.jpg"),
    require("../../Images/Home/Fashion.jpg"),
    require("../../Images/Home/Grocery.jpg"),
    require("../../Images/Home/Beauty.jpg")
  ]


  return (
    <ScrollView style={{ backgroundColor: 'rgba(200,200,200,0.7)' }}>

      {/* Search */}
      <View style={styles.search}>
        <TextInput style={{ width: "85%", padding: 10 }} placeholder='Search Here...' />
      </View>

      {/* Welcome
      <View style={styles.welocome}>
        <Image source={require("../../Images/Welocme.jpg")} style={{ height: "100%", width: "100%", borderRadius: 10 }} />
      </View> */}

      {/* Slider  */}
      
      <View style={styles.slider}>
        <SliderBox
          images={sliderImg}
          dotColor="blue"
          borderRadius={9}
          style={{ width: responsiveWidth(95), height: responsiveHeight(30) }}
          autoplay={true}
          autoplayInterval={3000}
          circleLoop={true}
        />
      </View>


      {/* Explore Category */}
      <View style={styles.homeCtrg}>
        <View style={{ margin: responsiveWidth(2), justifyContent: "center", alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navgation.navigate("Categories")}>
            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: 600 }}>Explore More Following Category</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/Electronics.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/Fashion.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/Grocery.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/Beauty.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* suggestiion for you */}
      <View style={{ justifyContent: 'center', alignItems: "center" }}>

        <View style={styles.suggestion}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: responsiveHeight(2.2), color: "black", fontWeight: "bold" }}>Suggested for You</Text>
            <Text>Based on Your Activity</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.suggestion_items}>
              <View style={{ width: responsiveWidth(40), borderColor: "blue", padding: 5, margin: 5, borderRadius: 8 }}>
                <Image source={require("../../Images/Home/upcoming1.jpg")} style={styles.suggestion_items_Img} />
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                <TouchableOpacity style={styles.add_btn}>
                  <Text style={{ color: "black" }}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: responsiveWidth(40), borderColor: "blue", padding: 5, margin: 5, borderRadius: 8 }}>
                <Image source={require("../../Images/Home/upcoming2.jpg")} style={styles.suggestion_items_Img} />
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                <TouchableOpacity style={styles.add_btn}>
                  <Text style={{ color: "black" }}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: responsiveWidth(40), borderColor: "blue", padding: 5, margin: 5, borderRadius: 8 }}>
                <Image source={require("../../Images/Home/upcoming3.jpg")} style={styles.suggestion_items_Img} />
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                <TouchableOpacity style={styles.add_btn}>
                  <Text style={{ color: "black" }}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: responsiveWidth(40), borderColor: "blue", padding: 5, margin: 5, borderRadius: 8 }}>
                <Image source={require("../../Images/Home/upcoming4.jpg")} style={styles.suggestion_items_Img} />
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                <TouchableOpacity style={styles.add_btn}>
                  <Text style={{ color: "black" }}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {/*Upcomming Product*/}
      <View style={styles.upcoming}>
        <View style={{ margin: responsiveWidth(2), justifyContent: "center", alignItems: 'center' }}>
          <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: 600 }}>Upcoming Items . . .</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/upcoming4.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/upcoming3.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/upcoming2.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
          <View style={styles.ctrg_items}>
            <TouchableOpacity>
              <Image source={require("../../Images/Home/upcoming1.jpg")} style={styles.ctrg_items_img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {
    height: responsiveHeight(6), width: responsiveWidth(95), 
    backgroundColor: "white", marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2),
     marginTop: 20, borderRadius: 20

  },
  welocome: {
    height: responsiveHeight(60), width: responsiveWidth(95), marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2), marginTop: 10
  },
  homeCtrg: {
    height: responsiveHeight(52), width: responsiveWidth(95), backgroundColor: "white", marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2), borderRadius: 10, marginTop: 10
  },
  ctrg_items: {
    width: responsiveWidth(42),
    height: responsiveHeight(20),
    margin: 10,
    borderRadius: 10
  },
  ctrg_items_img: {
    width: "100%", height: "100%", borderRadius: 10
  },
  TopCategories: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  categoryHeader: {
    padding: 10,
  },
  categoryHeaderText: {
    fontSize: 15,
    color: "black"
  },

  // suggestion
  suggestion: {
    width: responsiveWidth(95),
    height: responsiveHeight(36),
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    marginBottom: 0


  },
  suggestion_items: {
    flexDirection: "row",
    paddingLeft: 10,

  },
  suggestion_items_Img: {
    width: responsiveWidth(35), height: responsiveHeight(15),
    alignSelf: "center", borderRadius: 8
  },
  add_btn: {
    alignSelf: "center", width: responsiveWidth(25), height: responsiveHeight(4),
    backgroundColor: "#ffc107", justifyContent: "center", alignItems: "center",
    borderRadius: 5, padding: 3
  },

  // Upcomming
  upcoming: {
    height: responsiveHeight(52), width: responsiveWidth(95), margin: 10, backgroundColor: "white", borderRadius: 10
  },

  // slider
  slider: {
    height: responsiveHeight(30), width: responsiveWidth(95), backgroundColor: "white", margin: 10, borderRadius: 10
  }
});

export default Home;
