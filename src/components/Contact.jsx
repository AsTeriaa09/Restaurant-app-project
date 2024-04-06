import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
     <h2 className="mt-5 text-center">Contact Us</h2>
      <div className="contact-sec text-white text-center">
       
        <div className="container mt-5">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-start">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control"
                placeholder="Leave a Message here"
                id="floatingTextarea"
                rows="4"
              ></textarea>
            </div>

            <div className="text-start">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
