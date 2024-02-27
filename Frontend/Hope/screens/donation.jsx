import * as React from "react";
import { StyleSheet, TextInput,View,TouchableOpacity, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

 
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
       <Text  style={{ height: 66, fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10, textAlign: 'center', fontFamily: FontFamily.kanit }}>Donation</Text>
      <View style={{ width: '80%', marginBottom: 10}}>
       
       

        <TextInput
          placeholder="50tnd"
          placeholderTextColor="white"
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="80tnd"
          placeholderTextColor="white"
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="100tnd"
          placeholderTextColor="white"
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <TextInput
          placeholder="120tnd"
          placeholderTextColor="white"
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
        <Text>or</Text>
        <TextInput
          placeholder="enter here"
          placeholderTextColor="white"
    
          style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}
        />
           <View   style={{ height: 55, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#209FA6', width: 290, borderRadius: 30, marginLeft: 15, textAlign: 'center' }}>
        <TouchableOpacity >
           
            <Text  style={styles.buttonText} >Donate</Text>
          </TouchableOpacity>
          </View>
       </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    borderRadius: 30,
  },
  input: {
    height: 55,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    width: 290,
    borderRadius: 30,
    marginLeft: 15,
    textAlign: 'center',
    color:'white'
  },
  button: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#209FA6',
    width: 290,
    borderRadius: 30,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop:10
   
  },
  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0085FF',
    textAlign: 'center',
    marginLeft:500
  },
  haveAccountText: {
    color: 'black',
    marginTop: 2,
    marginLeft: -100,
    marginBottom: 10
  },
  signInText: {
    color: '#0085FF'
  }
});

export default AndroidLarge2;