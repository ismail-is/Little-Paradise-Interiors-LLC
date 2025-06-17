import React from 'react';

const GetTouch = ({ onClose }) => {
  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow-y: auto;
          padding: 20px;
        }

        .modal-content {
          background-color: #fff;
          border-radius: 10px;
          width: 100%;
          max-width: 1000px;
          position: relative;
          padding: 40px 20px 20px 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          z-index: 10000;
          pointer-events: auto;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #000;
          z-index: 10001;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .form-row input {
          flex: 1 1 calc(33.333% - 10px);
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .form-row input {
            flex: 1 1 100%;
          }
        }

        .btn-wrapper {
          margin-top: 30px;
          text-align: center;
        }

        .theme-btn-1 {
          padding: 10px 25px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .theme-btn-1:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="modal-overlay">
        <div className="modal-content ltn__appointment-area pb-120">
          <button className="close-btn" onClick={onClose}>×</button>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__appointment-inner">
                  <form>
                    <div className="form-row">
                      <input type="text" placeholder="First Name" />
                      <input type="text" placeholder="Last Name" />
                      <input type="text" placeholder="Location" />
                      <input type="text" placeholder="Residential or Commercial" />
                      <input type="text" placeholder="House or Apartment" />
                      <input type="text" placeholder="How many BHK" />
                      <input type="text" placeholder="Phone Number" />
                      <input type="text" placeholder="Email" />
                      <input type="text" placeholder="Budget" />
                    </div>
                    <div className="btn-wrapper">
                      <button type="submit" className="theme-btn-1" style={{backgroundColor:'#CB4D29'}}>Submit </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
