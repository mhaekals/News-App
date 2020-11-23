import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import Card from '../component/Card'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useSelector, useDispatch} from 'react-redux'
import * as newsAction from '../redux/action/newsAction'

const HomeScreen = props => {
    // const [love, setLove] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newsAction.fetchArticle())
    }, [dispatch]) 

    const {articles} = useSelector(state => state.news.articles)
    const isFav = useSelector(state => state.news.favourites.some(article => article.url === props.url))
    // console.log(isFav)
    const fav = useSelector(state => state.news.favourites)
    // console.log(fav)
    // console.log(articles)

    return (
        <FlatList
            data={articles}
            keyExtractor={item => item.url}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate("Details", {articleUrl: item.url})}>
                    <Card>
                        <View style={styles.imgView}>
                            <Image source={{uri: item.urlToImage}} style={{height: "100%", width:"100%"}}/>
                        </View>

                        <View style={styles.titleView}>
                            <Text style={{fontSize:20, fontWeight:"bold"}} numberOfLines={1}>{item.title}</Text>
                        </View>

                        <View style={styles.descView}>
                            <Text numberOfLines={3}>{item.description}</Text>
                        </View>

                        <View style={styles.loveView}>
                            <Icon name={isFav? "favorite":"favorite-border"} size={35} color="red" onPress={() => dispatch(newsAction.toggleFav(item.url))}/>
                        </View>
                    </Card>
                </TouchableOpacity>
            )}
        />
    )
    
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    imgView: {
        height: 300,
        width: "100%"
    },
    titleView: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 10
    },
    descView: {
        paddingHorizontal: 20
    },
    loveView: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15
    }
})