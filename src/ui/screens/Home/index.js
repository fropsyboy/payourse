import React from 'react';
import {ScrollView, View, Image } from 'react-native';
import styles from "./style";

const logoImage = require('../../../../assets/logo.png');
const menuImage = require('../../../../assets/menu.png');
export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.column}>
                <View>
                    <Image source={logoImage} style={styles.logoSize}/>
                </View>
                <View style={styles.flex1}>
                    <Image source={menuImage} style={styles.menuSize}/>
                </View>
            </View>
        </ScrollView>
    );
}
