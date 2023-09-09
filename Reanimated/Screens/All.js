import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addToCart, removeBtnFromAllProduct } from '../Redux/Slice';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const limit = 30;

const All = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const reduxProduct = useSelector(state => state.products.value);
    const reduxCart = useSelector(state => state.products.cart);
    const [apiData, setApiData] = useState([]);
    // console.log(reduxProduct)

    const [skip, setSkip] = useState(0);
    const [loadItem, setLoadItem] = useState(true); // Use state to track loading status
    let query = `?skip=${skip}&limit=${limit}`;

    const load = () => {
        axios.get('https://dummyjson.com/products' + query)
            .then(resp => {
                const newProducts = resp.data.products;
                // console.log(newProducts)
                if (newProducts.length === 0) {
                    setLoadItem(false); // No more items to load
                }
                // Combine new products with existing products in Redux
                setApiData(newProducts)
                dispatch(addProduct(newProducts))
                setSkip(skip + limit);
            })
            .catch(error => {
                console.error(error);
                setLoadItem(false); // Handle the error and set loadItem to false if needed
            });
    };

    const onEndReached = () => {
        if (loadItem) {
            load();
        }
    }

    useEffect(() => {
        load();
    }, []);

    const NavigateToSingleProduct = (singleProduct) => {
        navigation.navigate("SingleProduct", { singleProduct });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(200,200,200,0.8)' }}>
            <View style={{ backgroundColor: "rgba(200,200,200,0.8)" }}>
                <View style={styles.search}>
                    <TextInput style={{ width: "85%", padding: 10 }} placeholder='Search Here...' />
                </View>

                <FlatList
                    data={reduxProduct}
                    numColumns={2}
                    keyExtractor={(item, index) => (item ? item.id.toString() : index.toString())} // Use index as the key if item.id is not available
                    contentContainerStyle={{ paddingBottom: 70 }}
                    onEndReached={onEndReached}
                    renderItem={({ item }) => {

                        let status = reduxCart.some((ob) => ob.id == item.id);

                        return (
                            <View style={styles.all_prodItem}>
                                <View style={styles.imgView}>
                                    <Image source={{ uri: item.thumbnail }} style={styles.all_prodImg} />
                                </View>
                                <View style={styles.all_prod_disc}>
                                    <View style={styles.all_prod_disc_sec}>
                                        <TouchableOpacity onPress={() => NavigateToSingleProduct(item)}>
                                            <Text style={{ fontSize: 17, color: "black", fontWeight: "600" }}>{item.title}</Text>
                                        </TouchableOpacity>
                                        <Text style={{ color: "black" }}>Brand - {item.brand}</Text>
                                    </View>
                                    <View style={[styles.all_prod_disc_sec]}>
                                        <Text style={{ fontSize: 20, color: "green", fontWeight: "600" }}>Price - {item.price}$</Text>
                                    </View>
                                    <View style={styles.all_prod_disc_sec_btn}>
                                        {status ?
                                            <TouchableOpacity style={[styles.all_prod_addBtn, { backgroundColor: "#dc3545" }]} onPress={() => dispatch(removeBtnFromAllProduct({ item }))}>
                                                <Text style={{ color: "white" }}>Remove</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={[styles.all_prod_addBtn, { backgroundColor: "#ffc107" }]} onPress={() => dispatch(addToCart({ item }))}>
                                                <Text style={{ color: "black" }}>Add to cart</Text>
                                            </TouchableOpacity>
                                        }
                                        <TouchableOpacity style={styles.all_prod_buyBtn}>
                                            <Text style={{ color: "#fff" }}>Buy</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
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
        flex: 1,
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    imgView: {
        flex: 1
    },
    all_prodImg: {
        flex: 1,
        borderRadius: 10,
        height: responsiveHeight(25),
        width: responsiveHeight(20)
    },
    all_prod_disc: {
        flex: 2,
    },
    all_prod_disc_sec: {
        width: "100%", padding: 5
    },
    all_prod_disc_sec_btn: {
        width: "100%", height: responsiveHeight
    },
    all_prod_addBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 5,
        width: responsiveWidth(40),
        paddingVertical: 9
    },
    all_prod_buyBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 5, backgroundColor: "#28a745", width: responsiveWidth(40), paddingVertical: 9
    }
})

export default All;
