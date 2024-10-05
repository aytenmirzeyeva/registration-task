import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    surname: "",
    image: "",
    phone: "",
  });
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setData({
      ...data,
      image: base64,
    });

    setImage(base64);
  };

  const sendData = () => {
    localStorage.setItem("Data", JSON.stringify(data));
    console.log("Data saved!", data);
    navigate("/otpPage");
  };
  return (
    <div className="container">
      <form action="">
        <Label htmlFor="userName" labelText="Name: " />
        <Input
          type="text"
          placeholder="Enter name"
          id="userName"
          onChange={handleChange}
          value={data.name}
          name="name"
        />

        <Label htmlFor="userSurname" labelText="Surname: " />
        <Input
          type="text"
          placeholder="Enter surname"
          id="userSurname"
          onChange={handleChange}
          name="surname"
          value={data.surname}
        />

        <Label htmlFor="profileImage" labelText="Choose profile image: " />
        <Input
          type="file"
          id="profileImage"
          onChange={uploadImage}
          name="image"
        />
        {image && <img src={image} alt="Profile preview" />}
        <Label htmlFor="phone" labelText="Enter phone number: " />
        <Input
          type="number"
          id="phone"
          onChange={handleChange}
          name="phone"
          value={data.phone}
        />
        <div className="image"></div>

        <Button
          btnText="Log In"
          type="button"
          onClick={sendData}
          disabled={!data.name || !data.surname || !data.image || !data.phone}
        />
      </form>
    </div>
  );
}
export default Login;
