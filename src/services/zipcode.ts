export async function serviceZipCode(zipCode: string) {
  const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json`, {
    method: 'GET',
  })

  if (response.ok) {
    return {
      ok: true,
      data: await response.json(),
    }
  }

  return {
    ok: false,
  }
}
