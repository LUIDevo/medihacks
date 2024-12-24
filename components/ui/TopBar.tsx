import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TopBar = () => {
    return (
        <View>
            <View>
                <Text>
                    Medical Assistant
                </Text>
                <View>
                    <View style={styles.dot}></View>
                    <Text>Online</Text>
                </View>
            </View>
        </View>
    );
}
export default TopBar
const styles = StyleSheet.create({
    dot: {
        height: 4,
        width: 4,
        backgroundColor: "#2E9157",
    },

})