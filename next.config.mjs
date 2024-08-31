/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
        domains : ['http://localhost:3000/'] // <== Domain name
    }
};

export default nextConfig;
