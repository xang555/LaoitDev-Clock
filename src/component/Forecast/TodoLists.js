import React, { Component } from 'react';
import Item from './item';
import { View } from 'react-desktop/windows';

class TodoLists extends Component {

    constructor(props){
        super(props);
    }


    render(){

        return (

         <View layout ="horizontal">

            {
                
                this.props.items.map(item => (
                    <Item key={item.dt} data={item}/>
                ))
            }

         </View>      
             
        );

    }

}

export default TodoLists