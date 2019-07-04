import React, { Component } from 'react'
import { Alert, Button, View, StyleSheet} from 'react-native'

export default class ButtonBasic extends Component {
    _onPressButton() {
        Alert.alert("You pressed a button!");
    }
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title='Press Me'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title='Press Me'
                        color='#841584'
                    />
                </View>
                <View style={styles.alertnativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This look great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#845184"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alertnativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})