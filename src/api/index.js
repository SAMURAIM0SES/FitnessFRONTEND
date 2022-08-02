export const apiURL = "https://fitnesstrac-kr.herokuapp.com/api"














export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/users/Login`, {
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
   try{
    const response = await fetch(`${apiURL}/users/Register`, {
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
    
  }catch(error){
    console.error(error)
  }}