import React, {useState, useEffect} from "react";
import axios from "axios";
import "../component.css";

const ListAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/")
      .then((res) => {
        // console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        console.log(res);
        setAuthors(authors.filter((author) => author._id !== id));
      })
      .catch((err) => console.log(err));
  };

  // this button takes the user to the edit page
  const editHandler = (id) => {
    window.location = "/edit/" + id;
  };

  return (
    <div>
      <h2>We have quotes by the following authors:</h2>
      <table className="StyledTable">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td className="Actions">
                <button className="Btn" onClick={() => editHandler(author._id)}>
                  Edit
                </button>
                <button
                  className="Btn"
                  onClick={() => deleteHandler(author._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAuthors;
