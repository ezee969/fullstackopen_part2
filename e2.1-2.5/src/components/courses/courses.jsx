import React from 'react';
import Course from '../course/course';

export default function Courses({ courses }) {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((e) => (
        <Course course={e} />
      ))}
    </div>
  );
}
