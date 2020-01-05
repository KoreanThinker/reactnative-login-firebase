import { Dimensions } from 'react-native'

export const WIDTH = Dimensions.get('window').width;

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}

export const colors = {
    main1: '#000',
    main2: '#fff',
    red: 'red'
}
const styles = {
    WIDTH,
    shadow,
    colors
}
export default styles;