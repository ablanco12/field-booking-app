import React, { useState } from 'react';
import { Row, Col, Container, Dropdown, Button } from 'react-bootstrap';
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

  const handleSelect = (ranges) => {
    setSelectionRange([ranges.selection]);
  };

  // Example array of baseball fields
  const baseballFields = ['Titan Stadium', 'Field 2', 'Field 3'];

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
            <h1>Titan Stadium</h1>
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
              <Button variant="primary" className="w-10">
                Contact Us
              </Button>{' '}
              {/* Full width */}
            </div>
          </Col>
        </Row>

        {/* Additional content can go here */}
      </Container>
    </>
  );
};

export default HomeScreen;
