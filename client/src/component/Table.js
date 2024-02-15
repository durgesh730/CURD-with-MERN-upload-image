import React, { useEffect, useState } from 'react'
import '../style/table.css'
import { ToastContainer, toast } from 'react-toastify';

const Table = ({ handleEdit }) => {

    const [data, setData] = useState()

    const userValid = async () => {
        const res = await fetch(`http://localhost:5000/api/user/all/data`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        setData(data);
       
    }

    const handleDelete = async (item) => {
        const res = await fetch(`http://localhost:5000/api/user/delete/${item._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        if (data.status === 200) {
            toast(data.msg, {
                autoClose: 3000,
            })
            window.location.reload()
        }
    }

    useEffect(() => {
        userValid()
    }, [])

    return (
        <>
            <div className='container' style={{ paddingBottom: "4rem " }} >
                <div className='table text-center mb-4 ' >
                    <h3>Users Data In Table</h3>
                </div>

                <div className='info' >
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Update</th>
                                <th scope="col" colSpan="2">Delete</th>
                            </tr>
                        </thead>
                        {data?.map((not) =>
                            <>
                                <tbody>
                                    <tr>
                                        <td>{not.fname}</td>
                                        <td>{not.lname}</td>
                                        <td> {not.dob}</td>
                                        <td>{not.phone}</td>
                                        <td>{not.email}</td>
                                        <td><img src={not.pic} id="image" alt="Avatar Preview" /></td>
                                        <td><button onClick={() => handleEdit(not)} >Edit</button></td>
                                        <td><button onClick={() => handleDelete(not)} >Delete</button></td>
                                    </tr>
                                </tbody>
                            </>
                        )}
                    </table>
                </div>
            </div>

            <ToastContainer />

        </>
    )
}

export default Table
