import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Language from './Language'; // Import the Language component
import { Picker } from '@react-native-picker/picker';


const Poor = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to update the language
  const handleLanguageChange = (langCode) => {
      setLanguage(langCode);
  };


    // Function to get text content based on selected language
    const getTextContent = () => {
        // English content
        if (language === "en") {
            return {
                title: "A Tunisian mother, Jamila Ghuili, 55, looks for plastic in a garbage container to earn money in Tunis, Tunisia",
                ghuili55Gathers: "Ghuili, 55, gathers a few kilograms of dirt-covered plastic each day, foraged from heaps of garbage dumped at the roadside. The proceeds from selling the plastic, combined with limited financial assistance from the government, amount to 190 Tunisian dinars ($US69) a month, around half her monthly rent.",
                hamzaAyariWho: "Hamza Ayari, who buys the bottles and re-sells them to factories, says many people are doing the same. “They don’t have any other job, they are poor people,” he said. Desperate for better lives, some of Omrane Superieur’s residents are hopeful about Saied’s move, even though major parties in parliament have decried it as a coup and a threat to Tunisia’s nascent democracy. “I salute the people who voted for him, he is a good person,” said Fakhreddine Wannas, 56, a resident. “I hope he can take us out of the dark and into the light.”",
                onHabibBourguiba: "On Habib Bourguiba street in the capital Tunis, not far from the Ministry of Women, Children and Family Affairs, dozens of children walk around with tissue packs and flowers in their hands, trying to persuade customers to buy them.",
                theseChildrenAre: "These children are of all ages, some of whom are under ten years old. They were forced to leave their homes out of necessity and the need for survival and were thrown into the streets, finding themselves between a reality full of suffering and an unknown future that may be even harsher.",
                povertyRateBy: "poverty rate by governorate",
                preparedByTheContainer: "Prepared by the National Institute of Statistics, in collaboration with the World Bank, the report indicates that although the incidence in the coastal regions of Greater Tunis and the North-East and Center-East is very low, there is however a few delegations with a relatively high impact.The concentration of poor people is mainly observed in the non-coastal regions of Central and Northern Tunisia. The three delegations with the highest poverty rates are Hassi El Frid, Djedeliane and El Ayoun, all concentrated in central Tunisia."
            };
        } 
        // French content
        else if (language === "fr") {
            return {
                title: "Une mère tunisienne, Jamila Ghuili, 55 ans, cherche du plastique dans une poubelle pour gagner de l'argent à Tunis, en Tunisie",
                ghuili55Gathers: "Ghuili, 55 ans, ramasse chaque jour quelques kilogrammes de plastique recouvert de saleté, récupéré dans des tas d'ordures jetés au bord de la route. Le produit de la vente du plastique, combiné à une assistance financière limitée du gouvernement, s'élève à 190 dinars tunisiens (69 $ US) par mois, soit environ la moitié de son loyer mensuel.",
                hamzaAyariWho: "Hamza Ayari, qui achète les bouteilles et les revend aux usines, dit que beaucoup de gens font la même chose. « Ils n'ont pas d'autre travail, ce sont des gens pauvres », a-t-il déclaré. Désespérés d'avoir une vie meilleure, certains habitants d'Omrane Supérieur sont optimistes quant à l'action de Saied, même si les principaux partis au parlement l'ont qualifiée de coup d'État et de menace pour la jeune démocratie tunisienne. « Je salue les personnes qui ont voté pour lui, c'est une bonne personne », a déclaré Fakhreddine Wannas, 56 ans, un résident. « J'espère qu'il pourra nous sortir de l'obscurité et nous mener vers la lumière. »",
                onHabibBourguiba: "Dans la rue Habib Bourguiba, dans la capitale Tunis, non loin du ministère de la Femme, de l'Enfant et de la Famille, des dizaines d'enfants se promènent avec des paquets de mouchoirs et des fleurs à la main, essayant de convaincre les clients de les acheter.",
                theseChildrenAre: "Ces enfants ont de tous âges, certains ont moins de dix ans. Ils ont été contraints de quitter leur domicile par nécessité et par besoin de survie et ont été jetés dans la rue, se retrouvant entre une réalité pleine de souffrance et un avenir inconnu qui pourrait être encore plus dur.",
                povertyRateBy: "taux de pauvreté par gouvernorat",
                preparedByTheContainer: "Préparé par l'Institut National de la Statistique, en collaboration avec la Banque Mondiale, le rapport indique que bien que l'incidence dans les régions côtières du Grand Tunis et du Nord-Est et du Centre-Est soit très faible, il y a cependant quelques délégations avec un impact relativement élevé. La concentration de personnes pauvres est principalement observée dans les régions non côtières du Centre et du Nord de la Tunisie. Les trois délégations ayant les taux de pauvreté les plus élevés sont Hassi El Frid, Djedeliane et El Ayoun, toutes concentrées dans le centre de la Tunisie."
            };
        }

        else if (language === "ar") {
          return {
              title: "أم تونسية تُدعى جميلة غيلي، تبلغ من العمر 55 عامًا، تبحث عن البلاستيك في حاوية القمامة لكسب المال في تونس، تونس",
              hamzaAyariWho: "يقول حمزة عياري، الذي يشتري الزجاجات ويعيد بيعها إلى المصانع، إن الكثير من الناس يقومون بنفس العمل. ليس لديهم وظيفة أخرى، هم أشخاص فقراء، كما أكد. بينما يشعر بعض سكان منطقة عمران العليا باليأس للحصول على حياة أفضل، إلا أنهم متفائلون بفعل سعيد، حتى وإن اعتبرت الأحزاب الرئيسية في البرلمان ذلك انقلابًا وتهديدًا للديمقراطية التونسية الشابة. أرحب بالأشخاص الذين صوتوا له، إنه شخص جيد، كما صرح فخر الدين وناس، البالغ من العمر 56 عامًا، وهو أحد السكان. آمل أن يستطيع أن يخرجنا من الظلام ويقودنا نحو النور.",
              ghuili55Gathers: "يقوم غويلي، 55 عامًا، بجمع بضعة كيلوغرامات من البلاستيك المغطى بالأوساخ كل يوم من أكوام القمامة على جانب الطريق. وتبلغ عائدات بيع البلاستيك، إلى جانب المساعدة المالية المحدودة من الحكومة، 190 دينارًا تونسيًا (69 دولارًا أمريكيًا) لكل يوم",
              onHabibBourguiba: "في شارع الحبيب بورقيبة، في العاصمة تونس، ليس بعيدًا عن وزارة المرأة والطفل والأسرة، يتجول العشرات من الأطفال بأكياس من الأنسجة وزهور في أيديهم، حاولين إقناع الزبائن بشرائها.",
              theseChildrenAre: "هؤلاء الأطفال من جميع الأعمار، بعضهم لم يتجاوز العشر سنوات. لقد تم إجبارهم على ترك منازلهم بحاجة وضرورة للبقاء على قيد الحياة، وتم طردهم إلى الشارع، وجدوا أنفسهم بين واقع مليء بالمعاناة ومستقبل غير معروف قد يكون أصعب.",
              povertyRateBy: "معدل الفقر حسب المحافظة",
              preparedByTheContainer: "تم إعداده بواسطة المعهد الوطني للإحصاء، بالتعاون مع البنك الدولي، يشير التقرير إلى أنه على الرغم من أن الانتشار في المناطق الساحلية للعاصمة تونس الكبرى وشمال شرقها ووسط شرقها ضئيل جدًا، إلا أن هناك بعض الولايات التي تشهد تأثيرًا نسبيًا عاليًا. يتم ملاحظة تركز الأشخاص الفقراء بشكل رئيسي في المناطق غير الساحلية بوسط وشمال تونس. الثلاث ولايات ذات أعلى معدلات للفقر هي حاسي الفريد، وجدليان، والعيون، كلها تتركز في وسط تونس."
          };
      }
    };

    const textContent = getTextContent();

    return (
        <ScrollView>

<View style={styles.container}>
<View style={styles.pickerContainer}>
  <Picker
    selectedValue={language}
    style={styles.picker}
    onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
  >
    <Picker.Item label="English" value="en" />
    <Picker.Item label="French" value="fr" />
    <Picker.Item label="Arabic" value="ar" />
    {/* Add more languages as needed */}
  </Picker>
</View>
        <View style={styles.content}>
          {/* Your content here */}
          <Text>{textContent.title}</Text>
          {/* Other content... */}
        </View>
      </View>
            <View style={styles.poor13Parent}>
                <Image
                    style={[styles.poor13Icon]}
                    contentFit="cover"
                    source={require("../assets/poor1.jpg")}
                />
                <Image
                    style={styles.poverty51Icon}
                    contentFit="cover"
                    source={require("../assets/poor2.jpg")}
                />
                <Image
                    style={[styles.poverty31Icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/poor3.jpg")}
                />
                <Text style={[styles.aTunisianMother, styles.povertyRateByFlexBox]}>
                    {textContent.title}
                </Text>
                <Text style={[styles.ghuili55Gathers, styles.textTypo]}>
                    {textContent.ghuili55Gathers}
                </Text>
                <Text style={[styles.hamzaAyariWho, styles.textTypo]}>
                    {textContent.hamzaAyariWho}
                </Text>
                <Image
                    style={[styles.sdf21Icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/poor3.jpg")}
                />
                <Text style={[styles.onHabibBourguiba, styles.onHabibBourguibaTypo]}>
                    {textContent.onHabibBourguiba}
                </Text>
                <Text style={[styles.theseChildrenAre, styles.onHabibBourguibaTypo]}>
                    {textContent.theseChildrenAre}
                </Text>
                <Text style={[styles.povertyRateBy, styles.povertyRateByFlexBox]}>
                    {textContent.povertyRateBy}
                </Text>
                <Image
                    style={styles.captureDcranPoor1}
                    contentFit="cover"
                    source={require("../assets/poor3.jpg")}
                />
                <Text style={[styles.preparedByTheContainer, styles.frameChildLayout]}>
                    {textContent.preparedByTheContainer}
                </Text>

                <Pressable
                    style={styles.nextButton}
                    onPress={() => navigation.navigate("donation")}
                >
                    <Text style={[styles.donate, styles.donateTypo]}>Donate</Text>
                </Pressable>

            </View>

      <Language onLanguageChange={handleLanguageChange} />
        </ScrollView>
    );
};


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
    
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pickerContainer: {
    marginTop: 50, // Adjust this value to move the picker down
  },
  picker: {
    height: 40,
    width: 110,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  

});

export default Poor;