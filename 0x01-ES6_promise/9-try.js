export default function guardrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
    if (result !== undefined) {
      queue.push(result);
    }
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
