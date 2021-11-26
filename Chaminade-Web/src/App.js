import React from 'react';
import './style.css';

export default function App() {
  const roster = [
    {
      id: '1',
      number: '0',
      name: 'Deven Yahraus',
      position: 'PG',
      grade: 'Sr.',
      height: '5\'7"',
      weight: '137',
    },
    {
      id: '2',
      number: '1',
      name: 'Jeremiah Uyanga',
      position: '',
      grade: 'Sr.',
      height: '5\'6"',
      weight: '125',
    },
    {
      id: '3',
      number: '2',
      name: 'Kenneth Simpson jr',
      position: 'PG',
      grade: 'Sr.',
      height: '6\'3"',
      weight: '180',
    },
    {
      id: '4',
      number: '3',
      name: 'Ik Ibe',
      position: 'SG',
      grade: 'Sr.',
      height: '6\'0"',
      weight: '156',
    },
    {
      id: '5',
      number: '4',
      name: 'Colin Weems',
      position: 'PG, SG',
      grade: 'Sr.',
      height: '6\'0"',
      weight: '165',
    },
    {
      id: '6',
      number: '5',
      name: 'Aidan Samson',
      position: '',
      grade: 'Jr.',
      height: '5\'7"',
      weight: '130',
    },
    {
      id: '7',
      number: '10',
      name: 'Jay Payind',
      position: 'SF, SG, SF',
      grade: 'Sr.',
      height: '6\'2"',
      weight: '180',
    },
    {
      id: '8',
      number: '11',
      name: 'Dylan Clay',
      position: '',
      grade: 'So.',
      height: '',
      weight: '0',
    },
    {
      id: '9',
      number: '12',
      name: 'Kemani Bandy',
      position: '',
      grade: 'Jr.',
      height: '',
      weight: '0',
    },
    {
      id: '10',
      number: '13',
      name: 'Josh Lopez',
      position: 'SF, PF',
      grade: 'Sr.',
      height: '6\'1"',
      weight: '215',
    },
    {
      id: '11',
      number: '14',
      name: 'Caden Cantwell',
      position: 'SG',
      grade: 'Jr.',
      height: '6\'1"',
      weight: '171',
    },
    {
      id: '12',
      number: '15',
      name: 'Bryce Goldman',
      position: '',
      grade: 'Fr.',
      height: '',
      weight: '0',
    },
    {
      id: '13',
      number: '20',
      name: 'Ryan Moore',
      position: 'SG, PG, PG',
      grade: 'Sr.',
      height: '6\'0"',
      weight: '182',
    },
    {
      id: '14',
      number: '21',
      name: 'Coltrane Marchand',
      position: '',
      grade: 'So.',
      height: '',
      weight: '0',
    },
    {
      id: '15',
      number: '22',
      name: 'Keith Higgins jr',
      position: 'SG',
      grade: 'Sr.',
      height: '6\'4"',
      weight: '167',
    },
    {
      id: '16',
      number: '',
      name: 'Kieran Cantwell',
      position: '',
      grade: '',
      height: '',
      weight: '0',
    },
    {
      id: '17',
      number: '',
      name: 'Jaden Hirasawa',
      position: 'PG, SG',
      grade: 'Jr.',
      height: '',
      weight: '0',
    },
  ];

  return (
    <div className="App">
      <h1>Chaminade High School Varsity Basketball Roster 2020-21</h1>
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
