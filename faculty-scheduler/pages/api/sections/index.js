import axios from 'axios';

export default async (req, res) => {
  try {
    // API gets all sections from sectiontable
    const response = await axios.get('https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/');
    const data = response.data.items;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};