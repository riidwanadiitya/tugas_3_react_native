import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export class Barang extends Component {
    constructor() {
        super();
        this.state = {
            jumlah: 0
        }
    }

    handlePlus = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }
    handleMinus = () => {
        if (this.state.jumlah > 0) {
            this.setState({
                jumlah: this.state.jumlah - 1
            })
        } else {
            Alert.alert("Jumlah tidak boleh kurang dari 0")
        }
    }

    render() {
        return (
            <View style={{ flex: 3 }}>
                <Text style={styles.jumlah1}>Jumlah: {this.state.jumlah} </Text>
                <Text style={styles.text1}>Silahkan Tekan Tombol di Bawah</Text>
                <View style={styles.viewButton} >
                    <TouchableOpacity style={styles.buttonPlus} onPress={this.handlePlus}>
                        <Text style={styles.textStyle}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMinus} onPress={this.handleMinus}>
                        <Text style={styles.textStyle}>-</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.jumlah2}>{this.state.jumlah}</Text>
            </View>
        )
    }
}

export default Barang;

styles = StyleSheet.create({
    jumlah1: {
        textAlign: 'right',
        marginRight: 20
    },
    text1: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonPlus: {
        flex: 1,
        backgroundColor: 'green',
        marginLeft: 20,
        marginRight: 20
    },
    buttonMinus: {
        flex: 1,
        backgroundColor: 'red',
        marginRight: 20
    },
    jumlah2: {
        flex: 4,
        textAlign: 'center',
        fontSize: 70,
        color: 'blue',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20
    }
})

