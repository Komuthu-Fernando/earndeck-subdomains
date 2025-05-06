export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      // TODO: Integrate with email service (e.g., SendGrid) or CRM (e.g., HubSpot)
      console.log('Form submission:', { name, email, message });
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }