import React, { useState } from "react";
import "../CSS/Sell.css";

export const Sell = (props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!image || !title || !price) {
      alert("Enter all mandatory details.");
    } else {
      props.addProperty(image, title, price);
      setImage("");
      setTitle("");
      setPrice("");
    }
    alert("This will add your Property to 'Buy' page.");
  };
  return (
    <div>
      {/* <form onSubmit={submit}>
        <label htmlFor="name">Enter name of the property.</label>
        <input type="text" id="name"></input>
        <button type="submit">Click</button>
      </form> */}
      <div className="container">
        <img
          className="img"
          src="https://i.insider.com/606bc4bca7d803001963edea?width=700"
          alt=""
        ></img>
      </div>

      <div className="content-container">
        <h3 className="sell-heading">Introducing: Sharma & Co.</h3>
        <p className="tagline">"Building Dreams, One Home at a Time."</p>

        <p className="p-sell-about">
          Welcome to Sharma & Co. , your trusted partner in finding your dream
          home and investment properties. At S & Co. , we are committed to
          providing exceptional real estate services, ensuring a seamless and
          rewarding experience for our clients.Since our establishment in 2023,
          we have been committed to creating meaningful and lasting
          relationships with our clients while helping them navigate the
          ever-evolving real estate market.
          <br />
          <br />
          At S & Co. , we are a team of passionate and experienced real estate
          professionals with a deep-rooted commitment to client satisfaction.
          With years of industry knowledge and a strong understanding of local
          markets, we are well-equipped to guide you through the entire buying,
          selling, or investment process.
          <br />
          <br />
        </p>
        <hr />
      </div>

      <div className="content-container">
        <h3>Neighborhoods</h3>
        <p className="p">
          We specialize in homes in the following neighborhoods. Click through
          to see our recommendations on schools, activities, and favorite
          places. Discover the hidden gems that make each neighborhood unique
          and find which one is perfect for your new home.Ultimately, a good
          neighborhood is one that aligns with your specific preferences,
          lifestyle, and requirements.
        </p>
      </div>
      <div className="neighborhoods">
        <div className="neighborhoods-list">
          <div className="neighborhoods-item">
            <img
              src="https://www.shutterstock.com/image-vector/modern-sports-logo-symbol-cycling-260nw-461502049.jpg"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hcc_W8xGjpQKP2Hr_P1slynccMuPR6ULJ3pU-8NP084dj9mQJ65buWMeuA5xgtZUzzc&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBMhSPfc8oHuZzTd4DO_H7_G2-M22CYv3KA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OCljSYVEijYlAfRpz5lz3Xmh1qyopvp-grVnmUPPE2lWCTSxmo9aI8d11v230xG3-YQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nEOFCL6lelbmkdMYHQSEpjHF-KJdKkP-qmCeX7QI-MBnSv4gNeFcxiARclUuOMJ43Is&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniagr6LTtdzg21kCYe7DQp1IOc8eL3_G98MrQFA4ySMB9R-LnN9mvUdCp4wCGE7QHGgE&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6X0z2k8ML-xF3osyDB6sOJPo6LnvGCm6YOAzV7mlyO4iaZpYeXDnUUDHGl0ax6jIWYI&usqp=CAU"
              alt=""
            />
          </div>
          <div className="neighborhoods-item">
            <img
              src="https://thumbs.dreamstime.com/z/car-garage-logo-vintage-retro-repair-label-symbol-mechanic-service-sticker-black-white-vector-illustration-195914305.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="form-container">
        <h3>Let's Get in Touch</h3>
        <p className="p">
          Other questions? Want to learn more? Get in touch below!
        </p>

        <form onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              name="name"
              placeholder="Property Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              placeholder="Asking"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              name="image"
              placeholder="Enter Image URL"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          {/* <div className="form-group">
            <select id="region" name="region" required>
              <option value="" disabled selected hidden>
                Select your Region
              </option>
              <option value="New York City">New York City</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="London">London</option>
              <option value="Manchester City">Manchester City</option>
            </select>
          </div> */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Enter a short description about the property."
              rows="4"
              required
            ></textarea>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
