export const mockRequest = <T>(
  mockData: T,
  delay: number = 1000,
): Promise<Pick<Response, 'ok' | 'status' | 'json'>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success response
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockData),
      })
    }, delay)
  })
}
