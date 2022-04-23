import React from "react";
import "../NameCard/NameCard.css";
export default function NameCard({ suggestedNames }) {
  return (
    <div className="result_name_card">
      <p className="result_name">{suggestedNames}</p>
    </div>
  );
}
