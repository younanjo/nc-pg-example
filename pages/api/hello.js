import { getUserById } from '../../repositories';

export default async (req, res) => {
  const x = await getUserById(2);
  res.status(200).json(x);
};
