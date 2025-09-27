import axios from 'axios';

export const getBuildsList = async () => {
  try {
    const response = await axios.get(
      'https://test.smarto.agency/smarto_complexes_list.json'
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
