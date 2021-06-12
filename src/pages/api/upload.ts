import { NextApiRequest, NextApiResponse } from 'next'
import multer from 'multer'
import runMiddleware from '../../utils/runMiddleware'
import uploadS3 from '../../utils/aws/upload'

interface RequestWithFile extends NextApiRequest {
  file?: any
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    // Max file size (1 mb)
    fileSize: 1024 * 1024,
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: RequestWithFile, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      await runMiddleware(req, res, upload.single('image'))

      if (!req.file) return res.status(400).json({ error: 'File empty' })

      const { fileName } = req.body

      if (!fileName) return res.status(400).json({ error: 'FileName empty' })

      const uploadResult = (await uploadS3(
        process.env.AWS_S3_BUCKET_NAME,
        fileName,
        sharpImage
      )) as { Location: string }

      return res.json({ src: uploadResult.Location, error: '' })
    }

    return res.status(404).json({ error: '404 not found' })
  } catch (err) {
    return res.status(500).json({ error: err.name, message: err.message })
  }
}

export default handler
