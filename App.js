import React, { Component } from 'react'
import { View } from 'react-native'
import Barang from './components/Barang'
import Header from './components/Header'


export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header data="SELAMAT DATANG" />
        <Barang />
      </View>
    )
  }
}

export default App
