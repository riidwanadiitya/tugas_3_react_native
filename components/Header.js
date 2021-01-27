import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class Header extends Component {
    render() {
        return (
            <View style={styles.header} >
                <View >
                    <Text style={styles.textHeader1}> TUGAS 3 REACT NATIVE </Text>
                    <Text style={styles.textHeader2}>{this.props.data}</Text>
                </View>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'green',
    },
    textHeader1: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 50
    },
    textHeader2: {
        textAlign: 'center',
        fontSize: 30,
        color: 'purple'
    }
})
