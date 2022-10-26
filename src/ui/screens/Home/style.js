const React = require("react-native");
const { Dimensions } = React;
// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft:30,
        marginRight: 30
    },
    column: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1,
    },
    rightMargin10: {
        marginRight: 10
    },
    topMargin10: {
        marginTop: 10
    },
    topMargin20: {
        marginTop: 20
    },
    logoSize: {
        width: 140,
        height: 37,
    },
    menuSize: {
        width: 24,
        height: 24,
        alignSelf: 'flex-end'
    },
};