import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { getGLOBAL_USERNAME } from './GlobalUsername';

export default Recommendations = (props) => {
    const [resData, setResData] = useState(props.refreshedData)
    /* COLORS FOR MEAL NAME BUTTONS */
    const buttonColors = ['#C5C3C6', '#6596CD', '#3DA5D9', '#9DDBAD', '#B7ADCF']
    /* HANDLE MEAL BUTTON PRESS; OPEN DEFAULT BROWSER */
    const openSafari = (url) => {
        Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
            console.log(`Can't handle url: ${url}`);
            } else {
            return Linking.openURL(url);
            }
        })
        .catch((err) => console.error('An error occurred', err));
    }
    /* IF PROPS.REFRESHEDDATA IS NULL */
    if (resData === null || !resData) {
        return <Text>Loading recommendations...</Text>
    }
    else {
        /*RETURN THE RECOMMENDATIONS AND LOOP THROUGH THEM; DISPLAY THEIR LABELS*/
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 15}}>
                    Meal Recommendations
                </Text>
                {
                    !resData.map
                    &&
                    <Text style={{alignSelf: 'flex-start'}}>No user profile found for {getGLOBAL_USERNAME()}.</Text>
                }
                {
                    resData 
                    &&
                    resData.map
                    &&
                    resData.map((item, index) => {
                        const tmpColorIndex = index % 5;
                        const tmpColor = buttonColors[tmpColorIndex];
                        return (
                            <View key={index} style={{flexDirection: 'row'}}>
                                <TouchableOpacity 
                                    style={[styles.button, {backgroundColor: tmpColor}]}
                                    onPress={() => {openSafari(item.recipe.url)}}
                                >
                                    <Text style={{flex: '3', fontWeight: 'bold'}}>{item.recipe.label}</Text>
                                </TouchableOpacity>
                                <Image source={{ uri: item.recipe.image }}  style={styles.image}  />
                                <View style={{ height: 100 }}></View>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '75%',
        height: '75%',
        flex: 1
    },
    button: {
        backgroundColor: '#007bff',
        padding: 5,
        flex: 3,
        borderRadius: 10,
        height: "60%",
        marginRight: 20,
        alignSelf: 'flex-start'
    },
});