import React, { Component } from 'react';
import { View, Label  } from 'react-desktop/windows';
import Clock from 'react-live-clock';

class Time extends Component {

    static defaultProps = {
        color: '#4e494e',
        theme: 'dark'
      };
      
      constructor(props){
        super(props);
        this.state = {
          now : Date.now()
        }
    }

    _handleTickDateTime = () => {
      this.setState({
        now : Date.now()
      });
    }

    componentDidMount(){
      this.interval = setInterval(() => this._handleTickDateTime(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
     
    return (
        <View
        horizontalAlignment="center"
        verticalAlignment="center"
        width="900px"
        layout ="vertical"
        height="480px"
      >

      <Label horizontalAlignment="center" color ="#ffffff">
      <div style={{ fontSize : "264px", fontWeight : "700"}}>
      <Clock
      format={'HH:mm'}
      ticking={true} timezone={'Asia/Vientiane'}/></div>    
      </Label>  
      <Label horizontalAlignment="center" color ="#ffffff">
        <div style={{ fontSize : "30px",  marginTop:"120px"}}>
        <Clock
        date={this.state.now}
        timezone={'Asia/Vientiane'}
        format={'dddd, MMMM Do, YYYY'} />
        </div>    
      </Label>       

      </View>
    );

    }

}


export default Time;