import React, {useState, useEffect} from "react";

const FormAuthors = (props) => {
  const {onSubmitProp, initialName, initialErrors} = props;
  const [name, setName] = useState(initialName);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    setErrors(initialErrors);
  }, [initialErrors]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({name});
    console.log(errors);
  };

  return (
    <div className="Form">
      <form onSubmit={onSubmitHandler}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <button className="Btn blue" type="submit">
          submit
        </button>
        <button className="Btn blue" onClick={() => (window.location = "/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormAuthors;
