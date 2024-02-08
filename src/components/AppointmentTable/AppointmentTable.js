import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  AppointmentTableStyled
} from "./AppointmentTableStyled";
import UserAvatar from "../../assets/images/UserAvatar.png";
import tableAudio from "../../assets/images/table_audio.svg";
import searchIcon from "../../assets/images/search_icon.svg";
import tableMedicine from "../../assets/images/table_medicine.svg";
import tableMedicineList from "../../assets/images/table_medicineList.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { ReactSVG } from "react-svg";


const popover = (
  <Popover id="patientMedications" className="popoverCustomStyle">
    <Popover.Body>
      <patientMedicationsStyled>
        <div className="patientMedicationsList">
          <span>Medical Details</span>Dummy text over here
        </div>
        <div className="patientMedicationsList">
          <span>Last Prescription</span>Headache:
          <br />
          Aspirin - 1 daily (15 days)
        </div>
      </patientMedicationsStyled>
    </Popover.Body>
  </Popover>
);

const AppointmentTable = () => {
  const [data, setData] = useState([
    {
      patientName: "Oliver Wilson",
      patientGender: "Male",
      AppointmentTime: "8:00 AM",
      patientReason: "Heart Disease",
    },
    {
      patientName: "Nicole Jacob",
      patientGender: "Female",
      AppointmentTime: "10:00 AM",
      patientReason: "Hair fall",
    },
    {
      patientName: "Hugo First",
      patientGender: "Male",
      AppointmentTime: "7:00 AM",
      patientReason: "Blood Pressure",
    },
    {
      patientName: "Olive Tree",
      patientGender: "Female",
      AppointmentTime: "3:00 AM",
      patientReason: "Fever",
    },
    {
      patientName: "Peg Legge",
      patientGender: "Male",
      AppointmentTime: "11:30 AM",
      patientReason: "Heart Disease",
    },
  ]);

  // Current date
  const [currentDate, setCurrentDate] = useState("");
  useState(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentDate(date.toDateString().split(" ").slice(1).join(" ")); // remove week name
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  // Row count
  const rowCount = data.length;
  
  // Function to handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter table rows based on search term
  const [searchTerm, setSearchTerm] = useState("");
  const filterdata = data.filter(
    (row) =>
      row.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.patientGender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.patientReason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add data from
  const [enterPatientname, setPatientname] = useState("");
  const patientnameChangeHandle = (event) => {
    setPatientname(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // js for not reloading page on submit

    const storeNewPatientData = {
      patientName: enterPatientname,
      patientGender: "XXX",
      AppointmentTime: "XXX",
      patientReason: "XXX",
    };
    setData([...data, storeNewPatientData]); // add new data
    // console.log(storeNewPatientData);
    setPatientname("");
  };
  
  return (
    <AppointmentTableStyled>
      <h3>Appointments</h3>

      <Form onSubmit={submitHandler}>
        <div className="row searchWrap">
          <div className="col-md-2">
            <label>
              <b>Patient Name</b>
            </label>
            <Form.Control
              type="text"
              className="filterSearchInput"
              onChange={patientnameChangeHandle}
              value={enterPatientname}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit">
              Add data
            </button>
          </div>
        </div>
      </Form>

      <div className="tableContent">
        <div className="tableFilter">
          <div className="tableFilterHeader">
            {rowCount} Appointments for {currentDate}
          </div>
          <div className="tableFilterSearch">
            <Form.Control
              type="text"
              placeholder="Search Patient"
              className="filterSearchInput"
              value={searchTerm}
              onChange={handleSearch}
            />
            <ReactSVG
              src={searchIcon}
              alt="icon"
              title="icon"
              className="searchIcon"
            />
          </div>
        </div>

        <Table>
          <thead>
            <tr>
              <th>patient</th>
              <th>Appointment</th>
              <th>Reason</th>
              <th>Medications</th>
            </tr>
          </thead>
          <tbody>
            {filterdata?.map((row) => (
              <tr>
                <td>
                  <div className="patientInformation">
                    <div className="patientImg">
                      <Image src={UserAvatar} alt="" />
                    </div>
                    <div className="patientName">
                      {row.patientName || ""}
                      <span>{row.patientGender || ""}</span>
                    </div>
                    <div className="patientCall">
                      <Button variant="link" className="noPadding">
                        <Image src={tableAudio} alt="" />
                      </Button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tableAppointment">
                    {currentDate},<br /> {row.AppointmentTime || ""}
                  </div>
                </td>
                <td>
                  <div className="tableReason">{row.patientReason || ""}</div>
                </td>
                <td>
                  <div className="patientMedications">
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom-start"
                      overlay={popover}
                    >
                      <Button variant="link" className="noPadding">
                        <Image src={tableMedicine} alt="" />
                      </Button>
                    </OverlayTrigger>
                    <Button variant="link" className="noPadding">
                      <Image src={tableMedicineList} alt="" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AppointmentTableStyled>
  );
};

export default AppointmentTable;
