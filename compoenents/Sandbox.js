import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxone}>one</Text>
            <Text style={styles.boxtwo}>two</Text>
            <Text style={styles.boxthree}>three</Text>
            <Text style={styles.boxfour}>four</Text>
        </View>
    )
}

export default Sandbox

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: "#ddd",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start'

    },
    boxone: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    boxtwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20
    },
    boxthree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30
    },
    boxfour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40
    },
})
