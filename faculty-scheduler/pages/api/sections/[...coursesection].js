import axios from 'axios';

export default async (req, res) => {
    const { coursesection } = req.query;
    try {
    // Catchall statement for API gets either all sections, all sections of a course, or a specific section from sectiontable
    let url = '';
    if (coursesection.length == 2) {
        url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/' + coursesection[0] + '/' + coursesection[1];
    } else if (coursesection.length == 1) {
        url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/' + coursesection[0];
    } else {
        url = 'https://apex.oracle.com/pls/apex/facultyschedulerasst/sectiontable/cis/';
    }

    const response = await axios.get(url);
    const data = response.data.items;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};