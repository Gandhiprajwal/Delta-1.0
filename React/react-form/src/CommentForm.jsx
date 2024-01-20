import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: "",
    });
  };
  return (
    <>
      <h4>Give a Comment!</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: &nbsp;</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          onChange={handleInputChange}
          value={formData.username}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remark">Remark: &nbsp;</label>
        <textarea
          name="remark"
          id="remark"
          cols="30"
          rows="10"
          onChange={handleInputChange}
          value={formData.remark}
          placeholder="add a remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating: &nbsp;</label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          onChange={handleInputChange}
          value={formData.rating}
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </>
  );
}
