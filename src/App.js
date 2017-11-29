import React, { Component } from 'react';
import MonitorWindow from './component/window';
import CurentWeather from './component/curentwether'
import Forecast from './component/Forecast';
import Time from './component/Time';
import { View } from 'react-desktop/windows';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (

      <Provider store={store}>
        <MonitorWindow>
        
          <View layout ="horizontal">
            <CurentWeather/>
            <Time/>
          </View>

          <View horizontalAlignment="center"
           verticalAlignment="center" layout="vertical">
          <Forecast/>
           </View> 

        </MonitorWindow>

      </Provider>  
    );
  }
}

export default App;
