const requestBody = {
    key1: 'value1',
    key2: 'value2',
  };
  
  axios.post('https://api.example.com/post-endpoint', requestBody, {
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json',
      // Add other headers as needed
    },
  })
    .then(response => {
      // Handle successful response
      console.log(response.data);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
  