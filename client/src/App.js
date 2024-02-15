import Form from "./component/Form";
import Table from "./component/Table";
import Footer from './component/Footer'
import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [inVal, setInpval] = useState({
    fname: '',
    lastname: "",
    DOB: "",
    phonenumber: "",
    email: " ",
    pic: ""
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEdit = (item) => {
    scrollToTop()
    setInpval({
      fname: item.fname,
      lastname: item.lname,
      DOB: item.dob,
      phonenumber: item.phone,
      email: item.email,
      pic: item.pic,
    })
    toast("Edit Your Data", {
      autoClose: 3000,
    })
  }

  return (
    <>
      <Form setInpval={setInpval} inVal={inVal} />
      <Table handleEdit={handleEdit} />
      <Footer />
    </>
  );
}

export default App;
