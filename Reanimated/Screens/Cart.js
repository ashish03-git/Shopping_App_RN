import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,increseQty,decreseQty } from '../Redux/Slice';


const Cart = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  // redux cart
  const reduxCart = useSelector(state => state.products.cart)
  // console.log(reduxCart)

  return (


    <>
      {reduxCart.length == 0 ?
        <ScrollView style={{ flex: 1, backgroundColor: "rgba(200,200,200,0.8)" }}>
          <View style={{ justifyContent: 'center', alignItems: "center" }}>
            <View style={styles.main}>
              <MaterialCommunityIcons name="cart-plus" size={responsiveWidth(50)} color="blue" />
              <Text style={{ fontSize: 20, color: "black", fontWeight: "500" }}>Your cart is empty!</Text>
              <TouchableOpacity style={styles.top_btn} onPress={() => navigation.navigate("All Products")}>
                <Text style={{ fontSize: 18, color: "white" }}>Shop Now</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ justifyContent: 'center', alignItems: "center" }}>

            <View style={styles.suggestion}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: responsiveHeight(2.2), color: "black", fontWeight: "bold" }}>Suggested for You</Text>
                <Text>Based on Your Activity</Text>
              </View>
              <ScrollView horizontal={true} >
                <View style={styles.suggestion_items}>
                  <View style={{ width: responsiveWidth(40), padding: 5, margin: 5, borderRadius: 8 }}>
                    <Image source={require("../../Images/Home/upcoming1.jpg")} style={styles.suggestion_items_Img} />
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                    <TouchableOpacity style={styles.add_btn}>
                      <Text style={{ color: "black" }}>Add To Cart</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: responsiveWidth(40), padding: 5, margin: 5, borderRadius: 8 }}>
                    <Image source={require("../../Images/Home/upcoming2.jpg")} style={styles.suggestion_items_Img} />
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                    <TouchableOpacity style={styles.add_btn}>
                      <Text style={{ color: "black" }}>Add To Cart</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: responsiveWidth(40), padding: 5, margin: 5, borderRadius: 8 }}>
                    <Image source={require("../../Images/Home/upcoming3.jpg")} style={styles.suggestion_items_Img} />
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Name Of Product</Text>
                    <Text style={{ alignSelf: 'center', margin: 3, color: "black" }}>Product Price</Text>
                    <TouchableOpacity style={styles.add_btn}>
                      <Text style={{ color: "black" }}>Add To Cart</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: responsiveWidth(40), padding: 5, margin: 5, borderRadius: 8 }}>
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
        </ScrollView >
        :
        <>

          <View style={{ flex: 1, backgroundColor: "rgba(200,200,200,0.8)" }}>
            <View style={{ width: responsiveWidth(95), height: responsiveHeight(15), margin: 10, backgroundColor: "white", borderRadius: 10 }}>
              <View style={{ margin: responsiveWidth(1), padding: 10 }}>
                <Text style={{ fontSize: 20, color: "black" }}>Subtotal - 599 $</Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center", padding: 5 }}>
                <TouchableOpacity style={styles.proceed_to_buy}>
                  <Text style={{ fontSize: 18, color: "black" }}>Procced to Buy</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={{ flex: 1 }}>
              {reduxCart.map((ob,index) => {

                return <>

                  <View style={styles.cart_item_main}>
                    <View>
                      <View>
                        <Image source={{ uri: ob.thumbnail }} style={styles.cart_item_img} />
                      </View>
                    </View>
                    <View style={styles.cart_item_details}>
                      <View style={{ flex: 1, justifyContent: "flex-start" }}>
                        {/* uncomment this line when item is comming when we add form the all product section */}
                        {/* <TouchableOpacity onPress={()=>navigation.navigate("SingleProduct")}> */}
                        <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}> {ob.title} </Text>
                        {/* </TouchableOpacity> */}
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Brand - {ob.brand} </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>Rating : {ob.rating} <MaterialCommunityIcons name="star" color={"green"} size={20} /> </Text>
                      </View>
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: "800", color: "green" }}>Price - {ob.price}$</Text>
                        <Text style={{ color: "black", fontSize: 16 }}>{ob.discountPercentage}% Off</Text>
                      </View>
                      <View style={styles.cart_item_qty_container}>
                        <Text style={{ color: "black", fontSize: 16 }}>Qty :</Text>
                        <TouchableOpacity style={{ backgroundColor: "rgba(180,180,180,0.8)", padding: 5, borderRadius: 5 }} onPress={()=>dispatch(decreseQty(ob))}>
                          <MaterialCommunityIcons name="delete" size={25} color={"black"} />
                        </TouchableOpacity>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{ob.qty}</Text>
                        <TouchableOpacity style={{ backgroundColor: "black", padding: 4, borderRadius: 5 }}onPress={()=>dispatch(increseQty(ob))} >
                          <MaterialCommunityIcons name="plus" size={25} color={"white"} />
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity style={styles.cart_item_remove} onPress={() => dispatch(removeFromCart(ob))}>
                          <Text style={{ fontSize: 16, color: "white" }}>Remove</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cart_item_place_order}>
                          <Text style={{ fontSize: 16, color: "white" }}>Place Order</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                </>
              })}
            </ScrollView>
          </View>
        </>
      }

    </>
  )
}

const styles = StyleSheet.create({
  main: {
    width: responsiveWidth(95),
    height: responsiveHeight(55),
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"

  },
  top_btn: {
    width: responsiveWidth(40), height: responsiveHeight(5), borderRadius: 10,
    backgroundColor: "blue", justifyContent: "center", alignItems: "center",
    margin: responsiveHeight(5)
  },
  suggestion: {
    width: responsiveWidth(95),
    height: responsiveHeight(36),
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,


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
  all_prodItem: {
    height: responsiveHeight(25),
    width: responsiveWidth(95),
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",

  },
  all_prodImg: {
    width: responsiveWidth(22),
    height: responsiveHeight(15),
    borderRadius: 10
  },
  all_prod_disc: {
    width: responsiveWidth(55),
    height: responsiveHeight(15),
    // backgroundColor: "gray",
    // borderWidth: 1,
    // padding:10,
    marginLeft: responsiveWidth(2),
    // justifyContent:"center",
    // alignItems:"center"
  },
  all_prod_disc_sec: {
    width: "100%", height: responsiveHeight(8), padding: 5
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
  },



  // cart item
  proceed_to_buy: {
    justifyContent: "center", alignItems: "center", width: responsiveWidth(80),
    height: responsiveHeight(5), backgroundColor: "#ffc107", borderRadius: 5
  },
  cart_item_main: {
    width: responsiveWidth(95),
    margin: 10, marginTop: 0, backgroundColor: "white",
    borderRadius: 10, padding: 10,
    flexDirection: "row"
  },
  cart_item_img: {
    width: responsiveWidth(35), height: responsiveHeight(28), borderRadius: 10
  },
  cart_item_details: {
    width: responsiveWidth(54), height: responsiveHeight(28),
    margin: 5, marginTop: 0, borderRadius: 10, padding: 10
  },
  cart_item_qty_container: {
    flexDirection: "row", width: responsiveWidth(35), height: responsiveHeight(6),
    justifyContent: "space-around", alignItems: "center",
    borderBottomEndRadius: 10, borderBottomLeftRadius: 10
  },
  cart_item_remove: {
    width: responsiveWidth(20), height: responsiveHeight(4),
    backgroundColor: "red", justifyContent: "center",
    alignItems: "center", borderRadius: 5
  },
  cart_item_place_order: {
    width: responsiveWidth(26), height: responsiveHeight(4),
    backgroundColor: "rgba(0,0,256,0.7)",
    justifyContent: "center", alignItems: "center", borderRadius: 5
  }


})

export default Cart