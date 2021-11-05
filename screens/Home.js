import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  NativeAppEventEmitter,
} from "react-native";

export default function Home({navigation}) {
  return <View style={styles.container} >
    <View style = {styles.header}>
      <View style={styles.headerContainer}>
          <View>
            <Image 
              source={require("../images/hamburger.png")}
              style={[styles.himage1, styles.himage]}
            ></Image>
          </View>
          <View>
            <Image 
              source={require("../images/7.png")}
              style={[styles.himage2, styles.himage]}
            ></Image>
          </View>
          <View style ={styles.himgflex}>
            <Image 
              source={require("../images/search.png")}
              style={[styles.himage, styles.himage3]}
            ></Image>
           <Image 
              source={require("../images/notification.png")}
              style={[styles.himage, styles.himage4]}
            ></Image>
          </View>
         
      </View>
    </View> 
    <Text style={styles.pageTitle}>The Wold's <Text style={styles.changec}>Best Bike</Text></Text>
    <Text style={styles.cat}>Categories</Text>
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text style={[styles.scrolltxt, styles.scrolltxtactive ]}>All</Text>
        <Text style={styles.scrolltxt}>RoadBike</Text>
        <Text style={styles.scrolltxt}>Mountain</Text>
        <Text style={styles.scrolltxt}>Urban</Text>
      </ScrollView>
    </View>

    <View style={styles.cards}>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={require('../images/love.png')} style={styles.cardLogo}/>
          <Image source={require('../images/2.png')}  style={styles.cardImage} />
          <Text style={styles.bikeName}>Panarello Bike</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../images/love.png')} style={styles.cardLogo}/>
          <Image source={require('../images/2.png')}  style={styles.cardImage} />
          <Text style={styles.bikeName}>Panarello Bike</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../images/love.png')} style={styles.cardLogo}/>
          <Image source={require('../images/2.png')}  style={styles.cardImage} />
          <Text style={styles.bikeName}>Panarello Bike</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../images/love.png')} style={styles.cardLogo}/>
          <Image source={require('../images/2.png')}  style={styles.cardImage} />
          <Text style={styles.bikeName}>Panarello Bike</Text>
          <Text style={styles.bikePrice}><Text style={styles.changeSignColor}>$</Text>1,700.00</Text>
        </View>
      </View>
    </View>

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


const styles = StyleSheet.create({
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
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  himgflex: {
    flexDirection: "row",
  },
  himage4: {
    height: 25,
    width: 20,
  },
  himage3: {
    height: 25,
    width: 20,
    marginRight: 10
  },
  pageTitle: {
    fontSize: 14,
    color: "#DADADA",
    marginHorizontal: 10,
  },
  changec: {
    color: "#FA6401",
    fontSize: 20,
    fontWeight: "bold",

  },
  cat: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },
  scrolltxt: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    backgroundColor: "#EEEDF2",
    height: 50,
    borderRadius: 10,
  
  },
  scrolltxtactive: {
    color: "#FA6401",
  },
  cardsContainer: {
    flexDirection: "row",
    width: "90%",
    overflow: "hidden",
    justifyContent: "space-between",
    flexWrap: "wrap",

  },
  cards: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  
  },
  card: {
    width: "47%",
    overflow: "hidden",
    height: 200,
    backgroundColor: "#EEEDF2",
    borderRadius: 15,
    marginBottom: 10,
  },
  cardLogo: {
    height: 15,
    width: 17,
    // borderRadius: 6,
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  cardImage: {
    width: "97%",
    height: "50%",
  },
  bikeName: {
    textAlign: "center",
    marginTop: 10,
    color: "#C9C9C9",
  },
  bikePrice: {
    fontSize: 17,
    textAlign: "center",
  },
  changeSignColor: {
    color: "#FA6401",
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
