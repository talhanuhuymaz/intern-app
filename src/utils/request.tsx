const BASE_URL = "https://api.github.com";

const request = async (url: string) => {
  console.log("API call:", url);
  const response = await fetch(BASE_URL + url);

  if (!response.ok) throw new Error("API Error");
  
  return response.json();
  
};


export default request;