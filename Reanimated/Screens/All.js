import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addToCart } from '../Redux/Slice';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const All = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const reduxProduct = useSelector(state => state.products.value.products);
    const reduxCart = useSelector(state => state.products.cart)

    // console.log(reduxCart)


    const load = async () => {

        try {
            const response = await axios.get('https://dummyjson.com/products');
            const data = response.data;

            dispatch(addProduct(data))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        load();
    }, []);


    const NavigateToSingleProduct = (singleProduct) => {
        // const singleProduct = oneItem
        navigation.navigate("SingleProduct", { singleProduct })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(200,200,200,0.8)' }}>
            <View style={{ backgroundColor: "rgba(200,200,200,0.8)" }}>
                <View style={styles.search}>
                    <TextInput style={{ width: "85%", padding: 10 }} placeholder='Search Here...' />
                </View>

                <FlatList
                    data={reduxProduct}
                    numColumns={2} // Display items in 2 columns
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingBottom: 70 }} // Adjust this value as needed
                    renderItem={({ item }) => (
                        <View style={styles.all_prodItem}>
                            <View>
                                <Image source={{ uri: item.thumbnail }} style={styles.all_prodImg} />
                            </View>
                            <View style={styles.all_prod_disc}>
                                <View style={styles.all_prod_disc_sec}>
                                    <TouchableOpacity onPress={() => NavigateToSingleProduct(item)}>
                                        <Text style={{ fontSize: 17, color: "black", fontWeight: "600" }} >{item.title}</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: "black" }}>Brand - {item.brand}</Text>
                                    <Text style={{ color: "green" }}>Rating - {item.rating}</Text>
                                </View>
                                <View style={[styles.all_prod_disc_sec, { paddingTop: 10 }]}>
                                    <Text style={{ fontSize: 17, color: "green", fontWeight: "600" }}>Price - {item.price}$</Text>
                                    <Text style={{ color: "black" }}>Discount Percentage : {item.discountPercentage}%</Text>
                                </View>
                                <View style={styles.all_prod_disc_sec_btn}>
                                    <TouchableOpacity style={styles.all_prod_addBtn} onPress={() => dispatch(addToCart({ item }))}>
                                        <Text style={{ color: "black" }}>Add to cart</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.all_prod_buyBtn}>
                                        <Text style={{ color: "black" }}>Buy</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                    )}

                />


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        height: responsiveHeight(6),
        width: responsiveWidth(95),
        backgroundColor: "white",
        marginLeft: responsiveWidth(2),
        marginRight: responsiveWidth(2),
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20
    },
    all_prodItem: {
        height: responsiveHeight(25),
        width: responsiveWidth(95),
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        // flexDirection: "row",

    },
    all_prodImg: {
        width: responsiveWidth(30),
        height: responsiveHeight(22),
        borderRadius: 10
    },
    all_prod_disc: {
        width: responsiveWidth(55),
        height: responsiveHeight(22),
        // backgroundColor: "gray",
        // borderWidth: 1,
        // padding:10,
        marginLeft: responsiveWidth(4),
        // justifyContent:"center",
        // alignItems:"center"
    },
    all_prod_disc_sec: {
        width: "100%", height: responsiveHeight(9), padding: 8
    },
    all_prod_disc_sec_btn: {
        width: "100%", height: responsiveHeight(4), flexDirection: "row", alignItems: "flex-end"
    },
    all_prod_addBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 5, backgroundColor: "#ffc107", width: responsiveWidth(25), height: responsiveHeight(4)
    },
    all_prod_buyBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 5, backgroundColor: "#28a745", width: responsiveWidth(25), height: responsiveHeight(4)
    }

})

export default All;
