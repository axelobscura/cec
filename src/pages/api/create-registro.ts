import { NextApiHandler } from 'next'
import { query } from 'lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { 
    categoria,
    titulo,
    autor,
    isbn,
    editorial,
    archivo,
    presentacion,
    claves
  } = req.body
  try {
    if (!categoria || !titulo) {
      return res
        .status(400)
        .json({ message: '`categoria` and `titulo` son requeridos' })
    }

    const results = await query(
      `
      INSERT INTO acervo (categoria, titulo, autor, isbn, editorial, archivo, presentacion, claves)
      VALUES ('${categoria}', '${titulo}', '${autor}', '${isbn}', '${editorial}', '${archivo}', '${presentacion}', '${claves}')
      `,
    )
    return res.json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}
export default handler