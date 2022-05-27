import React, {useState} from 'react';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';


export default function FacebookLogin(props) {
  var token = '';
  var username = '';
  var profilePic = '';


  const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log(JSON.stringify(result));

      username = 'Welcome ' + result.name;
      // token = ('User Token: ' + result.id);
      profilePic = result.picture.data.url;
    }
  };

  const onLogout = () => {
    //Clear the state after logout
    username = null;
    token = null;
    profilePic = null;
  };
  
  LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends'])
    .then(
      (result) => {
        console.log(result);
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );

          AccessToken.getCurrentAccessToken().then((data) => {
            token = data;
            console.log('Token===', JSON.stringify(token));
          });

          const processRequest = new GraphRequest(
            '/me?fields=name,picture.type(large),email,first_name,last_name',
            null,
            getResponseInfo,
          );
          console.log('process request', processRequest);

        //   // Start the graph request.
        //   const api = new GraphRequestManager().addRequest(processRequest).start();


          
        }
      },

      function ss(error) {
        console.log('Login fail with error: ' + error);
      },
      LoginManager.getLoginBehavior(),
    )
    .catch((err) => {
      console.log(err)
      return err
    });
}