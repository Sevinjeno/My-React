// Create a controlled input form (text input, checkbox, select) and show live updates.
import { useState } from "react";
import "./FormPage.css";
const FormPage = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    coverletter: "",
    gender: "",
    skills: [],
    qualifications: "",
    profilePic: null,
    profilePicPreview: "",
  });

  const [show,setShow]=useState(false)

  const handleUser = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    let { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // file handler
  function handleFile(e) {
    const file = e.target.files[0];
    console.log("file", file);
    setUser((prev) => ({ ...prev, profilePic: file }));

    // Preview image
    if (file) {
      const url = URL.createObjectURL(file);
      console.log("url", url);
      setUser((prev) => ({ ...prev, profilePicPreview: url }));
    }
  }


  function handleCheckbox(e) {
  const { value, checked } = e.target;

  setUser(prev => {
    const updated = checked
      ? [...prev.skills, value]          // add item
      : prev.skills.filter(s => s !== value); // remove item

    return { ...prev, skills: updated };
  });
}

function handleToggle(){
  setShow(e=>!e)
}

  return (
    <>
    {/* <div className="FormContainer">
      <form>
        <div className="row">
          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              autoComplete="given-name"
              value={user?.firstname}
              onChange={handleUser}
            />
          </div>
          <div className="field">
            <label htmlFor="lastname">last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              autoComplete="family-name"
              value={user?.lastname}
              onChange={handleUser}
            />
          </div>
        </div>
        <div className="row">
          <div className="EmailField">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="Email"
              autoComplete="email"
              value={user?.email}
              onChange={handleUser}
            />
          </div>
        </div>

        <label htmlFor="Cover Letter">Cover Letter</label>
        <textarea
          id="coverletter"
          name="coverletter"
          rows="4"
          value={user?.coverletter}
          onChange={handleUser}
        ></textarea>

        <label htmlFor="Gender">Gender</label>
        <div className="row">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={user.gender == "male"}
              onChange={handleUser}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={user.gender == "female"}
              onChange={handleUser}
            />
            Female
          </label>
        </div>

        <label htmlFor="Skills">Skills</label>
        <label>
          <input
            type="checkbox"
            name="skills"
            value="react"
            checked={user.skills.includes("react")}
            onChange={handleCheckbox}
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            name="skills"
            value="node"
            checked={user.skills.includes("node")}
            onChange={handleCheckbox}
          />
          Node.js
        </label>

        <label>
          <input
            type="checkbox"
            name="skills"
            value="sql"
            checked={user.skills.includes("sql")}
            onChange={handleCheckbox}
          />
          SQL
        </label>

        <label htmlFor="Qualifications">Qualifications</label>
        <select
          id="qualifications"
          name="qualifications"
          value={user?.qualifications}
          onChange={handleUser}
        >
          <option value="">Select</option>
          <option value="bachelors">Bachelor’s Degree</option>
          <option value="masters">Master’s Degree</option>
          <option value="phd">PhD</option>
        </select>

        <label htmlFor="profilePic">profilePic</label>
        <input
          id="profilePic"
          name="profilePic"
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="LivePreview">
        <h2>Live Preview</h2>
        <p>
          Name: {user.firstname} {user.lastname}
        </p>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Qualification: {user.qualifications}</p>

        <p>Skills: {user.skills.join(", ")}</p>

        <p>Cover Letter:</p>
        <p>{user.coverletter}</p>

        {user.profilePicPreview && (
          <img
            src={user.profilePicPreview}
            alt="Preview"
            style={{ width: "150px", marginTop: "10px" }}
          />
        )}
      </div>
    </div> */}
    <div className="FormContainer">
        <button onClick={handleToggle} >Toggle</button>
        <div>
          {show ? "Data Live" : "No Data"}
        </div>
    </div>
    </>
  );
};

export default FormPage;
