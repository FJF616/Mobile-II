import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

class Content extends Component {
  componentWillMount(){
    AsyncStorage.getItem('user')
     .then((data) => {
       if(data) {
          const user = JSON.parse(data);
          return axios.get(VALIDATE_ACCESS_TOKEN_URL,
            { headers: { email: user.email, access_token: user.access_token } }
          ).then(() => Actions.main({ type: "reset" }))
       }else {
         Actions.auth({ type: "reset" });
       }
     }).catch((err) => Actions.auth({ type: "reset" }));
  }

  render() {
    return(
      <View>
      </View>
    );
  }
}

export default Content;
