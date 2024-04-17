import React, { useEffect, useState } from 'react'
import './dashboard.css'
const Dashboard = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('userInfo'));
      if (items) {
       setItems(items);
      }
    }, []);
    const removeItem = (id) => {
        const oldItems = [...items];
        oldItems.splice(id, 1);
        setItems(oldItems);
    };

  return (
    <div>
        <div className='text-center text-5xl mb-16'>Dashboard</div>
            <>
            <div className="data flex justify-center" >
                <table className='w-9/12 border border-black'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
            
                {
                    items.map((item,i) => 
                        {
                            return(
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.Number}</td>
                                            <td>{item.Address}</td>
                                            <td><button onClick={() => removeItem(i)}>remove</button></td>
                                        </tr>
                            );
                        }
                    )
                }
            </table>
            </div>
                
            </>
    </div>
  )
}

export default Dashboard