import React, { useEffect } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'
import { getDecks } from '../actions'



const DeckList = ({ state }) => {
    
    useEffect(() => {
        getDecks()
    }, [])
    
    const navigateToCreateDeck = () => {
        
    }

console.log("======>State", state)

    return (
        <View>
            <Text>You don't have a deck yet</Text>
            <Button
            onPress={navigateToCreateDeck}
                title="Add Deck"
                color="#841584"
                accessibilityLabel="Navigates to create deck"
            />
        </View>
    )
}
const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps,{getDecks})(DeckList);