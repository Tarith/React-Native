import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

//const apiUrl = "https://reactnative.dev/movies.json"
const apiUrl = "https://ds2.9packsoftware.com/9PackXRFS/Vision/Live/ValidateUser/124/124?ClientCode=9pack&AppVersion=21.02.0010&RequestDateTime=01/20/2022&ProductType=Vision&format=json"

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [])

  // console.log("this is a test text")
  // console.log(data.payLoad.entities[0].items[0].isAuthenticated)
  const value = data.payLoad.entities[0].items[0].isAuthenticated
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
         Is authenticated: {String(value)} 
      </Text>
    </View>
  );
}

export default App;