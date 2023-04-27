// Create and export a WeakMap to store the query count for each endpoint
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is a valid object
  if (!endpoint || typeof endpoint !== 'object' || !('protocol' in endpoint) || !('name' in endpoint)) {
    throw new Error('Invalid endpoint');
  }

  // Get the current query count for the endpoint from the weakMap and increment it
  let queryCount = weakMap.get(endpoint) || 0;
  queryCount += 1;

  // Update the query count in the weakMap
  weakMap.set(endpoint, queryCount);

  // Check if the query count is >= 5
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return queryCount;
}
