import { CandidateModel } from "../models/CandidateModel";
import React from "react";

export default function CV(props: CandidateModel) {
  return (
    <div>
      <img src={props.picture} alt="" />
      <h1>{props.name}</h1>
      <p>{props.location}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>Visa Status: {props.visa_status}</p>
      <p>
        <a href={`${props.linkedIn}`}>LinkedIn</a> |
        <a href={`${props.github}`}>GitHub</a> |
        <a href={`${props.website}`}>Website</a>
      </p>
    </div>
  );
}
