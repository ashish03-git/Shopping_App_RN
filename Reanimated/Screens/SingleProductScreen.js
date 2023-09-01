import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { SliderBox } from "react-native-image-slider-box"


const SingleProductScreen = () => {
  const route = useRoute()
  const selectedData = route.params?.singleProduct
  // console.log(selectedData)

  const sliderImg = [
    selectedData.images[0],
    selectedData.images[1],
    selectedData.images[2],
    selectedData.images[3],
    selectedData.images[4],

  ]
  // console.log(product.params)
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "rgba(200,200,200,0.8)" }}>
      <View>
        {selectedData ?
          <View style={styles.slider}>
            <SliderBox
              images={sliderImg}
              dotColor="blue"
              borderRadius={9}
              style={{ width: responsiveWidth(90), height: responsiveHeight(70) }}
              autoplay={true}
              autoplayInterval={3000}
              circleLoop={true}
            />
          </View>
          :
          null
        }
      </View>
      <View style={styles.prod_details}>
        <View style={styles.prod_txt}>

        </View>
      </View>

    </ScrollView >
  )
}
const styles = StyleSheet.create({
  slider: {
    height: responsiveHeight(70),
    width: responsiveWidth(95),
    backgroundColor: "white", margin: 10, borderRadius: 10, padding: 10
  },
  prod_details: {
    width: responsiveWidth(95),
    height: responsiveHeight(15),
    backgroundColor: "white",
    borderRadius: 10, margin: 10, marginTop: 0, padding: 3
  },


})
export default SingleProductScreen