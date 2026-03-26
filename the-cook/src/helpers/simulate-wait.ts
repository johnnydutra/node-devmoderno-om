export async function simulateWait(milliseconds: number) {
  await new Promise(resolve => setTimeout(resolve, milliseconds));
}
