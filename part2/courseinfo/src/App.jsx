import React from 'react';
import Course from './components/Course';

const App = ({ course }) => {
  let total = 0;

  course.parts.forEach(part => {
    total += part.exercises;
  });

  return (
    <div>
      <h1>
        {course.name}
      </h1>
      <div>
        {course.parts.map(part =>
          <Course key={part.id} course={part} />
        )}
      </div>
      <p style={{fontWeight: 'bold'}}>Total of {total} exercises </p>
    </div>
  );
};
export default App