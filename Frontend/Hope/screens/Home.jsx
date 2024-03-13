import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Picker } from '@react-native-picker/picker';


const { width, height } = Dimensions.get('window');

const HomeRE = () => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);
  const [language, setLanguage] = useState('en'); // State for selected language

    // Function to render two images per page
    const renderImages = () => {
      const pages = [];
      for (let i = 0; i < images.length; i += 2) {
        pages.push(
          <View key={i} style={styles.carouselPage}>
            <Image
              style={styles.carouselImage}
              contentFit="cover"
              source={images[i]}
            />
            {images[i + 1] && (
              <Image
                style={styles.carouselImage}
                contentFit="cover"
                source={images[i + 1]}
              />
            )}
          </View>
        );
            }
          }

  const translations = {
    en: {
      welcome: "Welcome",
      categories: "Categories",
      ourWork: "Our Work",
      povertyInTunisia: "Poverty in Tunisia",
      learnMore: "Learn More",
      povertyDescription: "In today's world, poverty remains a harsh reality for millions, depriving individuals of basic necessities and dignity. Among the most vulnerable are the homeless, struggling to find shelter and stability amidst societal neglect. For orphans, the absence of familial support compounds their challenges, leaving them adrift in a world of uncertainty. Access to clean water, a fundamental human right, eludes many, exacerbating health crises and perpetuating cycles of deprivation. Moreover, the elderly, often overlooked, face isolation and neglect, despite their invaluable wisdom and experience. Together, we must advocate for change, extending a compassionate hand to those in need.",
      makeDonation: "If you are an ally of our cause and you have something you want to donate, your contribution can make a real difference. Your support helps us continue our mission and reach those in need. Please press the button below to make a donation:",
      pressHere: "Press Here",
    },
    ar: {
      welcome: "مرحباً",
      categories: "الفئات",
      ourWork: "عملنا",
      povertyInTunisia: "الفقر في تونس",
      learnMore: "معرفة المزيد",
      povertyDescription:" في عالمنا الحالي، يظل الفقر حقيقة قاسية لملايين الأشخاص، محرومًا الأفراد من الاحتياجات الأساسية والكرامة. من بين الأكثر ضعفًا هم المشردين، الذين يكافحون من أجل العثور على مأوى واستقرار في ظل الإهمال الاجتماعي. بالنسبة للأيتام، تزداد تحدياتهم بسبب غياب الدعم الأسري، مما يتركهم عالقين في عالم من عدم اليقين. الوصول إلى المياه النظيفة، حق إنساني أساسي، يفوت الكثيرين، مما يزيد من أزمات الصحة ويُديم دورات الحرمان. علاوة على ذلك، يواجه المسنون، الذين غالبًا ما يتم تجاهلهم، العزلة والإهمال، على الرغم من حكمتهم وخبرتهم الثمينة. معًا، يجب أن ندعو للتغيير، ممددين يد الرحمة لأولئك الذين في حاجة",
      makeDonation: "إذا كنت حليفًا لقضيتنا ولديك شيء ترغب في التبرع به، فإن مساهمتك يمكن أن تحقق فرقًا حقيقيًا. دعمك يساعدنا على مواصلة مهمتنا والوصول إلى أولئك الذين في حاجة. يرجى الضغط على الزر أدناه للتبرع:",
      pressHere: "اضغط هنا",
    },
    fr: {
      welcome: "Bienvenue",
      categories: "Catégories",
      ourWork: "Notre Travail",
      povertyInTunisia: "La Pauvreté en Tunisie",
      learnMore: "En savoir plus",
      povertyDescription: "Dans le monde daujourdhui, la pauvreté reste une réalité cruelle pour des millions de personnes, les privant de leurs besoins fondamentaux et de leur dignité. Parmi les plus vulnérables se trouvent les sans-abri, qui luttent pour trouver un abri et une stabilité au milieu de la négligence sociale. Pour les orphelins, labsence de soutien familial aggrave leurs difficultés, les laissant à la dérive dans un monde dincertitude. Laccès à leau propre, un droit humain fondamental, échappe à beaucoup, exacerbant les crises sanitaires et perpétuant les cycles de privation. De plus, les personnes âgées, souvent négligées, font face à lisolement et à la négligence, malgré leur sagesse et leur expérience inestimables. Ensemble, nous devons plaider pour le changement, en tendant une main compatissante à ceux dans le besoin",
      makeDonation: "Si vous êtes un allié de notre cause et que vous avez quelque chose à donner, votre contribution peut vraiment faire la différence. Votre soutien nous aide à poursuivre notre mission et à atteindre ceux dans le besoin. Veuillez appuyer sur le bouton ci-dessous pour faire un don:",
      pressHere: "Appuyez ici",
    },
  };

  console.log("Poverty Description (English):", translations.en.povertyDescription);
  console.log("Make Donation (English):", translations.en.makeDonation);
  console.log("Poverty Description (Arabic):", translations.ar.povertyDescription);
  console.log("Make Donation (Arabic):", translations.ar.makeDonation);
  console.log("Poverty Description (French):", translations.fr.povertyDescription);
  console.log("Make Donation (French):", translations.fr.makeDonation);


  const handleHomeNavigation = () => {
    navigation.navigate('Home');
    setIsClicked(true);
  };
  const handleChatNavigation = () => {
    navigation.navigate('ChatRoom');
    setIsClicked(true);
  };
  const handleSchoolNavigation = () => {
    navigation.navigate('School');
    setIsClicked(true);
  };
  const handleMESNavigation = () => {
    navigation.navigate('Messages');
    setIsClicked(true);
  };
  const navigateToPeopleWhoNeedWater = () => {
    navigation.navigate("categoriePeopleWhoNeedWater");
    setIsClicked(true);
  };
  const navigateToPoor = () => {
    navigation.navigate("poorPeople");
    setIsClicked(true);
  };
  const navigateToPalestine = () => {
    navigation.navigate("Palestine");
    setIsClicked(true);
  };
  const navigateToElde = () => {
    navigation.navigate("Elders");
    setIsClicked(true);
  };
  const handlePress = () => {
    navigation.navigate('ChatScreen');
  };
  const handlePressHelp = () => {
    navigation.navigate('Messages');
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <ScrollView>
      {/* Language Selection Dropdown */}
      <View style={styles.languageDropdown}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Arabic" value="ar" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>

      <View style={styles.homeRe}>
        <Pressable
          style={[styles.profileCircle, styles.ellipseIconLayout]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon, styles.iconLayout3]}
            contentFit="cover"
             // source={require("../assets/profile-circle.png")}

          />
        </Pressable>
        <Text style={[styles.welcome, styles.welcomeTypo]}>{translations[language].welcome}</Text>

        <Image
          style={styles.homeReChild}
          contentFit="cover"
          // source={require("../assets/hh.png")}

        />
        <Text style={[styles.categories, styles.categoriesTypo]}>{translations[language].categories}</Text>
        <View  style={styles.images}>
          <Pressable onPress={navigateToPeopleWhoNeedWater}>
            <Image
              style={[styles.homeReItem, styles.homePosition, isClicked && styles.clickedIcon]}
              contentFit="cover"
                // source={require("../assets/Ellipse_52.png")}
            />
          </Pressable>
          <Pressable onPress={navigateToPeopleWhoNeedWater}>
            <Image
              style={[styles.dropIcon, styles.iconPosition]}
              contentFit="cover"
              // source={require("../assets/drop .png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper, styles.homePosition]}
            onPress={() => navigation.navigate("poorPeople")}
          >
            <Image
              style={styles.iconLayout3}
              contentFit="cover"
               // source={require("../assets/Ellipse_52.png")}
            />
          </Pressable>
          <Pressable onPress={navigateToPoor}>
            <Image
              style={[styles.dollarCircleIcon, styles.iconPosition]}
              contentFit="cover"
             // source={require("../assets/poverty.png")}
            />
          </Pressable>
          <Pressable onPress={ navigateToElde}>
            <Image
              style={[styles.homeReInner, styles.homePosition]}
              contentFit="cover"
              // source={require("../assets/Ellipse_52.png")}
            />
          </Pressable>
          <Pressable onPress={ navigateToElde}>
            <Image
              style={[styles.downloadRemovebgPreview1Icon, styles.iconLayout2]}
              contentFit="cover"
               // source={require("../assets/eld.png")}
            />
          </Pressable >
          <Pressable onPress={navigateToPalestine}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              // source={require("../assets/Ellipse_52.png")}
            />
            <Image
              style={[styles.depositphotos105691240StockIcon, styles.iconLayout2]}
              contentFit="cover"
              // source={require("../assets/mosque.png")}
            />
          </Pressable>
          <Image
            style={[styles.homeReChild1, styles.homePosition]}
            contentFit="cover"
            // source={require("../assets/Ellipse_52.png")}
          />
          <Image
            style={styles.seniorCitizenLogoPngSeniorIcon}
            contentFit="cover"
             // source={require("../assets/funeral.png")}
          />
        </View>

        <Text style={[styles.ourWork, styles.welcomeTypo]}>{translations[language].ourWork}</Text>
        <View   style={styles.imageWork}>
          <Image
            style={[styles.demt1Icon, styles.iconLayout1]}
            contentFit="cover"
              // source={require("../assets/tunisia-covid-station-767_1_1.png")}
          />
          <Image
            style={[styles.tunisiaCovidStation7671Icon, styles.iconLayout1]}
            contentFit="cover"
             // source={require("../assets/charity-work.png")}
          />
          <Image
            style={[styles.tunisiaCovidStation7671Icon, styles.iconLayout1]}
            contentFit="cover"
             // source={require("../assets/charity-work.png")}
          />
        </View>
        <Text style={[styles.povertyInTunisia, styles.categoriesTypo]}>{translations[language].povertyInTunisia}</Text>
        <Image
          style={styles.jpgRemovebgPreview1Icon}
          contentFit="cover"
        // source={require("../assets/jpg-removebg-preview_1.png")}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>
          {translations[language].povertyDescription}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>{translations[language].learnMore}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text>{translations[language].makeDonation}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePressHelp}>
          <Text style={styles.buttonText}>{translations[language].pressHere}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="message-reply-text" size={width * 0.06} color="black" /></TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  ellipseIconLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  
  },
  images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clickedIcon: {
    tintColor: '#209FA6', // Change the color to blue when clicked
  },
  welcomeTypo: {
    textAlign: "left",
    color: Color.lightBlack,
    // fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
    marginTop:15,
    fontWeight: "700",
  },
  categoriesTypo: {
    left: 9,
    textAlign: "left",
    color: Color.lightBlack,
    fontFamily: FontFamily.kalamRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homePosition: {
    top: 270,
    height: 60,
    width: 60,
    position: "absolute",
  },
  iconPosition: {
    top: 288,
    position: "absolute",
  },
  iconLayout2: {
    width: 47,
    position: "absolute",
  },
  iconLayout1: {
    height: 159,
    width: 159,
    borderRadius: Border.br_3xs,
    position: "absolute",
    marginTop:10
  },
  houseIconLayout: {
    height: "2.92%",
    width: "11.94%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 122,
  },
  profileCircle: {
    bottom: 1310,
    left: 180,
  },
  welcome: {
    top: 5,
    left: 140,
    width: 181,
    height: 80,
  },
  menuIcon: {
    marginLeft: -174,
    bottom: 1331,
    width: 27,
    height: 30,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  homeReChild: {
    // marginLeft: -165,
    bottom: 1146,
    width: 350,
    height: 160,
    left: 15,
    position: "absolute",
    backgroundColor: '#209FA6',
  },
  categories: {
    top: 230,
    width: 155,
    height: 55,
    fontWeight: "700",
  },
  homeReItem: {
    left: 6,
  },
  dropIcon: {
    left: 24,
    width: 25,
    height: 25,
  },
  wrapper: {
    left: 73,
  },
  dollarCircleIcon: {
    left: 91,
    width: 24,
    height: 24,
  },
  homeReInner: {
    left: 143,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    
  },
  button: {
    backgroundColor: "#209FA6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadRemovebgPreview1Icon: {
    top: 282,
    left: 149,
    height: 36,
  },
  ellipseIcon: {
    top: 267,
    left: 207,
  },
  depositphotos105691240StockIcon: {
    top: 265,
    left: 213,
    height: 64,
  },
  homeReChild1: {
    left: 279,
  },
  seniorCitizenLogoPngSeniorIcon: {
    top: 283,
    left: 287,
    width: 43,
    height: 33,
    position: "absolute",
  },
  ourWork: {
    top: 325,
    left: 12,
    width: 128,
    height: 55,
    fontWeight: "700",
  },
  demt1Icon: {
    top: 370,
    left: 7,
  },
  tunisiaCovidStation7671Icon: {
    top: 372,
    left: 190,
  },
  povertyInTunisia: {
    top: 548,
    width: 194,
    height: 63,
    fontWeight: "700",
  },
  jpgRemovebgPreview1Icon: {
    top: 593,
    left: 15,
    width: 375,
    height: 680,
    position: "absolute",
  
  },
  rectangleIcon: {
    top: 1072,
    left: 9,
    width: 470,
    height: 248,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vuesaxbrokenmessageText: {
    left: "86.11%",
    top: "95.99%",
    right: "1.94%",
    bottom: "1.09%",
  },
  houseIcon: {
    top: "95.77%",
    right: "43.61%",
    bottom: "1.31%",
    left: "44.44%",
    height: "2.92%",
    width: "11.94%",
    position: "absolute",
  },
  vuesaxboldchart: {
    left: "2.78%",
    top: "96.06%",
    right: "85.28%",
    bottom: "1.02%",
  },
  homeRe: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    top:55,
    height: 1370,
    overflow: "hidden",
    width: 360,
    left:21
  },
  images:{
    left:15
  },
  imageWork: {
    left:10
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: height * 0.02,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  text:{
    width:350
  },
  languageDropdown: {
    Color:"#f0f0f03",
    position: 'absolute',
    top: 45,
    left: 15,
    zIndex: 999,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 1,
  },
  picker: {
    width: 110,
    height: 5,
  }
});

export default HomeRE;