import React, {useState} from "react";
import FormAuthors from "../components/FormAuthors";
import axios from "axios";

const CreateView = () => {
  const [authors, setAuthor] = useState([]);
  const [errors, setErrors] = useState([]);

  const createNewAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/authors", author)
      .then((res) => {
        console.log(res);
        setAuthor([...authors, res.data]);
        window.location = "/";
      })
      .catch((err) => {
        setErrors(err.res.data);
      });
  };

  return (
    <div>
      <h1>Add a new author:</h1>
      <FormAuthors onSubmitProp={createNewAuthor} initialErrors={errors} />
    </div>
  );
};

export default CreateView;
