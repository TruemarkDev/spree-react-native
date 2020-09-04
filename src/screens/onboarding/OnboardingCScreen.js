import * as React from 'react'
import { View, ImageBackground, Text, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global'

const OnboardingCScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={require('../../../assets/images/onboarding-img-3.png')}
        style={{flex: 1, justifyContent: 'flex-end', paddingVertical: 48, paddingHorizontal: '10%',}}
      >
        <View>
          <Text style={globalStyles.onboardingCardTitle}>You got it</Text>
          <Text style={globalStyles.descriptionText}> Save product for later or buy in three easy steps.</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 24}}>
            <TouchableHighlight style={[globalStyles.roundedButton, globalStyles.centeredContent]}>
              <Text style={globalStyles.descriptiveItem}>Go Shopping</Text>
            </TouchableHighlight>
            <TouchableOpacity>
              <Text style={globalStyles.descriptiveItem}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnboardingCScreen