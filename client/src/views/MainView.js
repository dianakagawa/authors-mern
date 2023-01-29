import React, {useState, useEffect} from "react";
import ListAuthors from "../components/ListAuthors";
import axios from "axios";
import {Link} from "react-router-dom";

const MainView = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/")
      .then((res) => {
        setAuthors(res.data.authors);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <>
      <div>
        <h1>Favorite Authors</h1>
        <Link to="/new">Add an author</Link>
      </div>
      <div>
        {loaded && (
          <ListAuthors authors={authors} removeFromDom={removeFromDom} />
        )}
      </div>
    </>
  );
};

export default MainView;
