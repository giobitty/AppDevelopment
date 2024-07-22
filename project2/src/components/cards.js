import React, { useState } from "react";
import '../styles/styles.css';
import Leak from '../styles/img/leak.jpg';
import Logo from '../styles/img/plumber.jpg';
import Clog from '../styles/img/clogged.jpg';
import Flood from '../styles/img/flood.jpeg';
import Installation from '../styles/img/installation.jpg';

const services = [
  {
    title: "Leaky faucets & pipes",
    imgSrc: Leak,
    imgAlt: "leak picture",
    details: (
      <p>
        Our Pros unclog & repair more drains & sewers than any other company in North America:
        <ul>
          <li><b>Kitchen & bathroom sinks</b></li>
          <li><b>Bathtub & floor drains</b></li>
          <li><b>Outdoor downspout drainpipes</b></li>
        </ul>
      </p>
    ),
  },
  {
    title: "Clogged pipes & drains",
    imgSrc: Clog,
    imgAlt: "clog picture",
    details: (
      <p>
        Our trained Pros can detect & repair leaky faucets & pipes both inside & outside of your home. We fix leaky pipes & dripping faucets, too.
        <ul>
          <li><b>Basements</b></li>
          <li><b>Bathrooms</b></li>
          <li><b>Kitchens</b></li>
          <li><b>Outdoor</b></li>
        </ul>
      </p>
    ),
  },
  {
    title: "Flood damage clean up & removal",
    imgSrc: Flood,
    imgAlt: "flood damage picture",
    details: <p>Details about service 3.</p>,
  },
  {
    title: "Water heater repairs & installations",
    imgSrc: Installation,
    imgAlt: "water heater picture",
    details: <p>Details about service 4.</p>,
  },
];

const Cards = function() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [inputData, setInputData] = useState({
    fullname: '',
    usercomments: '',
    date: '',
  });

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setInputData({
      fullname: '',
      usercomments: '',
      date: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', inputData);
    handleCloseModal();
  };

  return (
    
    <section className='container'>
      <div className='services rows'>
        {services.map((service, index) => (
          <div className='card' key={index}>
            <h3>{service.title}</h3>
            {service.imgSrc && <img src={service.imgSrc} alt={service.imgAlt} />}
            <p>{service.details}</p>
            <button onClick={() => handleOpenModal(service)}>Book Service</button>
          </div>
        ))}
      </div>
      {showModal && selectedService && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>

           
           
              <div> 
                <h2>Booking: <span>{selectedService.title}</span>  Service</h2><img src={Logo} alt="plumer cartoon"></img></div>

             <form className="booking" onSubmit={handleSubmit}>  
              <div className="formcontainer"></div>
              <div className="formcontrol">
                <label htmlFor="name">Enter name: </label>
                <input
                  id="name"
                  name="fullname"
                  type="text"
                  placeholder="Type your name.."
                  value={inputData.fullname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formcontrol">
                <label htmlFor="comments">Explain your problem in few words: </label>
                <textarea
                  id="comments"
                  type="text"
                  name="usercomments"
                  placeholder="Max 1000 characters: "
                  cols="40"
                  rows="8"
                  maxLength={1000}
                  value={inputData.usercomments}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formcontrol">
                <label htmlFor="date">Select the date and time</label>
                <input
                  id="date"
                  type="datetime-local"
                  name="date"
                  value={inputData.date}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
