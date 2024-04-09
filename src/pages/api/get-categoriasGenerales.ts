import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
      SELECT * FROM categorias
      ORDER BY id ASC
    `)
    return res.json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}

export default handler