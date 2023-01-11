export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5fe8221b2cmshc62b62f1492688dp1d9d5ejsnc517524b5e2d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };