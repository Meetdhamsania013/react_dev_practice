import styled from 'styled-components';

export const AppointmentTableStyled = styled.div`
  margin-top: 20px;
  .searchWrap{
    margin: 30px 0px;
    display: flex;
    align-items: end;
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #0a003d;
  }
  .tableFilter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
    .tableFilterHeader {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.02em;
      color: #0a003d;
      @media screen and (max-width: 960px) {
        padding-bottom: 10px;
      }
    }
    .tableFilterSearch {
      position: relative;
      width: 288px;
      .filterSearchInput {
        background: #ffffff;
        border: 1.5px solid rgba(212, 243, 254, 0.4);
        border-radius: 10px;
        padding: 0.7rem 0.75rem;
      }
      .searchIcon {
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -11px;
      }
    }
  }
  .tableContent {
    background: #ffffff;
    opacity: 0.8;
    box-shadow: 0px 6px 14px rgba(228, 250, 255, 0.4);
    border-radius: 20px;
    padding: 24px;
  }
  @media screen and (max-width: 960px) {
    .table{
      overflow-x: auto;
      width: 100%;
      display: block;
    }
  }
  .table > :not(caption) > * > * {
    border-bottom-style: dashed;
  }
  table th {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #808080;
    border-bottom-style: solid !important;
  }
  table tr td {
    padding: 30px 0.5rem;
  }
  .patientInformation {
    display: flex;
    align-items: center;
    .patientImg img {
      width: 40px;
      height: 40px;
    }
    .patientName {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #001f4f;
      margin: 0 28px 0 12px;
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #30496f;
        display: block;
      }
    }
  }
  .patientMedications {
    button + button {
      margin-left: 10px;
    }
  }
  .tableAppointment {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #001f4f;
  }
  .tableReason {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #001f4f;
  }
`;

export const patientMedicationsStyled = styled.div`
  .patientMedicationsList {
    font-weight: 500;
    font-size: 11px;
    line-height: 20px;
    color: #001f4f;
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #808080;
      display: block;
    }
    + .patientMedicationsList {
      margin-top: 14px;
    }
  }
`;
