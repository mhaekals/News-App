import React from 'react'
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useSelector} from 'react-redux'

const DetailScreen = props => {

    const articleUrl = props.route.params.articleUrl
    const article = useSelector(state => state.news.articles.articles.find(article => article.url === articleUrl))
    return (
        <ScrollView>
            <View style={styles.heading}>
                <Text style={{fontSize: 35, fontWeight: "bold", textAlign:"left"}}>{article.title}</Text>
            </View>

            <View>
                <ImageBackground style={styles.img} source={{uri: article.urlToImage}}>
                    <View style={styles.authorView}>
                        <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>{article.author}</Text>
                        <Icon/>
                    </View>
                    
                </ImageBackground>
            </View>

            <View style={styles.desc}>
                <Text style={{fontSize: 20, textAlign: "justify"}}>{article.description}</Text>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    heading: {
        marginTop: 15,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    img: {
        width: "100%",
        height: 300
    },
    desc: {
        marginTop: 15,
        paddingHorizontal: 20
    },
    authorView: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "flex-end"
    }
})
