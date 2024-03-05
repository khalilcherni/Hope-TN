// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View,ScrollView,Pressable } from "react-native";
// import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 

const Poor = () => {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.poor13Parent}>
      <Image
        style={[styles.poor13Icon]}
        contentFit="cover"
        source={require("../assets/poverty1.jpg")}
      />
      <Image
        style={styles.poverty51Icon}
        contentFit="cover"
        source={require("../assets/poverty5.jpg")}
      />
      <Image
        style={[styles.poverty31Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poverty3.jpg")}
      />
      <Text style={[styles.aTunisianMother, styles.povertyRateByFlexBox]}>
        A Tunisian mother, Jamila Ghuili, 55, looks for plastic in a garbage
        container to earn money in Tunis, Tunisia
      </Text>
      <Text style={[styles.text, styles.textTypo]}>{`

`}</Text>
      <Text
        style={[styles.ghuili55Gathers, styles.textTypo]}
      >{`Ghuili, 55, gathers a few kilograms of dirt-covered plastic each day, foraged from heaps of garbage dumped at the roadside.
The proceeds from selling the plastic, combined with limited financial assistance from the government, amount to 190 Tunisian dinars ($US69) a month, around half her monthly rent.`}</Text>
      <Text
        style={[styles.hamzaAyariWho, styles.textTypo]}
      >{`Hamza Ayari, who buys the bottles and re-sells them to factories, says many people are doing the same. “They don’t have any other job, they are poor people,” he said. 
Desperate for better lives, some of Omrane Superieur’s residents are hopeful about Saied’s move, even though major parties in parliament have decried it as a coup and a threat to Tunisia’s nascent democracy.
“I salute the people who voted for him, he is a good person,” said Fakhreddine Wannas, 56, a resident. “I hope he can take us out of the dark and into the light.” `}</Text>
      <Image
        style={[styles.sdf21Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sdf2.webp")}
      />
      <Text style={[styles.onHabibBourguiba, styles.onHabibBourguibaTypo]}>
        On Habib Bourguiba street in the capital Tunis, not far from the
        Ministry of Women, Children and Family Affairs, dozens of children walk
        around with tissue packs and flowers in their hands, trying to persuade
        customers to buy them.
      </Text>
      <Text style={[styles.theseChildrenAre, styles.onHabibBourguibaTypo]}>
        These children are of all ages, some of whom are under ten years old.
        They were forced to leave their homes out of necessity and the need for
        survival and were thrown into the streets, finding themselves between a
        reality full of suffering and an unknown future that may be even
        harsher.
      </Text>
      <Text style={[styles.povertyRateBy, styles.povertyRateByFlexBox]}>
        poverty rate by governorate
      </Text>
      <Image
        style={styles.captureDcranPoor1}
        contentFit="cover"
        source={require("../assets/Capture d’écran poor.png")}
      />
      <Text style={[styles.preparedByTheContainer, styles.frameChildLayout]}>
        Prepared by the National Institute of Statistics, in collaboration with
        the World Bank, the report indicates that although the incidence in the
        coastal regions of Greater Tunis and the North-East and Center-East is
        very low, there is however a few delegations with a relatively high
        impact.The concentration of poor people is mainly observed in the
        non-coastal regions of Central and Northern Tunisia. The three
        delegations with the highest poverty rates are Hassi El Frid, Djedeliane
        and El Ayoun, all concentrated in central Tunisia.
      </Text>

      <Pressable
  style={styles.nextButton}
  onPress={() => navigation.navigate("donation")}
>
  <Text style={[styles.donate, styles.donateTypo]}>Donate</Text>
</Pressable>

      
    </View>
    </ScrollView>
  );
  
  }
const styles = StyleSheet.create({
  iconPosition: {
    left: 18,
    height: 78,
  },
  iconLayout: {
    borderRadius: 8,
    position: "absolute",
  },
  povertyRateByFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    // fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  onHabibBourguibaTypo: {
    left: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    
  },
  frameChildLayout: {
    width: 400,
    position: "absolute",
  },
  donateTypo: {
    height: 53,
    width: 186,
    color: Color.colorWhite,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    
    position: "absolute",
  },
  poor13Icon: {
    top: 655,
    borderRadius:7,
    width: 129,
    height: 98,
    left: 28,
    position: "absolute",
  },
  poverty51Icon: {
    top: 689,
    left: 190,
    borderRadius: 6,
    width: 200,
    height: 145,
    position: "absolute",
  },
  poverty31Icon: {
    top: 38,
    borderRadius:6,
    left: 48,
    width: 300,
    height: 166,
  },
  aTunisianMother: {
    top: 215,
    left: 78,
    fontSize: 10,
    width: 241,
    height: 40,
   
    color: Color.colorBlack,
  },
  text: {
    top: 270,
    left: 11,
    fontSize: FontSize.size_xs,
  },
  ghuili55Gathers: {
    top: 273,
    width: 380,
    left: 20,
    fontSize: FontSize.size_xs,
    height: 170,
  },
  hamzaAyariWho: {
    top: 420,
    left: 20,
    width: 380,
    height: 300,
  },
  sdf21Icon: {
    top: 766,
    width: 129,
    height: 98,
    left: 28,
  },
  onHabibBourguiba: {
    top: 879,
    width: 400,
    height: 300,
    position: "absolute",
  },
  theseChildrenAre: {
    top: 991,
    width: 400,
    height: 203,
    position: "absolute",
  },
  povertyRateBy: {
    fontWeight: "700",
    top: 1120,
    left: 55,
    fontSize: 20,
    width: 563,
    height: 76,
  },
  captureDcranPoor1: {
    top: 1175,
    left: 30,
    width: 340,
    height: 190,
    position: "absolute",
  },
  preparedByTheContainer: {
    top: 1390,

    height: 269,
    left: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
   
  },
  frameChild: {
    top: 1430,
    left: 36,
    borderRadius: Border.br_xl,
    height: 71,
  },
  donate: {
    top: 15,
    left: 92,
    fontSize: 25,
    color:'white',
    width: 286,
    height: 23,
  },
  nextButton: {
    borderRadius: 15,
    backgroundColor: Color.colorDarkcyan,
    top: 1650,
    height: 70,
    width: 272,
    left: 74,
    position: "absolute",
  },
  
  poor13Parent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1900,
    overflow: "hidden",
    top: 50,
    
  }
  
  ,
});

export default Poor;