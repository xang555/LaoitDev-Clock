import React, { Component } from 'react';
import { Window,View } from 'react-desktop/windows';

class MonitorWindow extends Component {
    static defaultProps = {
      color: '#000000',
      theme: 'dark'
    };
  
    render() {
      return (
        <Window 
          color={this.props.color}
          theme={this.props.theme}
          chrome
          height="800px"
          padding="12px"    
        >

       <View layout ="vertical">

       { this.props.children }

       </View>

        </Window>
      );
    }
  }

  export default MonitorWindow;