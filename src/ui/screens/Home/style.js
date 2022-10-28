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
    topMargin40: {
        marginTop: 40
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
    textCenter: {
        textAlign: 'center'
    },
    buttonCenter: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    emptySize: {
        width: 357,
        height: 353,
        alignSelf: 'center'
    },
};