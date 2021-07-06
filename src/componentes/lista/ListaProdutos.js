import React from 'react'
import { Text, FlatList } from 'react-native'
import Padrao from '../../estilo/Padrao';

import produtos from './produtos'

export default props => {   
    return (
        <>
          <Text style={Padrao.txtG}>Lista de Produtos</Text>
          <FlatList
            data={ produtos }
            keyExtractor={ i => i.id }
            renderItem={({item: obj }) => {
              return <Text>{obj.id} - {obj.descricao} R$ {obj.preco} </Text>  
            }}        
          />
        </>
    )
}