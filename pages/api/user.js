import DatabaseService from "../../services/database";
import AuthServices from "../../services/auth";
import User from "../../models/User";

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { authorization } = req.headers;
  let userId;

  try {
    const { id } = await AuthServices.verify(authorization);
    userId = id;
  } catch (error) {
    return res.status(401).end();
  }

  const user = await User.findOne({ _id: userID }, { name: -1 });

  res.json(user.toObject());
};
