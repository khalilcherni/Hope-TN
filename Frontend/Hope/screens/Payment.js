import * as React from "react";
import { Text, TextInput, StyleSheet, View, Pressable, ScrollView,TouchableOpacity , Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
const Payment = () => {
  const navigation = useNavigation();
  const [expiryDate, setExpiryDate] = React.useState('');

  const handleExpiryDateChange = (input) => {
    // Format MM/YY manually
    if (input.length <= 5) {
      setExpiryDate(input
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{0,2})/, '$1/$2')
      );
    }
  };

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handlePaymentMethodChange = (selectedMethod) => {
    setPaymentMethod(selectedMethod);
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.androidLarge3}>
        <View style={styles.backWrapper}>
          <Text style={[styles.back, styles.backTypo]}>{`back`}</Text>
        </View>
        <View style={styles.androidLarge3Child} />
        <Text style={styles.payment}>{`payment`}</Text>
        <Text style={[styles.text, styles.textTypo]}>123</Text>
        <Text style={styles.text1}>{`4/24`}</Text>
        <Text style={[styles.text2, styles.textTypo]}>156-633-15899</Text>
        <Image
          style={styles.mastercardLogo1Icon}
          contentFit="cover"
          source={require("../assets/Mastercard_logo 1.png")}
        />
        <Image
          style={[styles.editFillIcon, styles.fillIconLayout]}
          contentFit="cover"
          source={require("../assets/edit-fill-removebg-preview.png")}
        />
        <View style={styles.androidLarge3Child4} />
        <Text style={[styles.donateNow, styles.backTypo]}>{`Donate Now`}</Text>
        <Pressable
          style={styles.signOutCircleDuotone}
          onPress={() => navigation.navigate("AndroidLarge")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/Sign_out_circle_duotone.jpg")}
          />
        </Pressable>
        <Image
          style={[styles.creditCardFillIcon, styles.fillIconLayout]}
          contentFit="cover"
          source={require("../assets/credit-card-fil.png")}
        />
        <View style={styles.AMINA}>
          <View style={[styles.androidLarge3Item, styles.androidLayout]} />
          <View style={[styles.androidLarge3Inner, styles.androidLayout]} />
          <View style={[styles.rectangleView, styles.androidLayout]} />
          <View style={[styles.androidLarge3Child1, styles.androidChildLayout]} />
          <View style={[styles.androidLarge3Child2, styles.androidChildLayout]} />
          <View style={[styles.androidLarge3Child3, styles.androidLayout]} />
          <Text style={[styles.paymentMethod, styles.backTypo]}>
            Payment method
          </Text>
          <TouchableOpacity
            style={[styles.paymentMethod, styles.backTypo]}
            onPress={() => setModalVisible(true)}
          >
            <Text>paymentMethod</Text>
          </TouchableOpacity>

          {/* Modal for payment method selection */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View  style={[styles.paymentMethod, styles.backTypo]}>
              <View style={[styles.paymentMethod, styles.backTypo]}>
                <TouchableOpacity
                  style={[styles.paymentMethod, styles.backTypo]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text>Close</Text>
                </TouchableOpacity>

                {/* Payment method options */}
                <TouchableOpacity
                  style={[styles.paymentMethod, styles.backTypo]}
                  onPress={() => handlePaymentMethodChange("Bank Card")}
                >
                  <Text>Bank Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={[styles.paymentMethod, styles.backTypo]}
                  onPress={() => handlePaymentMethodChange("Debit Card")}
                >
                  <Text>Debit Card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TextInput
            style={[styles.cardNumber, styles.backTypo]}
            placeholder="Card number"
            keyboardType="numeric"
            maxLength={16}
          />

          <TextInput
            style={[styles.firstAndLast, styles.backTypo]}
            placeholder="First and last name on the card"
          />

          <TextInput
            style={[styles.email, styles.backTypo]}
            placeholder="Email"
            keyboardType="email-address"
          />

<TextInput
            style={[styles.mmyy, styles.mmyyTypo]}
            placeholder="MM/YY"
            keyboardType="numeric"
            maxLength={5}
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
          />

          <TextInput
            style={[styles.cvv2, styles.mmyyTypo]}
            placeholder="CVV2"
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    position: "absolute",
  },
  AMINA:{
    top:28  },

    
  textTypo: {
    height: 27,
    top: 114,
    textAlign: "center",
    color: Color.lightBlack,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    position: "absolute",
  },
  fillIconLayout: {
    top:67,
    height: 24,
    width: 24,
    position: "absolute",
  },
  androidLayout: {
    height: 43,
    left:10,
    width: 335,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  androidChildLayout: {
    width: 112,
    top: 468,
    height: 43,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  mmyyTypo: {
    
    textAlign: "center",
    
    color: Color.lightBlack,
    fontSize: FontSize.smallNormalBold_size,
    position: "absolute",
  },
  back: {
    left: 2,
    width: 89,
    color: Color.lightBlack,
    fontSize: FontSize.iOSHeadlineBold_size,
    top: -5,
    height: 50,
  },
  backWrapper: {
    top: 2,
    width: 79,
    height: 20,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge3Child: {
    left: 7,
    width: 341,
    height: 107,
    backgroundColor: '#f0f0f0',
    borderRadius: Border.br_11xl,
    top: 58,
    position: "absolute",
  },
  payment: {
    width: 100,
    height: 23,
    top: 64,
    textAlign: "center",
    color: Color.lightBlack,
   
    fontSize: FontSize.iOSHeadlineBold_size,
    left: 10,
    position: "absolute",
  },
  text: {
    left: 277,
    width: 47,
  },
  text1: {
    left: 201,
    width: 64,
    height: 34,
    top: 114,
    textAlign: "center",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
    fontSize: FontSize.iOSHeadlineBold_size,
    position: "absolute",
  },
  text2: {
    left: 64,
    width: 129,
    
  },
  mastercardLogo1Icon: {
    top: 107,
    left: 11,
    width: 53,
    height: 41,
    position: "absolute",
  },
  editFillIcon: {
    top: 71,
    left: 304,
    
  },
  androidLarge3Item: {
    top: 204,
    left: 32,
  },
  androidLarge3Inner: {
    top: 270,
    left: 38,
  },
  rectangleView: {
    top: 399,
    left: 30,
  },
  androidLarge3Child1: {
    left: 32,
  },
  androidLarge3Child2: {
    left: 204,
  },
  androidLarge3Child3: {
    top: 335,
    left: 34,
  },
  paymentMethod: {
    top: 342,
    left: 37,
    width: 140,
    height: 35,

    fontSize: FontSize.smallNormalBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  androidLarge3Child4: {
    top: 671,
    left: 54,
    backgroundColor: Color.colorDarkcyan,
    width: 249,
    height: 55,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  donateNow: {
    top: 680,
    left: 93,
    fontSize: FontSize.smallNormalBold_size,
    color: Color.lightWhite,
    width: 168,
    height: 26,
    textAlign: "center",
    lineHeight: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  signOutCircleDuotone: {
    left: -7,
    width: 54,
    height: 50,
    top: -10,
    position: "absolute",
  },
  creditCardFillIcon: {
    top: 61,
    left: 108,
    fontSize: FontSize.smallNormalBold_size,
  },
  cardNumber: {
    top: 401,
    width: 119,
    height: 41,
    left: 30,
    color: Color.lightBlack,
    fontSize: FontSize.smallNormalBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  firstAndLast: {
    top: 199,
    left: 35,
    width: 241,
    height: 59,
    color: Color.lightBlack,
    fontSize: FontSize.smallNormalBold_size  ,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
    lineHeight: 30,
  },
  email: {
    top: 279,
    left: -30,
    width: 191,
    height: 25,
    color: Color.lightBlack,
    fontSize: FontSize.smallNormalBold_size,
    textAlign: "center",
    fontFamily: FontFamily.kalamRegular,
  
  },
  mmyy: {
    fontSize: FontSize.smallNormalBold_size,
    left: 45,
    width: 87,
    height: 62,
    top: 458,
  },
  cvv2: {
    left: 221,
    top: 475,
    width: 75,
    height: 25,
    fontSize: FontSize.smallNormalBold_size
  },
  androidLarge3: {
    top:52,
   
    flex: 1,
    left:28,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default Payment;