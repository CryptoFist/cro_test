import React  from 'react';
import ReactAssessmentTable from './ReduxAssessmentTable';

export default function ReduxAssessment() {
  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        2. Redux, API HTTP calls and JS scripting
      </h3>
      <p className="subpixel-antialiased w-fit m-2">
        In this second test we will try out your skills in using Redux and making HTTP request to an API.
        For the precise directions, please refer to the README!
      </p>
      <ReactAssessmentTable />
    </div>
  );
}
