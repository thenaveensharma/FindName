import React from "react";
import "./ResultContainer.css";
import NameCard from "./NameCard/NameCard";
export default function ResultContainer({ suggestedNames }) {
  const suggestedNameJsx = suggestedNames.map((suggestedNames,index) => {
    return (
      <NameCard key={index} suggestedNames={suggestedNames}></NameCard>
    );
  });
  return <div className="results_container">{suggestedNameJsx}</div>;
}
