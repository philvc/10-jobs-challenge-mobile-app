import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const StartChallengeButton = () => {
  // Attributes
  const [modalVisible, setModalVisible] = useState(false)
  // Handlers
  function handleOnPress() {
    setModalVisible(true)
  }

  return (
    <View>
      <View>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Start a new 10 jobs challenge</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View>

        </View>
      </Modal>
    </View>
  )
}

export default StartChallengeButton;