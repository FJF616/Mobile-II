import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

signIn(email, password) {
    axios
      .post('/signin')
      .then((response) => AsyncStorage.setItem('user', JSON.stringify(response.data)))
      .then((response) => Actions.main({type: 'reset'}))
      .catch((err) => Alert.alert('Invalid email/password'))
  }
  