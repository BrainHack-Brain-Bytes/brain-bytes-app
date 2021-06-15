//Obtained from: https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/

import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './CardStyles'

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.image}
      resizeMode="cover"
    />
    <View style={styles.descContainer}>
      <Text style={styles.text}>
        {`${card.name}`}
      </Text>
    </View>
  </View>
)

export default Card