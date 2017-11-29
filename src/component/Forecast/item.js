import React, { Component } from 'react';
import { View, Label  } from 'react-desktop/windows';
import { API_URL_IMG } from '../../config';

class Item extends Component {

      constructor(props){
        super(props);
    }


    render() {

        let { data } = this.props;
        let lists_day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let d = new Date(data.dt * 1000);

        return (

            <View
            horizontalAlignment="center"
            verticalAlignment="center"
            width="250px"
            layout ="vertical"
            height="300px"
           >
    
    
            <Label horizontalAlignment="center" color ="#ffffff">
                <div style={{ fontSize : "30px"}}>{ lists_day[d.getDay()] }</div>
            </Label>    
            <img src={ API_URL_IMG + data.weather[0].icon+".png" } style={{ width : 100,height:100}} />
            <Label horizontalAlignment="center" color ="#ffffff">
            <div style={{ fontSize : "30px"}}>{ data.weather[0].main }</div></Label>

            <Label horizontalAlignment="center" color ="#ffffff">
            <div style={{ fontSize : "20px", marginTop : 20}}>High: {data.main.temp_max}</div></Label>
            <Label horizontalAlignment="center" color ="#ffffff">
            <div style={{ fontSize : "20px",marginTop : 5}}>Low: {data.main.temp_min}</div></Label>
    
         </View>  

        );

    }


}

export default Item;