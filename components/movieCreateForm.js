import { useState } from "react";

const MovieCreateForm = (props) => {
  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  }

  const formData = props.initialData ? {...props.initialData} : defaultData

  const [form, setForm] = useState(formData);

  const handleChange = event => {
    const target = event.target;
    const name = target.name;

    console.log(target.value);

    setForm({
      ...form,
      [name]: target.value
    });
  };

  const handleGenreChange = event => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: value.toString()
    });
  };

  const submitForm = () => {
    props.handleFormSubmit({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          value={form.rating}
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          value={form.image}
          type="text"
          className="form-control"
          id="image"
          name="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          type="text"
          className="form-control"
          id="cover"
          name="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          value={form.longDesc}
          className="form-control"
          id="longDesc"
          rows="3"
          name="longDesc"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
          name="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button
        onClick={submitForm}
        type="button"
        className="btn btn-primary">
          { props.submitButton || 'Create' }
      </button>
    </form>
  );
};

export default MovieCreateForm;
