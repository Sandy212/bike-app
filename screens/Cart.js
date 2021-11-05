import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  NativeAppEventEmitter,
  Pressable,
} from "react-native";

export default function Cart() {
  return <View style={styles.container}>
    <View style = {styles.header}>
      <View style={styles.headerContainer}>
          <View style={{alignSelf: "center"}}>
            <Image 
              source={require("../images/leftArrow.png")}
              style={styles.himage}
            ></Image>
          </View>
          <View>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Cart List</Text>
            <Text style={{textAlign: "center"}}>(3 items)</Text>
          </View>
          <View></View>
      </View>
    </View> 

    <View style = {styles.cartList}>
      <View style={styles.ListContainer}>
        <View style={styles.list}>
          <View style={{width: "30%", height: "100%", borderRadius: 20, backgroundColor: "#EEEDF2",}}>
            <Image 
              source={require("../images/1.png")}
              style={{width: 100, height: 80, marginTop: 15}}
            ></Image>
          </View>
          <View style={{width: "30%"}}>
            <Text style={styles.bikeName}>Panarello Bike</Text>
            <Text style={styles.bikeType}>Mountain Bike</Text>
            <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
          </View>

          <View  style={{ width: "25%"}}>
            <Image 
              source={require("../images/del.png")}
              style={[styles.actImg,styles.actImg1]}
            ></Image>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 0, marginTop: "auto"}}>
              <Image 
                source={require("../images/minus.png")}
                style={[styles.actImg,styles.actImg2]}
              ></Image>

              <Text>1</Text>

              <Image 
              source={require("../images/plus.png")}
              style={[styles.actImg,styles.actImg3]}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={{width: "30%", height: "100%", borderRadius: 20, backgroundColor: "#EEEDF2",}}>
            <Image 
              source={require("../images/1.png")}
              style={{width: 100, height: 80, marginTop: 15}}
            ></Image>
          </View>
          <View style={{width: "30%"}}>
            <Text style={styles.bikeName}>Panarello Bike</Text>
            <Text style={styles.bikeType}>Mountain Bike</Text>
            <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
          </View>

          <View  style={{ width: "25%"}}>
            <Image 
              source={require("../images/del.png")}
              style={[styles.actImg,styles.actImg1]}
            ></Image>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 0, marginTop: "auto"}}>
              <Image 
                source={require("../images/minus.png")}
                style={[styles.actImg,styles.actImg2]}
              ></Image>

              <Text>1</Text>

              <Image 
              source={require("../images/plus.png")}
              style={[styles.actImg,styles.actImg3]}
              ></Image>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={{width: "30%", height: "100%", borderRadius: 20, backgroundColor: "#EEEDF2",}}>
            <Image 
              source={require("../images/1.png")}
              style={{width: 100, height: 80, marginTop: 15}}
            ></Image>
          </View>
          <View style={{width: "30%"}}>
            <Text style={styles.bikeName}>Panarello Bike</Text>
            <Text style={styles.bikeType}>Mountain Bike</Text>
            <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
          </View>

          <View  style={{ width: "25%"}}>
            <Image 
              source={require("../images/del.png")}
              style={[styles.actImg,styles.actImg1]}
            ></Image>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 0, marginTop: "auto"}}>
              <Image 
                source={require("../images/minus.png")}
                style={[styles.actImg,styles.actImg2]}
              ></Image>

              <Text>1</Text>

              <Image 
              source={require("../images/plus.png")}
              style={[styles.actImg,styles.actImg3]}
              ></Image>
            </View>
          </View>
        </View>
   
      </View>
    </View> 

    <View style={{} }>
      <View style={styles.resultContainer}>
        <View style={styles.resultItem}>
          <Text style={styles.bikeName}>Subtotal</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>3,400.00</Text>
        </View>
        <View style={styles.resultItem}>
          <Text style={styles.bikeName}>Shipping fee</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>100.00</Text>
        </View>
        <Text>--------------------------------------------------------------------</Text>
        <View style={styles.resultItem}>
          <Text style={[styles.bikeName, styles.total]}>Total</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>3,500.00</Text>
        </View>
      </View>
    </View>
    <Pressable style={styles.button}>
      <Text style={styles.text}>Proceed to Checkout</Text>
    </Pressable>

    <View style={styles.footer}>
      <View style={styles.btnNavContainer}>
        <View style={styles.fimage1Background}>
          <Image source={require('../images/mic.png')} style={[styles.fimage1, styles.fimage]}/>
        </View>
        <View style={styles.footerNav}> 
          <Image source={require('../images/home.png')} style={[styles.fimage2, styles.fimage]}/>
          <Image source={require('../images/lock.png')} style={[styles.fimage3, styles.fimage]}/>
        </View>
      </View>
    </View>

  </View>;
}


const styles =  StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    marginBottom: 20
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    marginHorizontal: 10,
  },
  himage: {
    width: 25,
    height: 20,
    // paddingLeft: 5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    marginHorizontal: 10,
    marginVertical: 10,
    height: 100,
  },
  bikeName: {
    textAlign: "left",
    marginTop: 10,
    color: "#878787",
  },
  bikeType: {
    color: "#C9C9C9",
    marginVertical: 5
  },
  bikePrice: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",
  },
  changeSignColor: {
    color: "#FA6401",
  },
  actImg: {
    width: 25,
    height: 25,
  },
  actImg1: {
    alignSelf: "flex-end",
  },
  resultContainer: {
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 10,
    backgroundColor:"#EEEDF2",
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10
   
  },
  resultItem: {
    flexDirection: "row",
    alignItems:"baseline",
    justifyContent: "space-between",
    width: "70%",
    
  },
  total: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black"
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#FA6401",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 footer: {
    backgroundColor: "#C9C9C9",
    marginBottom: 0,
    marginTop: "auto"
  },
  btnNavContainer: {
    position: "relative",
  },
  fimage: {
    width: 20,
    height: 20
  },
  fimage1: {

  
  },
  fimage1Background: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 50,
    backgroundColor: "#1A1A1A",
    alignSelf: "center",
    position: "absolute",
    top: -35,
  },
  footerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 20
  }

})
