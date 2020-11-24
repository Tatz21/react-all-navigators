//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const WatchListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            FYERS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            DERIBIT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGithubStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/paulrobertlloyd/socialmediaicons/main/github-32x32.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            BINANCE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTwitterStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/paulrobertlloyd/socialmediaicons/main/twitter-32x32.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            COINBASE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAmazonStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/paulrobertlloyd/socialmediaicons/main/amazon-16x16.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            BITMEX
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    padding: 10,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  buttonTwitterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00acee',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  buttonGithubStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  buttonAmazonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 20,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 15,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 5,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 55,
  },
});

export default WatchListScreen;