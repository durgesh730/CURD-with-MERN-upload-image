import React, { useEffect, useState } from 'react'
import '../style/form.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../component/Navbar'

const Form = ({ setInpval, inVal }) => {
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [pic, setPic] = useState([])

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inVal,
        [name]: value,

      }
    })
  }

  const handleform = async (e) => {
    e.preventDefault();
    const { fname, lastname, DOB, phonenumber, email } = inVal;
    if (fname === '') {
      toast("Enter Your Name", {
        autoClose: 3000,
      })
    } else if (pic.length == 0) {
      toast("Pic required", {
        autoClose: 3000,
      })
    }
    else {
      const data = await fetch(`http://localhost:5000/api/user/login`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname,
          lname: lastname,
          dob: DOB,
          phone: phonenumber,
          email,
          pic
        })

      });

      const res = await data.json();
      if (res.status === (201)) {
        toast(res.msg, {
          autoClose: 3000,
        })
        setInpval({
          ...inVal,
          fname: '',
          lastname: "",
          DOB: "",
          phonenumber: "",
          email: " ",
        })
        window.location.reload()
      } else {
        toast("Please Enter Correct Details!", {
          autoClose: 3000,
        })
      }
    }
  }


  const postDetails = (pics) => {
    if (pics === undefined) {
      console.log("nulll  mmm")
    }
    else if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "durgesh2022");
      fetch("https://api.cloudinary.com/v1_1/durgesh2022/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setAvatarPreview(inVal.pic || "/Profile.png");
  }, [inVal.pic]);

  return (
    <>
      <Navbar />
      <div className='container formfields '>
        <form >
          <h2 className='text-center my-4'>Form</h2>
          <div className=' inputs'>

            <div className="form-group p-3 ">
              <label htmlfor="name">First Name</label>
              <input type="fname" className="form-control" value={inVal.fname} name="fname" id="name" aria-describedby="emailHelp" placeholder="First Name" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <label for="lastname">Last Name</label>
              <input type="lastname" className="form-control" id="lastname" name="lastname" value={inVal.lastname} placeholder="Last Name" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <label for="photo">Upload Photo</label>
              <div id="registerImage" style={{ display: "flex", flexDirection: "row", justifyItems: "center", marginTop: "0rem", marginBottom: "10px" }} >
                <div className='picDiv'>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                  />
                  <img style={{ width: "3rem", height: "2rem", marginTop: "0.1rem", marginRight: "0.2rem" }} src={pic.length ? pic : avatarPreview} alt="avatar" />
                </div>
              </div>
            </div>

          </div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              <label for="phonenumber">Phone Number</label>
              <input type="phonenumber" className="form-control" name="phonenumber" value={inVal.phonenumber} id="phonenumber" placeholder="Phone Number" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <label for="email">Email Id</label>
              <input type="email" className="form-control" name="email" value={inVal.email} id="email" placeholder="Email Id" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              <label for="DOB">DOB</label>
              <input type='date' className="form-control" id="DOB" value={inVal.DOB} name="DOB" placeholder="DOB" onChange={setVal} />
            </div>

          </div>

          <div className='formbutton my-4'>
            <button type="submit" onClick={handleform} className="btn">Submit</button></div>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Form
