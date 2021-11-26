import React from 'react';
import './style.css';

export default function App() {
  const roster = [
    {
      id: '1',
      number: '2',
      name: 'Mikah Ballew',
      position: 'G, F',
      grade: 'So.',
      height: '6\'3"',
      weight: '185',
    },
    {
      id: '2',
      number: '3',
      name: 'Jayce McDonald',
      position: 'PG, SG',
      grade: 'So.',
      height: '5\'8"',
      weight: '145',
    },
    {
      id: '3',
      number: '4',
      name: 'Ricky Rivas',
      position: 'G',
      grade: 'Sr.',
      height: '6\'1"',
      weight: '160',
    },
    {
      id: '4',
      number: '5',
      name: 'Jayden Harper',
      position: 'G, F',
      grade: 'Fr.',
      height: '6\'7"',
      weight: '190',
    },
    {
      id: '5',
      number: '12',
      name: 'Isaiah Ortega',
      position: 'G',
      grade: 'Jr.',
      height: '6\'1"',
      weight: '160',
    },
    {
      id: '6',
      number: '13',
      name: 'Nico Ponce',
      position: 'PG, SG',
      grade: 'So.',
      height: '5\'8"',
      weight: '165',
    },
    {
      id: '7',
      number: '14',
      name: 'Jalen Mims',
      position: 'PG',
      grade: 'Jr.',
      height: '5\'8"',
      weight: '145',
    },
    {
      id: '8',
      number: '15',
      name: 'Amari Robinson',
      position: 'G',
      grade: 'Jr.',
      height: '6\'0"',
      weight: '155',
    },
    {
      id: '9',
      number: '23',
      name: 'Naseef Lubowa',
      position: 'G',
      grade: 'Fr.',
      height: '6\'3"',
      weight: '165',
    },
    {
      id: '10',
      number: '25',
      name: 'Gabe Espinosa',
      position: 'G',
      grade: 'So.',
      height: '5\'10"',
      weight: '155',
    },
    {
      id: '11',
      number: '35',
      name: 'Tony Acevedo',
      position: 'C',
      grade: 'Jr.',
      height: '6\'7"',
      weight: '185',
    },
  ];

  return (
    <div className="App">
      <h1>Alemany High School Varsity Basketball Roster 2020-21</h1>
      {roster.map((data) => {
        return (
          <div className="roster-card" key="id">
            <h2 key="id">
              {data.name}, #{data.number}
            </h2>
            <p>
              {data.height}, {data.grade}, {data.position}
            </p>
          </div>
        );
      })}
    </div>
  );
}
