export const apiURL = "https://fitnesstrac-kr.herokuapp.com"














export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json()
      return result
      
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  export const registerUser = async (username,password) => {
    const response = await fetch(`${apiURL}/users/register`, {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json()
    console.log(result,"i'm from api index!!!")
    return result
    
  }