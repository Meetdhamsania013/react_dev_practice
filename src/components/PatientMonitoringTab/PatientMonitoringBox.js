import React from "react";
import { Image } from "react-bootstrap";
import IC_STATUS_DOT_RED from "../../assets/images/status_dot_red.svg";
import IC_STATUS_DOT_AMBER from "../../assets/images/status_dot_amber.svg";
import IC_STATUS_DOT_GREEN from "../../assets/images/status_dot_green.svg";
import IMG_HUMAN_BODY from "../../assets/images/image_human_body.png";
import IC_HEART from "../../assets/images/ic_heart.svg";
import { PatientMonitoringBoxStyled } from "./PatientMonitoringTabStyled";

const PatientMonitoringBox = ({ data, status, customClass }) => {
  return (
    <>
      <PatientMonitoringBoxStyled
        data={data}
        status={data?.status}
        className={customClass}
      >
        <div className="headerPart">
          <div className="leftSide">
            <div className="title">{data?.patientName}</div>
            {status && (
              <div className="statusDot">
                <Image
                  src={
                    status === "red"
                      ? IC_STATUS_DOT_RED
                      : status === "amber"
                      ? IC_STATUS_DOT_AMBER
                      : status === "green"
                      ? IC_STATUS_DOT_GREEN
                      : ""
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="arrow"></div>
        </div>
        <div className="ageAndIllness">
          <div className="age">
            <div className="label">Age:</div>
            <div className="data">{data?.age} Years</div>
          </div>
          <div className="illness">
            <div className="label">Illness:</div>
            <div className="data">{data?.illness}</div>
          </div>
        </div>
        <div className="content">
          <div className="ecgBox">
            <div className="title">
              <span className="label">ECG</span>
              <span className="number">
                <Image src={IC_HEART} alt="heart icon" /> {data?.ecgBPM} BPM
                Average
              </span>
            </div>
            <div className="graph"></div>
          </div>
          <div className="imageAndMeasures">
            <div className="bodyImage">
              <Image src={IMG_HUMAN_BODY} alt="body image" />
            </div>
            <div className="bodyMeasures">
              <div className="bodyMeasure full">
                <div
                  className={`statusStripe ${
                    data?.bodyTemp <= 98
                      ? "green"
                      : data?.bodyTemp > 98 && data?.bodyTemp < 100
                      ? "amber"
                      : data?.bodyTemp >= 100
                      ? "red"
                      : ""
                  }`}
                ></div>
                <div className="label">Body Temperature</div>
                <div className="value">
                  {data?.bodyTemp} &deg; <span>F</span>
                </div>
              </div>
              <div className="bodyMeasure">
                <div
                  className={`statusStripe ${
                    data?.heartRate >= 60 && data?.heartRate <= 90
                      ? "green"
                      : data?.heartRate < 60 || data?.heartRate > 90
                      ? "amber"
                      : data?.heartRate < 45 || data?.heartRate > 140
                      ? "red"
                      : ""
                  }`}
                ></div>
                <div className="label">Heart Rate</div>
                <div className="value">
                  {data?.heartRate} <span>bmp</span>
                </div>
              </div>
              <div className="bodyMeasure">
                <div
                  className={`statusStripe ${
                    data?.glucose <= 98
                      ? "green"
                      : data?.glucose > 98 && data?.glucose < 100
                      ? "amber"
                      : data?.glucose >= 100
                      ? "red"
                      : ""
                  }`}
                ></div>
                <div className="label">Glucose</div>
                <div className="value">
                  {data?.glucose} <span>mg/dl</span>
                </div>
              </div>
              <div className="bodyMeasure">
                <div
                  className={`statusStripe ${
                    data?.SpO2 >= 95
                      ? "green"
                      : data?.SpO2 < 95 && data?.SpO2 >= 90
                      ? "amber"
                      : data?.SpO2 < 90
                      ? "red"
                      : ""
                  }`}
                ></div>
                <div className="label">SpO2</div>
                <div className="value">
                  {data?.SpO2} <span className="ps-0">%</span>
                </div>
              </div>
              <div className="bodyMeasure">
                <div
                  className={`statusStripe ${
                    data?.bloodPressureSys <= 120 &&
                    data?.bloodPressureDia <= 80
                      ? "green"
                      : (data?.bloodPressureSys > 120 &&
                          data?.bloodPressureSys <= 139) ||
                        (data?.bloodPressureDia > 80 &&
                          data?.bloodPressureDia <= 89)
                      ? "amber"
                      : data?.bloodPressureSys >= 140 ||
                        data?.bloodPressureDia >= 90
                      ? "red"
                      : ""
                  }`}
                ></div>
                <div className="label">Blood Pressure</div>
                <div className="value">
                  {data?.bloodPressureSys}/{data?.bloodPressureDia}
                  <span>mm/hg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PatientMonitoringBoxStyled>
    </>
  );
};

export default PatientMonitoringBox;
