import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default Recommendations = (props) => {
    const apiUrl = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getrecommendations';
    const user_id = 'rbrown'
    const urlWithQueryParams = `${apiUrl}?user_id=${user_id}`;
    const [resData, setResData] = useState(null)

    //create an api call to get the recommendations using fetch
    useEffect(() => {
        getRecommendations()
    }, [urlWithQueryParams]);

    async function getRecommendations() {
        try {
            let response = await fetch(urlWithQueryParams);
            let json = await response.json();
            setResData(json);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    }

    if (!resData) {
        return <Text>Loading...</Text>
    }

    //return the recommendations and loop through them displaying their labels
    return (
        <View style={styles.container}>
            <Text>Recommendations</Text>
            {resData.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection: 'row'}}>
                        <Text style={{flex: '3'}}>{item.recipe.label}</Text>
                        <Image source={{ uri: item.recipe.image }}  style={styles.image}  />
                    </View>
                )
            })}
        </View>
    );
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
