import React from "react";

export default function bioCandidate(props: Props) {
  return (
    <div>
      <img src={props.picture} alt="" />
      <h1>{props.name}</h1>
      <p>{props.location}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>Visa Status: {props.visaStatus}</p>
      <p>
        <a href={props.linkedIn}>LinkedIn</a> |{" "}
        <a href={props.github}>GitHub</a> | <a href={props.website}>Website</a>
      </p>
    </div>
  );
}

interface Props {
  name: string;
  location: string;
  email: string;
  phone: string;
  visaStatus: string;
  linkedIn: string;
  github: string;
  website: string;
  picture: string;
}
