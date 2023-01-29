import React, {useState, useEffect} from "react";
import FormAuthors from "../components/FormAuthors";
import axios from "axios";
import {useParams} from "react-router-dom";

const UpdateView = () => {
  const {id} = useParams();
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + id, author)
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.res.data);
      });
  };

  return (
    <div>
      <h1>Edit this author:</h1>
      {loaded && (
        <FormAuthors
          onSubmitProp={updateAuthor}
          initialName={author.name}
          initialErrors={errors}
        />
      )}
    </div>
  );
};

export default UpdateView;
