// /api/templates.js
export default async function handler(req, res) {
    const apiUrl = 'https://api.smart1sites.com/api/v1/templates';
    try {
        const response = await fetch(apiUrl, {
            headers: { 'X-CLIENT-KEY': '4a64ad59abc74c9c5130b0bf4550b65c' } // Replace with your actual client key
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch templates' });
    }
}
