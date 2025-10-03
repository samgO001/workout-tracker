// Controlador simple para usuarios (datos de ejemplo)
const sampleUsers = [
  { id: 1, name: 'Ana', email: 'ana@example.com' },
  { id: 2, name: 'Luis', email: 'luis@example.com' }
];

exports.list = (req, res) => {
  res.status(200).json(sampleUsers);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = sampleUsers.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};
