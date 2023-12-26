import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const [description, setDescription] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.put("https://solowish.vercel.app/editPost/"+id, {description})
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        }
        console.log(result);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    axios
      .get("http://localhost:3003/readnote/"+id)
      .then((result) => {
        setDescription(result.data.description)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="divEdit"
    >
      <h3 style={{color:'violet',fontFamily:'monospace'}}>Update</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            placeholder="Caption..."
            className='updateText'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className='btnUpdate'>Update Note</button>
      </form>
    </div>
    </>
  );
};

export default Edit;
