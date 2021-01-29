// import React,{useState,useEffect} from 'react';
// import axios from 'axios'


//  const  UserList=()=> {
//     const [list, setList] = useState([]);
//     useEffect(() => {
//         const user=axios.get("http://localhost:5000/api/users/user").then(()=>{
//             console.log("Data have Fetch")
//         }).catch((error)=>{
//             console.log(error,"could not find data");
//         });
//         console.log(user);
//         setList(user.json);
        
//     }, [])


//     return (
//         <div className="app">
//         <span style={{ fontSize: '2rem' }}>All Users!</span>   
//         <div>
//             <ul>
//                {list}
//             </ul>
//         </div>
//         </div>
//     )
// }
// export default UserList;
import React from "react";
import { Dropdown } from "semantic-ui-react";
import './UserList.css';
const options1 = [
  {
    key: "1",
    text: "Anshuman",
    value: "1",
   
  },
  {
    key: "2",
    text: "Anshu sha",
    value: "2",
   
  },
  {
    key: "3",
    text: "Ram",
    value: "3",
   
  },
  {
    key: "4",
    text: "Shaym Sharma ",
    value: "4",
    
  },
  {
    key: "5",
    text: "XX LOl",
    value: "5",
    
  },
  {
    key: "6",
    text: "Lop ",
    value: "6",
    
  },
  {
    key: "7",
    text: "Axis",
    value: "7",
    
  },
  {
    key: "8",
    text: "Anshuman",
    value: "8",
   
  },
  {
    key: "9",
    text: "Bumrah",
    value: "9",
    
  },
  {
    key: "10",
    text: "Chahal",
    value: "10",
    
  },
  {
    key: "11",
    text: "Kuldeep",
    value: "11",
   
  },
  {
    key: "12",
    text: "Siraj",
    value: "12",
    
  },
  {
    key: "13",
    text: "Umesh Yadav",
    value: "13",
    
  },
  {
    key: "14",
    text: "Mayank Yadav",
    value: "14",
    
  },
  {
    key: "15",
    text: "Jadeja",
    value: "15",
    
  }
];

const DropDown = () => 
  {
      return(
          <div>
              UserList
              <Dropdown
                placeholder=" Search User from user"
                fluid
                multiple
                search
                checkbox
                options={options1}
                />
          </div>
         
      )
  }
;

export default DropDown;