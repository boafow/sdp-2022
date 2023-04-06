import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { getGLOBAL_USERNAME } from './GlobalUsername';

export default Recommendations = (props) => {
    const [resData, setResData] = useState(props.refreshedData)
    
    if (resData === null) {
        return <Text>Loading recommendations...</Text>
    }
    else {
        //return the recommendations and loop through them displaying their labels
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 24}}>Meal Recommendations</Text>
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
