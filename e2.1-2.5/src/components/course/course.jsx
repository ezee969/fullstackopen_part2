import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Total from '../total/total';

export default function Course({ course }) {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total data={course.parts} />
    </div>
  );
}
