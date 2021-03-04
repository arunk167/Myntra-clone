import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import imagePath from '../../../imagePath';

export default class Profile extends Component {
  state = {
    avatarSource: imagePath.profile,
    ismodalVisable: false,
  };

  

  openGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: ' Camera Permission',
          message:
            'Myntra needs access to your camera ' 
            ,
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      
        const options = {
          title: 'Select Avatar',
          customButtons: [{name: 'myntra', title: 'Choose Photo from gallery'}],
          storageOptions: {
            skipBackup: true,
            path: 'images',
            saveToPhotos:true
          },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {uri: response.uri};

            this.setState({
              avatarSource: source,
              ismodalVisable: false,
            });
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

 
  };

  openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: ' Camera Permission',
          message:
            'Myntra needs access to your camera ' +
            'so you can edit your profile.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
       
        const options = {
          title: 'Select Avatar',
          customButtons: [{name: 'myntra', title: 'Click Photo '}],
          storageOptions: {
            skipBackup: true,
            path: 'images',
            saveToPhotos:true
          },
        };
        ImagePicker.launchCamera(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {uri: response.uri};

            this.setState({
              avatarSource: source,
              ismodalVisable: false,
            });
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

 
  };
  _onclosemodal = () => {
    this.setState({
      ismodalVisable: false,
    });
  };
  _openModal = () => {
    this.setState({
      ismodalVisable: true,
    });
  };
  render() {
    const {avatarSource, ismodalVisable} = this.state;
    return (
      <View style={{flex: 1}}>
       
        <View style={{backgroundColor: 'white', minHeight: 120}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={avatarSource}
              style={{height: 80, width: 80, marginVertical: 10}}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={this._openModal}>
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          transparent={true}
          visible={ismodalVisable}
          onRequestClose={this._onclosemodal}
          style={styles.modal}>
          <View style={styles.parentView}>
          
           <Text style={styles.action}>Chosse an action </Text>
           
       
            <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.openGallery}>
                  <Image
                    source={imagePath.gallery}
                    style={{height: 30, width: 30,marginVertical:4}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openGallery}>
                  <Text style={styles.modaltext}>Choose From Gallery</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.openGallery}>
                  <Image
                    source={imagePath.camera}
                    style={{height: 30, width: 30,marginVertical:4}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openCamera}>
                  <Text style={styles.modaltext}>Take Photo from Camera</Text>
                </TouchableOpacity>
              </View>
              {/* <TouchableOpacity onPress={this._onclosemodal}>
                <Text style={styles.modaltext}>close modal</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parentView: {
    marginTop: 'auto',
    backgroundColor: 'white',

    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    elevation: 100,
    paddingVertical: 20,
    borderRadius:10,
  },
  action: {
 textAlign:'center',
    fontSize: 20,
  
  },
  
  text: {
    fontSize: 20,
    marginVertical: 10,
    color: '#FF3E6C',
  },
  modaltext: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    marginHorizontal: 30,
  },
});
