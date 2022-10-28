import React, { Component, useRef }  from 'react';
import {ScrollView, View, Image, TouchableOpacity, Text, Modal, Animated, ActivityIndicator } from 'react-native';
import styles from "./style";
import logoImage from '../../../../assets/logo.png';
import menuImage from '../../../../assets/menu.png';
import emptyImage from '../../../../assets/empty.png';
import SearchBar from "react-native-dynamic-search-bar";
import axios from 'axios';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coins :[],
            modalVisible: false,
            baseURL: 'https://staging-biz.coinprofile.co/v3/currency/rate',
            profiles: {},
            coin: '',
            modalData: {},
            resetValue: [],
            spinnerVisible: false
        };
    }

    componentDidMount = async () => {
        this.setState({
            spinnerVisible: true
        })
        await new Promise(resolve => setTimeout(resolve, 600));
        await this.getCoinProfile();
        this.setState({
            spinnerVisible: false
        })
    }
    openModal = (item) => {
        this.setState({
            coin: item,
            modalData: this.state.profiles[item],
            modalVisible: true
        })
    }

    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    getCoinProfile = () => {
        axios({ method: 'GET', url: `${this.state.baseURL}`,
        }).then(function(response) {
            let coins = Object.keys(response.data.data.rates);
            this.setState({
                coins,
                profiles: response.data.data.rates,
                resetValue: coins
            })
        }.bind(this)).catch(function(error) {
            console.log(error)
        }.bind(this));
    }

    searchBox = (value) => {
        let coins = []
        if (value !== ''){
            for(let i = 0; i < this.state.resetValue.length; i++) {
                if(this.state.resetValue[i].search(value.toUpperCase()) > -1){
                    coins.push(this.state.resetValue[i])
                }
            }

            this.setState({
                coins
            })

        }else{
            this.setState({
                coins: this.state.resetValue
            })
        }
    }

    resetCoins = () => {
        this.setState({
            coins: this.state.resetValue
        })
    }

    closeSpinner = () => {
        this.setState({
            spinnerVisible: false
        })
    }

    openSpinner = () => {
        this.setState({
            spinnerVisible: true
        })
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.spinnerVisible}
                    onRequestClose={this.closeSpinner}
                    presentationStyle='overFullScreen'
                >
                    <View style={[styles.modalTopMargin, styles.spinnerBackgroundColor, styles.centralize]}>
                        <View style={[styles.container, styles.horizontal]}>
                            <ActivityIndicator size="large" color="#ff0000" />
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={this.closeModal}
                    presentationStyle='overFullScreen'
                >
                    <View style={[styles.modalTopMargin, styles.modalBackgroundColor, styles.centralize]}>
                        <Text
                            testID="welcome"
                        />
                        <Image source={{uri: `https://ui-avatars.com/api/?rounded=true&format=png&name=${this.state.coin}&background=random&color=2F80ED`}}
                               style={[styles.thumbImage, styles.rightMargin10]}/>
                        <Text style={styles.coinHeader}>
                            {this.state.coin}
                        </Text>
                        <Text style={styles.coinKeyHeader}>
                            {this.state.modalData.key}
                        </Text>
                        <Text style={styles.coinRateHeader}>
                            {this.state.modalData.rate}
                        </Text>
                        <TouchableOpacity  block rounded  onPress={() => {
                            this.closeModal();
                        }}>
                            <Text style={styles.closeButton}>
                                CLOSE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
                            onClearPress={this.resetCoins}
                        />
                    </View>
                    {this.state.coins.length > 0
                        ?
                        <>
                            <View style={[styles.topMargin20, styles.bottomBuffer]}>
                                {this.state.coins.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <TouchableOpacity style={styles.whiteBackground} onPress={() => { this.openModal(item); }}>
                                                <View style={styles.column}>
                                                    <View>
                                                        <Image source={{uri: `https://ui-avatars.com/api/?rounded=true&format=png&name=${item}&background=random&color=2F80ED`}}
                                                               style={[styles.thumbImage, styles.rightMargin10]}/>
                                                    </View>
                                                   <View>
                                                       <Text style={[styles.rightMargin10, styles.topMargin10]}>
                                                           {item}
                                                       </Text>
                                                   </View>
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
                                        No Record Found
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    }
                </ScrollView>
            </View>
        );
    }
}
