import { NextApiRequest, NextApiResponse } from "next";
import "../../../../lib/firebase_admin";
import { firestore } from "firebase-admin";

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  const doc = await firestore().collection("answers").doc(id).get();

  res.status(200).json(doc.data());
};

export default request;
