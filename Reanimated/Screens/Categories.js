import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Categories = () => {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "rgba(200,200,200,0.8)" }}>
      {/* Search */}
      <View style={styles.search}>
        <TextInput style={{ width: "85%", padding: 10 }} placeholder='Search Here...' />
      </View>

      {/* categories */}
      <View style={styles.ctrg_txt}>
        <View style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "600" }}>Shop by Category</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/alexa.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/e_book.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/bag.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/electronic_acc.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/furniture.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/healthcare.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/men.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/women.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/kids.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/tv-app.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/kitchen.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/toy.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/mobile_acc.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ctrg1}>
                <Image source={require("../../Images/Category/mobile_acc.jpg")} style={styles.ctrgImg} />
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {
    height: responsiveHeight(6), width: responsiveWidth(95), backgroundColor: "white", marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2), marginTop: 20, marginBottom: 10, borderRadius: 20

  },
  ctrg_txt: {
    width: responsiveWidth(100), borderRadius: 10, backgroundColor: "white"
  },
  ctrg1: {
    width: responsiveWidth(42), height: responsiveHeight(25), borderRadius: 15,
    alignItems: "center",
    margin: responsiveHeight(1)
  },
  ctrgImg: {
    height: "100%", width: "100%", borderRadius: 15
  }

})

export default Categories