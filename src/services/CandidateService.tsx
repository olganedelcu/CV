import axios from 'axios';
import { CandidateModel } from '../models/CandidateModel';

export const getCandidateInformation = async (): Promise<CandidateModel> => {
  try {
    const response = await axios.get<CandidateModel>(
        'https://olganedelcu.github.io/data2/data.json'
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch candidate information: ${error.message}`);
    } else {
      throw new Error('Failed to fetch candidate information: Unknown error occurred');
    }
  }
};
