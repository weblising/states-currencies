import clientPromise from "@/lib/mongodb";

export default async function getConnection() {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME);
}
