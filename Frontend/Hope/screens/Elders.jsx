import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions ,TouchableOpacity} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';

const Frame1 = () => {
    const navigation = useNavigation();
    const videoUrl = 'https://youtu.be/Sdx8N-3X_Tw?si=NoU3d2aJJVFWlXDu';
  return (
    <ScrollView>
    <View style={styles.elder31Parent}>
      <Image
        style={styles.elder31Icon}
        contentFit="cover"
        source={require("../assets/elder3.jpeg")}
      />
      <Image
        style={[styles.elder11Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/elder1.jpeg")}
      />
      <Image
        style={[styles.elder21Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/elder2.jpeg")}
      />
      <Image
        style={[styles.elder51Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/elder5.jpeg")}
      />
      <Image
        style={[styles.elder61Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/elder6.jpeg")}
      />
      <Text style={[styles.inTheHeart, styles.theTypo1]}>
        In the heart of Tunisia, a groundbreaking project is emerging—one that
        seeks to provide vital support and care for the elderly population in
        need. The project, aptly named "Elderly Care Initiative," aims to
        address the pressing challenges faced by elderly Tunisians, offering
        them a lifeline of support and companionship in their golden years.
        However, to turn this vision into reality, the initiative relies heavily
        on the generosity and goodwill of donors who recognize the urgent need
        to uplift and empower the elderly in Tunisia.
      </Text>
      <Text style={[styles.atTheCore, styles.theTypo1]}>
        At the core of the Elderly Care Initiative is the provision of
        comprehensive healthcare services tailored to the unique needs of
        elderly individuals. Many seniors in Tunisia struggle to access quality
        healthcare due to financial constraints or limited availability of
        medical facilities. Through the initiative, donations will be directed
        towards establishing mobile medical clinics that will travel to remote
        areas, providing essential health screenings, consultations, and
        treatments to elderly citizens who may otherwise go without care.
        Additionally, funds will support the procurement of medications and
        medical supplies, ensuring that elderly Tunisians receive the
        medications they need to manage chronic conditions and maintain their
        health and well-being.
      </Text>
      <Text style={[styles.beyondHealthcareThe, styles.theTypo]}>
        Beyond healthcare, the Elderly Care Initiative seeks to combat social
        isolation and loneliness among the elderly population. Too often,
        elderly Tunisians find themselves living in isolation, cut off from
        social networks and support systems. To address this issue, the
        initiative plans to establish community centers where elderly
        individuals can gather for social activities, recreational programs, and
        support groups. These centers will serve as vibrant hubs of community
        life, fostering connections and friendships among the elderly while
        providing a sense of belonging and purpose.
      </Text>
      <Text style={[styles.moreoverTheElderly, styles.theTypo]}>
        Moreover, the Elderly Care Initiative recognizes the importance of
        preserving and celebrating the cultural heritage of Tunisia's elderly
        population. Through donations, the initiative will support cultural
        programs and initiatives that seek to honor the rich traditions,
        stories, and wisdom of elderly Tunisians. From oral history projects to
        traditional arts and crafts workshops, these initiatives will not only
        preserve cultural heritage but also provide opportunities for elderly
        individuals to share their knowledge and experiences with younger
        generations.
      </Text>
      <Text style={[styles.howeverNoneOf, styles.theTypo]}>
        However, none of this can be achieved without the support of generous
        donors who are willing to contribute to this noble cause. Donations to
        the Elderly Care Initiative will have a direct and tangible impact on
        the lives of elderly Tunisians, providing them with the care, support,
        and companionship they deserve in their later years. Every donation, no
        matter how big or small, will help to fund vital healthcare services,
        establish community centers, and preserve cultural heritage, empowering
        elderly Tunisians to live with dignity, independence, and fulfillment.
      </Text>
      <Text style={[styles.inEssenceThe, styles.theTypo]}>
        In essence, the Elderly Care Initiative represents a beacon of hope for
        elderly Tunisians, offering them a brighter and more promising future.
        Through the collective efforts of donors and volunteers, this initiative
        has the power to transform the lives of countless elderly individuals,
        ensuring that they are valued, respected, and cherished members of
        society. Together, let us join hands and make a difference in the lives
        of Tunisia's elderly population by supporting the Elderly Care
        Initiative. Your donation can help to bring comfort, joy, and meaning to
        the lives of elderly Tunisians in need.
      </Text>
      <WebView
          source={{ uri: videoUrl }}
          allowsFullscreenVideo
          style={[styles.d7unHighres17024256661Icon]}
        />
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
      <TouchableOpacity>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          onPress={() => navigation.navigate("donation")}
          source={require("../assets/Group_3040.png")}
        />
        <Text style={styles.donate}></Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 100,
    width: 150,
    borderRadius: Border.br_8xs,
    top:500,
    position: "absolute", //(Dimensions.get('window').width - 150) / 2
    
  },
  d7unHighres17024256661Icon: {
    top: 1300,
    borderRadius: 14,
    width: 370,
    height: 200,
    left: 20,
    position: "absolute",
  },
  iconLayout: {
    top: 623,
    height: 100,
    width: 150,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  theTypo1: {
    width: 400,
    color: Color.lightBlack,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    fontFamily: FontFamily.interRegular,
    position: 'absolute',
    textAlign: 'center',
    left: (Dimensions.get('window').width - 400) / 2,
    // top: (Dimensions.get('window').height - FontSize.unifiedDesignDeprecatedFootnote_size) / 2,
  },
  theTypo: {
    height: 165,
    width: 400,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.unifiedDesignDeprecatedFootnote_size,
    left: (Dimensions.get('window').width - 400) / 2,
    position: "absolute",
  },
  groupChildLayout: {
    height: 71,
    width: 289,
    position: "absolute",
  },
  elder31Icon: {
    width: 308,
    height: 164,
    borderRadius: Border.br_xl,
    position: 'absolute',
    top: 40, // Center vertically
    left: (Dimensions.get('window').width - 308) / 2, // Center horizontally
  },
  elder11Icon: {
    top: 741,
    left: 197,
  },
  elder21Icon: {
    top: 744,
    left: 25,
  },
  elder51Icon: {
    left: 197,
  },
  elder61Icon: {
    left: 26,
  },
  inTheHeart: {
    top: 213,
    left: 27,
    height: 150,
  },
  atTheCore: {
    top: 330,
    height: 225,
    left: 26,
  },
  beyondHealthcareThe: {
    top: 750,
  },
  moreoverTheElderly: {
    top: 870,
  },
  howeverNoneOf: {
    top: 990,
  },
  inEssenceThe: {
    top: 1110,
  },
  groupChild: {
    top: 0,
    left: (Dimensions.get('window').width-350) / 2 ,
    borderRadius: Border.br_xl,
  },
  donate: {
    top: 23,
    left: 101,
    fontSize: FontSize.size_6xl,
    color: Color.lightWhite,
    width: 87,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  vectorParent: {
    top: 1623,
    left: 36,
  },
  elder31Parent: {
    backgroundColor: Color.lightWhite,
    flex: 1,
    width: "100%",
    height: 1763,
    overflow: "hidden",
  },
});

export default Frame1;
