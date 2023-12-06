const BaseUrl = 'https://randomuser.me/api/';

export const getApiData = async page => {
  try {
    // const response = await fetch(`${BaseUrl}?results=${page*30}&page=${1}`,
    const response = await fetch(`${BaseUrl}?results=50&gender=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('API Response', JSON.stringify(response), page);
    if (response.status === 200) {
      const responseData = await response.json();
      console.log('responseData', responseData);
      return responseData;
    } else if (response.status === 401 || response.status === 400) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (error) {}
};

export const getApiSearchData = async gender => {
  try {
    const response = await fetch(`${BaseUrl}?results=30&gender=${gender}`);

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else if (response.status === 401 || response.status === 400) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (error) {}
};
