import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
    card: {
        height: SCREEN_HEIGHT - 120,
        width: "90%",
        padding: 10,
        borderRadius: 20,
        
        
    },
    image: {
        borderRadius:5,
        flex: 1,
        width: "100%"
    },
    descContainer: {
        position:'absolute',
        left: 10,
        bottom: 10
    }

})

