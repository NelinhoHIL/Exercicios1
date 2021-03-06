import React, { useState } from 'react'
import {Text, View, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao';

export default props => {   

    const [nome, setNome] = useState('Teste')

    return (
        <>
            <View>
                <Text>{nome}</Text>
                <TextInput
                    style={Padrao.input}
                    placeholder="Digite Seu Nome"
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                />
            </View>
        </>
    )
}