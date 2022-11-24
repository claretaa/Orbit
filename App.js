import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';


export default class App extends React.Component {
  state = {
    screenText: 'Press a button!'
  }

  changeText = (text) => {
    console.log(text + 'has been pressed!')
    this.setState({
      screenText : text
    })
  }

  render (){
  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontSize:30}}>{this.state.screenText}</Text>
      <StatusBar style="light" />
      </View>

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}> 
          <Pressable onPress={()  => this.changeText('Radar')} style={styles.RadarBehave}
          android_ripple={{borderless:true, radius:50}}>
            <Image 
              style={{width: 56, height: 75}}
              source={require('./assets/Radar_Active.png')}
            />
          </Pressable>

          <Pressable onPress={()  => this.changeText('Chat')} style={styles.ChatBehave}
          android_ripple={{borderless:true, radius:50}}>
            <Image 
              style={{width:40, height: 40}}
              source={require('./assets/Chat-Bubble-Logo_Active.png')}
            />
          </Pressable>

          <Pressable onPress={()  => this.changeText('Profile')} style={styles.ProfileBehave}
          android_ripple={{borderless:true, radius:50}}>
            <Image 
              style={{width: 66, height: 80}}
              source={require('./assets/Astronaut_Active.png')}
            />
          </Pressable>
          
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#4C3575',
    width: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 10
  },

  RadarBehave: {
    padding: 6
  },

  ChatBehave: {
    padding:25
  },

  ProfileBehave: {
    padding: 2
  }
});
