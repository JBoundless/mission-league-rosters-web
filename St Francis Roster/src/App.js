import React from 'react';
import './style.css';

export default function App() {
  const roster = [
    {
      id: '1',
      number: '3',
      name: 'Brendan Casal',
      position: 'G',
      grade: 'Jr.',
      height: '5\'10"',
      weight: '0',
    },
    {
      id: '2',
      number: '4',
      name: 'Jake Goldberg',
      position: 'G',
      grade: 'Jr.',
      height: '6\'4"',
      weight: '0',
    },
    {
      id: '3',
      number: '5',
      name: 'Buckley Dejardin',
      position: 'W',
      grade: 'Jr.',
      height: '6\'5"',
      weight: '0',
    },
    {
      id: '4',
      number: '11',
      name: 'Devon Domingo',
      position: 'G',
      grade: 'Jr.',
      height: '6\'0"',
      weight: '155',
    },
    {
      id: '5',
      number: '12',
      name: 'Ethan Childs',
      position: 'G',
      grade: 'So.',
      height: '6\'4"',
      weight: '0',
    },
    {
      id: '6',
      number: '12',
      name: 'Alec Slim',
      position: 'SG',
      grade: 'Sr.',
      height: '6\'0"',
      weight: '0',
    },
    {
      id: '7',
      number: '13',
      name: 'Myron Longhurst',
      position: 'SF',
      grade: 'Jr.',
      height: '6\'3"',
      weight: '0',
    },
    {
      id: '8',
      number: '15',
      name: 'Evan Jernegan',
      position: 'F',
      grade: 'Sr.',
      height: '6\'2"',
      weight: '0',
    },
    {
      id: '9',
      number: '20',
      name: 'Francis Ferguson',
      position: 'F',
      grade: 'Jr.',
      height: '6\'4"',
      weight: '200',
    },
    {
      id: '10',
      number: '20',
      name: 'Ben Ferguson',
      position: 'SF',
      grade: 'Jr.',
      height: '',
      weight: '0',
    },
    {
      id: '11',
      number: '21',
      name: 'Luke Mcgrath',
      position: 'W',
      grade: 'So.',
      height: '6\'4"',
      weight: '0',
    },
    {
      id: '12',
      number: '22',
      name: 'Brandin Dantzler',
      position: 'F',
      grade: 'So.',
      height: '6\'3"',
      weight: '0',
    },
    {
      id: '13',
      number: '23',
      name: 'Xavier Thompson',
      position: 'G',
      grade: 'Jr.',
      height: '6\'0"',
      weight: '0',
    },
    {
      id: '14',
      number: '32',
      name: 'George Tupy',
      position: 'F',
      grade: 'So.',
      height: '6\'5"',
      weight: '0',
    },
    {
      id: '15',
      number: '34',
      name: 'Kennedy Mitchell-egbo',
      position: 'F',
      grade: 'So.',
      height: '6\'5"',
      weight: '0',
    },
    {
      id: '16',
      number: '35',
      name: 'Ryan Adler',
      position: 'G',
      grade: 'So.',
      height: '6\'3"',
      weight: '165',
    },
    {
      id: '17',
      number: '42',
      name: 'Jackson Mosley',
      position: 'G',
      grade: 'So.',
      height: '5\'10"',
      weight: '0',
    },
    {
      id: '18',
      number: '',
      name: 'Ryan Adler',
      position: '',
      grade: 'Jr.',
      height: '',
      weight: '0',
    },
  ];

  return (
    <div className="App">
      <h1>St. Francis High School Varsity Basketball Roster 2020-21</h1>
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
