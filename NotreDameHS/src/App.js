import React from 'react';
import './style.css';

export default function App() {
  const roster = [
    {
      id: '1',
      number: '0',
      name: 'David DaSilva',
      position: 'G',
      grade: 'Jr.',
      height: '6\'0"',
    },
    {
      id: '2',
      number: '1',
      name: 'Benji Moore',
      position: 'G, F',
      grade: 'Sr.',
      height: '6\'3"',
    },
    {
      id: '3',
      number: '2',
      name: 'Ryan Ellis',
      position: 'F',
      grade: 'Sr.',
      height: '6\'6"',
    },
    {
      id: '4',
      number: '3',
      name: 'Ben Shtolzberg',
      position: 'G',
      grade: 'Jr.',
      height: '6\'4"',
    },
    {
      id: '5',
      number: '4',
      name: 'Luke Nelson',
      position: 'F',
      grade: 'So.',
      height: '6\'5"',
    },
    {
      id: '6',
      number: '5',
      name: 'Mickey Cosgrove',
      position: 'G',
      grade: 'Jr.',
      height: '5\'11"',
    },
    {
      id: '7',
      number: '10',
      name: 'Luke Rishwain',
      position: 'G',
      grade: 'Jr.',
      height: '5\'11"',
    },
    {
      id: '8',
      number: '11',
      name: 'Omari Garrett',
      position: 'G',
      grade: 'So.',
      height: '6\'0"',
    },
    {
      id: '9',
      number: '12',
      name: 'Daniel Margusov',
      position: 'F',
      grade: 'Jr.',
      height: '6\'6"',
    },
    {
      id: '10',
      number: '13',
      name: 'Kendall Hailey',
      position: 'G',
      grade: 'Jr.',
      height: '6\'3"',
    },
    {
      id: '11',
      number: '15',
      name: 'Conlan Poindexter',
      position: 'G',
      grade: 'Jr.',
      height: '6\'0"',
    },
    {
      id: '12',
      number: '20',
      name: 'Dante Ogbu',
      position: 'G',
      grade: 'So.',
      height: '6\'3"',
    },
    {
      id: '13',
      number: '23',
      name: 'Lucas Blum',
      position: 'F',
      grade: 'Jr.',
      height: '6\'1"',
    },
    {
      id: '14',
      number: '24',
      name: 'Bailey Greenberg',
      position: 'F',
      grade: 'Sr.',
      height: '6\'6"',
    },
  ];

  return (
    <div className="App">
      <h1>
        Notre Dame (Sherman Oaks) High School Varsity Basketball Roster 2020-21
      </h1>
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
