export const apiURL = "https://fitnesstrac-kr.herokuapp.com/api"














export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/users/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
            username: username,
            password: password,
          
        }),
      });
      const result = await response.json()
      console.log(result, "look at this result for token")
      return result
      
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  export const registerUser = async (username,password) => {
   try{
    const response = await fetch(`${apiURL}/users/register`, {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        
          username: username,
          password: password
        
      })
    })
    const result = await response.json()
    console.log(result,"i'm from api index!!!")
    return result
    
  }catch(error){
    console.error(error)
  }}

  export async function getActivities() {
    try {
      const response = await fetch(`${apiURL}/Activities`);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  export async function createNewActivity(name, description, token) {
    console.log(token, name, description, "I'M HERE")
    try {

    const response = await fetch(`${apiURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,

      },
      body: JSON.stringify({
        
          name: name,
          description: description,
         
       
        
      }),
    }); 
    const result = await response.json();
    console.log(result, "line 92");
    return result;
  
  }catch(error){console.error(error)}
  }
  
  export async function getPublicRoutines() {
    try {
      const response = await fetch(`${apiURL}/Routines`);
      const result = await response.json();
      console.log(result, "should be routines");
      return result;
    } catch (error) {
      console.log(error);
    }
  }


  