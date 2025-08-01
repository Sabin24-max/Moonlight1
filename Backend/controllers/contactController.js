// Backend/controllers/contactController.js

export const submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Optional: Save to database here (e.g., db.Contact.create({ name, email, message }))

    console.log("Contact message received:", { name, email, message });

    res.status(200).json({ message: 'Contact message submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({ message: 'Server error while submitting contact message' });
  }
};
