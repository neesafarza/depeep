const { REACT_APP_API_URL } = process.env;

exports.getItems = async () => {
  const url = `${REACT_APP_API_URL}/api/v1/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
