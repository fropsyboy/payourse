import React, { Component }  from 'react';
import {ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from "./style";
import logoImage from '../../../../assets/logo.png';
import menuImage from '../../../../assets/menu.png';
import emptyImage from '../../../../assets/empty.png';
import SearchBar from "react-native-dynamic-search-bar";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coins : [],
            baseURL: 'https://staging.api.keeplabs.com',
        };
    }

    searchBox = (value) => {
        console.log(value)
    }

    render() {
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
                <View style={styles.topMargin40}>
                    <SearchBar
                        placeholder="Search here"
                        onChangeText={this.searchBox}
                    />
                </View>
                {this.state.coins.length > 0
                    ?
                    <>
                        <View>
                            {this.state.coins.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity>
                                            <View>
                                                <Text>
                                                    abc
                                                </Text>
                                                <Text>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    cde
                                                </Text>
                                                <Text>
                                                    image here
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                );
                            })}
                        </View>
                    </>
                    :
                    <>
                        <TouchableOpacity style={[styles.buttonCenter, styles.flex1]}>
                            <View>
                                <Image source={emptyImage} style={styles.emptySize}/>
                                <Text style={styles.textCenter}>
                                    Tap to RELOAD
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </>
                }
            </ScrollView>
        );
    }
}
