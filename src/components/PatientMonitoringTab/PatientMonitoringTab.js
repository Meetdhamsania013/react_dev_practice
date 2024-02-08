import React from "react";
import { Col, Row } from "react-bootstrap";
import PatientMonitoringBox from "./PatientMonitoringBox";
import { PatientMonitoringTabStyled } from "./PatientMonitoringTabStyled";
// import { Link } from "react-router-dom";


const dataPatientDetails = [
  {
    patientName: "Oliver Wilson",
    status: "red",
    age: "38",
    illness: "Heart Disease",
    ecgBPM: "104",
    bodyTemp: "100",
    heartRate: "70",
    glucose: "172",
    SpO2: "96",
    bloodPressureSys: "125",
    bloodPressureDia: "80",
  },
  {
    patientName: "Caroline Martins",
    status: "green",
    age: "38",
    illness: "Heart Disease",
    ecgBPM: "104",
    bodyTemp: "97.5",
    heartRate: "102",
    glucose: "172",
    SpO2: "98",
    bloodPressureSys: "120",
    bloodPressureDia: "80",
  },
  {
    patientName: "Sara Nelson",
    status: "amber",
    age: "38",
    illness: "Heart Disease",
    ecgBPM: "104",
    bodyTemp: "97.5",
    heartRate: "102",
    glucose: "172",
    SpO2: "94",
    bloodPressureSys: "100",
    bloodPressureDia: "89",
  },
  {
    patientName: "William Jones",
    age: "38",
    illness: "Heart Disease",
    ecgBPM: "104",
    bodyTemp: "97.5",
    heartRate: "102",
    glucose: "172",
    SpO2: "92",
    bloodPressureSys: "113",
    bloodPressureDia: "79",
  },
];

const PatientMonitoringTab = ({ data = dataPatientDetails, theme }) => {
  return (
    <PatientMonitoringTabStyled>
      <Row className="mx-0">
        {data.map((dataItems, index) => {
          return (
            <Col sm="12" md="12" lg="6" key={index}>
              <PatientMonitoringBox
                data={dataItems}
              />
            </Col>
          );
        })}
      </Row>
    </PatientMonitoringTabStyled>
  );
};

export default PatientMonitoringTab;
