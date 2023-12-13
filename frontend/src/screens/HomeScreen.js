import React, { useState } from 'react';
import { Row, Col, Container, Dropdown, Button, Modal } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import baseballFieldImage from '../assets/baseballfield1.jpeg';

const HomeScreen = () => {
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleSelect = (ranges) => {
    setSelectionRange([ranges.selection]);
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // Example array of baseball fields
  const baseballFields = [
    'Pistol Pete Field',
    'City Slicka Field',
    'Joban Field',
  ];

  return (
    <>
      <Container fluid>
        {/* Hero Section with Baseball Field Image */}
        <Row
          style={{
            background: `url(${baseballFieldImage}) center/cover no-repeat`,
            height: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Empty Row for Hero Image */}
        </Row>

        {/* Dropdown for Baseball Fields */}
        <Row className="justify-content-center my-4">
          <Col md={6} className="text-center">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select a Baseball Field
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {baseballFields.map((field, index) => (
                  <Dropdown.Item key={index} href="#/action-1">
                    {field}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Baseball Field Information and Booking Calendar */}
        <Row className="justify-content-center my-4">
          <Col md={6} className="text-center">
            <h1>Pistol Pete Field</h1>
            <p>
              5622 Ray Ellison San Antonio TX 78242
              <br />
              <br />
              <strong>About This Listing</strong>
              <br />
              Baseball field features well maintained infield and outfield ideal
              for baseball practices or games. The outfield grass is available
              for other field sports as well.
              <br />
              <br />
              <strong>Possible Uses:</strong>
              <br />
              Other (meeting, class, etc.), Baseball, Softball
              <br />
              <br />
              <strong>Amenities:</strong>
              <br />
              Parking
              <br />
              Locker Rooms
            </p>
          </Col>

          <Col md={6} className="text-center">
            <h2>Select Dates for Booking</h2>
            <DateRangePicker ranges={selectionRange} onChange={handleSelect} />
          </Col>
        </Row>

        {/* Contact Us and Book Buttons */}
        <Row className="justify-content-center my-4">
          <Col md={6} className="text-center">
            <div className="mb-2">
              {' '}
              {/* Margin for spacing between buttons */}
              <Button variant="success" className="w-10">
                Book
              </Button>{' '}
              {/* Full width */}
            </div>
            <div>
              <Button
                variant="primary"
                className="w-10"
                onClick={handleModalShow}
              >
                Contact Us
              </Button>{' '}
              {/* Full width */}
            </div>
          </Col>
        </Row>

        {/* Modal for Contact Us */}
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Placeholder contact information */}
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
            {/* Add more contact information as needed */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Additional content can go here */}
      </Container>
    </>
  );
};

export default HomeScreen;
