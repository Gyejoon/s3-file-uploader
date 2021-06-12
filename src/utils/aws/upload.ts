import { config, S3 } from 'aws-sdk'

config.update({ region: process.env.AWS_REGION })

const s3 = new S3({ apiVersion: '2006-03-01' })

const upload = async (bucket: string, fileName: string, body: Buffer) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: bucket,
        Key: fileName,
        Body: body,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(data)
      }
    )
  })
}

export default upload
