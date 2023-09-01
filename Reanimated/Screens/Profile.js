import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Iconic from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation();
  const logOut = () => {
    navigation.navigate("Registration")
  }

  return (

    <ScrollView>
      <View style={{ backgroundColor: "rgba(220,220,220,0.8)" }}>

        <View style={{ justifyContent: 'center', alignItems: "center" }}>
          <View style={styles.main}>
            <View style={{ alignItems: "center", padding: 10 }} >
              <Icon name="user-circle" size={responsiveWidth(30)} color="blue" />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "black", fontWeight: "700" }}>Ashish Yadav</Text>
              <Text style={{ fontSize: 18, color: "black", fontWeight: "400" }}>ashishyadav@gmail.com</Text>
              <Text style={{ fontSize: 18, color: "black", fontWeight: "400" }}>9730592488</Text>
            </View>


          </View>
        </View>

        {/* profile top */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.pro_top}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.top_item}>
                <Icon name="cart-arrow-down" size={20} color="blue" />
                <Text style={{ color: "black", fontSize: 15, marginLeft: 5 }}>Orders</Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.top_item}>

                <Icon name="plus-circle" size={20} color="blue" />
                <Text style={{ color: "black", fontSize: 15, marginLeft: 5 }}>Wishlist</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.top_item}>
                <MaterialCommunityIcons name="cards" size={20} color="blue" />
                <Text style={{ color: "black", fontSize: 15, marginLeft: 5 }}>Coupons</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.top_item}>
                <Material name="wifi-calling-3" size={20} color="blue" />
                <Text style={{ color: "black", fontSize: 15, marginLeft: 5 }}>Help Center</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Credit Options */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.credit_opt}>
            <View style={{ padding: responsiveWidth(3) }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>Credit Options</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Icon name="credit-card-alt" size={20} color="blue" />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>SBI Bank Credit Card</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Icon name="credit-card-alt" size={20} color="blue" />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>SBI Bank Credit Card</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Account setting */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.acc_set}>
            <View style={{ padding: responsiveWidth(3) }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>Account Settings</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Icon name="plus" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Plus Member</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Icon name="user-plus" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Edit Profile</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Font5 name="wallet" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Save Card & Wallet</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Font6 name="location-dot" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Saved Addresses</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Font6 name="language" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Select Language</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Iconic name="notifications" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Notification Settings</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* My Activity */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.my_act}>
            <View style={{ padding: responsiveWidth(3) }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>My Activity</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Icon name="comment" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Reviews</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Font6 name="file-circle-question" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Quetions & Answers</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        {/* Feedback & information */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.feedback_info}>
            <View style={{ padding: responsiveWidth(3) }}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>Feedback & Information</Text>
            </View>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Material name="policy" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Terms, Policies and Licenses</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10 }}>
              <View style={{ flexDirection: "row" }} >
                <View style={{ width: responsiveWidth(15), justifyContent: "center", alignItems: "center" }}>
                  <Font6 name="question" size={20} color={"blue"} />
                </View>
                <View style={{ width: responsiveWidth(58), marginLeft: responsiveWidth(3) }}>
                  <Text style={{ color: "black", fontSize: 15 }}>Browse FAQs</Text>
                </View>
                <View style={{ width: responsiveWidth(15), alignItems: "flex-end", justifyContent: "center" }}>
                  <Icon name="chevron-right" size={14} color={"black"} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Log Out */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.logOut} onPress={logOut}>
            <Text style={{ fontSize: 18, color: "blue" }}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

  main: {
    width: responsiveWidth(95),
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 10,
    margin: 5,
    padding: 10
  },
  pro_top: {
    width: responsiveWidth(95),
    height: responsiveHeight(20),
    backgroundColor: "white",
    margin: 10,
    marginTop: 5,
    shadowColor: "black",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10

  },
  top_item: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 5,
    flexDirection: 'row'

  },
  credit_opt: {
    width: responsiveWidth(95),
    // height: responsiveHeight(16),
    backgroundColor: "white",
    margin: 10,
    marginTop: 0,
    shadowColor: "black",
    elevation: 10,
    borderRadius: 10
  },
  acc_set: {
    width: responsiveWidth(95),
    // height: responsiveHeight(35),
    backgroundColor: "white",
    margin: 10,
    marginTop: 0,
    shadowColor: "black",
    elevation: 10,
    borderRadius: 10
  },
  my_act: {
    width: responsiveWidth(95),
    // height: responsiveHeight(16),
    backgroundColor: "white",
    margin: 10,
    marginTop: 0,
    shadowColor: "black",
    elevation: 10,
    borderRadius: 10
  },
  feedback_info: {
    width: responsiveWidth(95),
    // height: responsiveHeight(16),
    backgroundColor: "white",
    margin: 10,
    marginTop: 0,
    shadowColor: "black",
    elevation: 10,
    borderRadius: 10
  },
  logOut: {
    width: responsiveWidth(90), backgroundColor: "white", margin: 18,
    paddingVertical:6,
    borderRadius: 10, justifyContent: "center", alignItems: "center", shadowColor: "black", elevation: 10
  }

})
export default Profile