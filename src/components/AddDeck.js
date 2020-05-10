import React, {useState} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import {generateId } from '../utils/helpers'


const AddDeck = ({ addDeck }) => {
    const [deck, setDeck] = useState("")



    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <Text>What do you intend to learn with this deck</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={deck}
                onChangeText={text => setDeck(text)}
                />
        <TouchableOpacity onPress={addDeck({generateId, deck, cards:[]})}>Add Deck</TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export const connect({ addDeck })(AddDeck);