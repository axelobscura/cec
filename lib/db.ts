import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
})

function handleError(e: unknown) {
  if (e instanceof Error) {
    const error = new Error(e.message);
    console.error(error.message);
  } else {
    console.error("The argument is not an Error object.");
  }
}

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e) {
    handleError(e);
  }
}