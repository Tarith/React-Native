import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const movieUrl = "https://reactnative.dev/movies.json"

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [])

  // console.log("this is a test text")
  // console.log(data)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {data.description}
      </Text>
    </View>
  );
}

export default App;