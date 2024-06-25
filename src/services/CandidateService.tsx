import axios from "axios";
import { CandidateModel } from "../models/CandidateModel";

export const getCandidateInformation = async () => {
  const response = await axios.get(
    "https://olganedelcu.github.io/data/data.json"
  );
  return response.data as CandidateModel;
};
