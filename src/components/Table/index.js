import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container, PTable, HeaderBar, Logo, Profile } from "./styles";
export default function Table() {
  const [pacients, setPacients] = useState([]);
  useEffect(() => {
    async function loadPacients() {
      const response = await api.get("/?results=4");
      console.log(response.data.results);
      setPacients(response.data.results);
    }
    loadPacients();
  }, []);

  let pacientsComponents = pacients.map((pacient) => {
    let birth = pacient.dob.date;
    let year = birth.slice(0, 4);
    let month = birth.slice(5, 7);
    let day = birth.slice(8, 10);
    return (
      <tr>
        <td>
          {pacient.name.title} {pacient.name.last}
        </td>
        <td>{pacient.gender}</td>
        <td>
          {day}/{month}/{year}
        </td>
        <td>odsd</td>
      </tr>
    );
  });
  return (
    <Container>
      <HeaderBar>
        <Logo />
        <Profile />
      </HeaderBar>
      <h3>tabela de produtos</h3>
      <PTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{pacients && pacientsComponents}</tbody>
      </PTable>
    </Container>
  );
}
