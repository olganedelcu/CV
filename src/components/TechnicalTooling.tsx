import React from "react";

export default function TechnicalTooling(props: Props) {
  return (
    <div>
      <h2>Technical Tooling</h2>
      <ul>
        {props.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  tools: string[];
}
