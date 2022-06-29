import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px 5%;
  background-color: #d9d9d9;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: #b5b5b5;
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  background-color: #b5b5b5;
`;

export const PTable = styled.table`
  width: 50%;
  thead {
    th {
      padding: 10px;
      background-color: #bcbcbc;
      text-align: left;
    }
  }
  tbody {
    tr {
      text-align: left;
      border-bottom: 1px solid red;
      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`;
