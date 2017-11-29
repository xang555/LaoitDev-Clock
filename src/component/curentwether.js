import React, { Component } from 'react';
import { View, Label, ProgressCircle  } from 'react-desktop/windows';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quieryCurrentWeather,startquiery } from '../action/current';
import { API_URL_IMG } from '../config';

class CurentWeather extends Component {

    static defaultProps = {
        color: '#403e3e',
        theme: 'dark'
      };

_trickquiery = () => {

this.props.quieryCurrentWeather();

}

componentDidMount() {
this.props.startquiery();
this._trickquiery();    
this.interval = setInterval(() => this._trickquiery(), 600000 );
}

componentWillUnmount() {
    clearInterval(this.interval);
}

render(){

    let content = null;
    let { current } = this.props;  

    if(current.is_quiering){
        content = <ProgressCircle color='#cc7f29' size={100}/>
    } else if (current.is_quiery_failure){
        // content = (
        //     <Label  color ="#ffffff" horizontalAlignment="center">
        //     <div style={{ fontSize : "15px",color : "red" }}>Can not Fetch data</div>
        //     </Label>
        // );
        this.props.quieryCurrentWeather();
        
    } else if(current.is_quiering_sucess && current.data != null){

        content = (

            <div style={{ opacity : "0.8"}}>
            <div style={{ marginTop : "-100px" }}>
                <View
                horizontalAlignment="center"
                verticalAlignment="center"
                layout ="vertical"
                >
                <img alt="weather" src={ API_URL_IMG + current.data.weather[0].icon+".png" } style={{ width : "150px", height : "150px" }}/>
                 </View>   
                <Label horizontalAlignment="center" color ="#ffffff">
                <div style={{ fontSize : "20px", marginTop:"-20px" }}>{ current.data.weather[0].description }</div>
                </Label>
                </div>
        
                <div style={{ marginTop : "50px" }}>
                
                <Label color ="#ffffff" horizontalAlignment="center">
                <div style={{ fontSize : "40px" }}>Temperature</div>
                </Label>
                <Label  color ="#ffffff" horizontalAlignment="center">
                <div style={{ fontSize : "100px",fontWeight : "700", marginTop : "60px" }}>{current.data.main.temp}°C</div>
                </Label>
        
            </div>
        </div>

        )

    }

return (

    <View
    color={this.props.color}
    background
    horizontalAlignment="center"
    verticalAlignment="center"
    width="480px"
    layout ="vertical"
    height="480px"
  >
  <div>
    
    {
        content
    }

    </div>

  </View>

);

}

}


const mapStateToProps = (state) => {
    return {current : state.currentWeather};
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({quieryCurrentWeather,startquiery},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CurentWeather);