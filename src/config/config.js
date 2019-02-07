const secretKey = process.env.SECRET_ACCESS_KEY;
const accessKey = process.env.ACCESS_KEY;

export default {
    credentials: {
      secretAccessKey: secretKey,
      accessKeyId: accessKey
    },
    region: 'us-east-1'
}