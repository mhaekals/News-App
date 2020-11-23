import React, {useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../component/Card'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as newsAction from '../redux/action/newsAction'

const FavScreen = props => {

    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(newsAction.fetchArticle())
    // }, [dispatch]) 

    const favourites = useSelector(state => state.news.favourites)
    const isFav = useSelector(state => state.news.favourites.some(article => article.url === props.url))
    return (
        <FlatList
            data={favourites}
            keyExtractor={item => item.url}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.container}>
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
                            <Icon name={"favorite"} size={35} color="red" onPress={() => dispatch(newsAction.toggleFav(item.url))}/>
                            {/* <Icon name={!love ? "favorite":"favorite-border"} size={35} color={!love ? "red":"black"} onPress={() => setLove(!love)}/> */}
                        </View>
                    </Card>
                </TouchableOpacity>
            )}
        />
    )
}

export default FavScreen

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
