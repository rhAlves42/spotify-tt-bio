export default async function({ req }: {  req: unknown}):Promise<any[]> {
  try {
    const result = await req;
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}