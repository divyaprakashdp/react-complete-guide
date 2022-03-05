import React, {useState} from "react";
import AddUser from "./components/Users/AddUsers.js";
import UserList from "./components/Users/UesrsList.js";

const App = () => {
  const [userList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUserList) =>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
};

export default App;