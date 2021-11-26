import React from 'react';
import './style.css';

export default function App() {
  const roster = [
    {
      id: '1',
      number: '3',
      name: 'Roman Stewart',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '2',
      number: '11',
      name: 'Alex Leinbach',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '3',
      number: '12',
      name: 'Mason Dorsey',
      position: 'PG',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '4',
      number: '15',
      name: 'Casey Block',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '5',
      number: '23',
      name: 'Karson Peffer',
      position: '',
      grade: 'Jr.',
      height: '6\'5"',
      weight: '205',
    },
    {
      id: '6',
      number: '23',
      name: 'Marcus Covaleski',
      position: 'PG',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '7',
      number: '24',
      name: 'Alex Munzon',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '8',
      number: '35',
      name: 'Peyton White',
      position: '',
      grade: '8th',
      height: '',
      weight: '0',
    },
    {
      id: '9',
      number: '41',
      name: 'Josh Montiano',
      position: 'PG, SG',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '10',
      number: '51',
      name: 'Dimitri Perris',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '11',
      number: '55',
      name: 'Alex Pascu',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '12',
      number: '55',
      name: 'Jake Eddy-watkins',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '13',
      number: '',
      name: 'Shaun Kowlessar',
      position: 'PG',
      grade: '',
      height: '5\'9"',
      weight: '120',
    },
  ];

  return (
    <div className="App">
      <h1>Crespi High School Varsity Basketball Roster 2020-21</h1>
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
