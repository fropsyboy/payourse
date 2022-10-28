const React = require("react-native");
const { Dimensions } = React;
// const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
        flexGrow: 1,
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
    leftMargin10: {
        marginLeft: 10
    },
    topMargin10: {
        marginTop: 10
    },
    topMargin40: {
        marginTop: 40
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
    whiteBackground: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    thumbImage: {
        width: 40,
        height: 40
    },
    bottomBuffer: {
        marginBottom: 100
    },
    modalTopMargin: {
        marginTop: (deviceHeight / 2) - 150,
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        borderRadius: 20,
    },
    modalBackgroundColor: {
        backgroundColor: 'white'
    },
    coinHeader: {
        color: 'black',
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 20,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },
    coinKeyHeader: {
        color: 'black',
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 20,
        marginTop: 10,
        fontSize: 8,
        fontWeight: '400'
    },
    coinRateHeader: {
        color: 'black',
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 20,
        marginTop: 10,
        fontSize: 11,
        fontWeight: '800'
    },
    centralize: {
        alignItems: 'center'
    },
    closeButton: {
        color: 'black',
        textAlign: 'center',
        alignSelf: "center",
        marginTop: 40,
        fontWeight: 'bold'
    }
};