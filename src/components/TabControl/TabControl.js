import React from "react";
import { Tabs, Tab, Badge } from "react-bootstrap";
import { TabControlStyled } from "./TabControlStyled";
import AppointmentTable from "../../components/AppointmentTable/AppointmentTable";
import PatientMonitoringTab from "../../components/PatientMonitoringTab/PatientMonitoringTab";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TabControl = () => {
  return (
    <TabControlStyled>
      <div className="customTab">
        <Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
          <Tab
            eventKey="appointments"
            id="appointments"
            title="Today's Appointments"
          >
            <Row>
              <Col sm={12} xs={12} md={12} lg={12}>
                <AppointmentTable />
              </Col>
            </Row>
            
          </Tab>
          <Tab
            id="monitoring"
            eventKey="monitoring"
            title={
              <React.Fragment>
                Patient Monitoring
                <Badge>04</Badge>
              </React.Fragment>
            }
          >
            <PatientMonitoringTab />
          </Tab>
        </Tabs>
      </div>
    </TabControlStyled>
  );
};

export default TabControl;
