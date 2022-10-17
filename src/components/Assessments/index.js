import React  from 'react';
import ScssAssessment from './ScssAssessment'
import ReduxAssessment from './ReduxAssessment'

export default function Assessments() {
  return (
    <div className="grid grid-cols-1 divide-y m-4">
      <ScssAssessment />
      <ReduxAssessment />
    </div>
  );
}
