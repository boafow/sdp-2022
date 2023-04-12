import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default Recommendations = (props) => {
    const [resData, setResData] = useState(props.refreshedData)
    /* IF PROPS.REFRESHEDDATA IS NULL */
    if (resData === null) {
        return <Text>Loading recommendations...</Text>
    }
    else {
        /*RETURN THE RECOMMENDATIONS AND LOOP THROUGH THEM; DISPLAY THEIR LABELS*/
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 24, alignSelf: 'flex-start'}}>Meal Recommendations</Text>
                {resData.map((item, index) => {
                    return (
                        <View key={index} style={{flexDirection: 'row'}}>
                            <Text style={{flex: '3'}}>{item.recipe.label}</Text>
                            <Image source={{ uri: item.recipe.image }}  style={styles.image}  />
                            <View style={{ height: 100 }}></View>
                        </View>
                    )
                })}
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
        width: 50,
        height: 50,
        flex: '1'
    },
});