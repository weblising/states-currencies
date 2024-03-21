/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_NAME: "itmind",
    MONGODB_URI:
      "mongodb+srv://itmind:usBbnw3FBnAPCEOp@cluster0.xbhki1a.mongodb.net/itmind?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
