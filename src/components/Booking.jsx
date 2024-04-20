import React from "react";
import bookingImg from "../images/booking-img.webp";
import "../styles/Booking.css";

const Booking = () => {
  return (
    <>
      <div className="Booking">
        <div className="container">
          <h1 className="mb-5">Table Booking</h1>
          <div className="row">
            <div className="col-lg-8">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div class="mb-4">
                <div className="people">
                    <label for="exampleInputPassword1" class="form-label">
                      People *
                    </label>
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>4 people</option>
                      <option value="1">2 people</option>
                      <option value="2">4 people</option>
                      <option value="3">8 people</option>
                      <option value="3">10+ people</option>
                      
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Number *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>

                <div className="firstFlex">
                  <div class="mb-3 me-5">
                    <label for="exampleInputPassword1" class="form-label">
                      Date *
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleInputPassword1"
                      required
                    />
                  </div>
                  <div className="time">
                    <label for="exampleInputPassword1" class="form-label">
                      Time *
                    </label>
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>8:00 Pm</option>
                      <option value="1">12:00 Pm</option>
                      <option value="2">2:00 pm</option>
                      <option value="3">5:00 Pm</option>
                      <option value="3">8:00 Pm</option>
                      <option value="3">10:00 Pm</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
              </form>
            </div>
            <div className="col-lg-4">
              <img src={bookingImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
