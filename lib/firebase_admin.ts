import * as admin from "firebase-admin";

if (admin.apps.length == 0) {
  if (process.env.GCP_CREDENTIAL === undefined) {
    throw new Error("undefined");
  }
  const credential = JSON.parse(
    Buffer.from(
      process.env.GCP_CREDENTIAL.replace(/\\n/g, "\n"),
      "base64"
    ).toString()
  );

  admin.initializeApp({
    credential: admin.credential.cert(credential),
  });
}
