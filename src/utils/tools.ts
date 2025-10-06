


/**
 * Calls the given API function with only the valid fields from the payload.
 * - If both userId and program are valid, both are included (with all other fields).
 * - If only userId is valid, userId and all other fields are included.
 * - If only program is valid, program and all other fields are included.
 * - All other fields are always included.
 * - If neither userId nor program is valid, returns null.
 */
export async function safeApiCallForUserIdAndProgram<T, P extends { userId?: number | null; program?: string | null }>(
  apiFn: (payload: P) => Promise<T>,
  payload: P
): Promise<T | null> {
  const { userId, program, ...rest } = payload;
  const hasUserId = typeof userId === 'number';
  const hasProgram = typeof program === 'string' && program;

  if (hasUserId && hasProgram) {
    return apiFn({ ...(rest as P), userId, program } as P);
  }
  if (hasUserId) {
    return apiFn({ ...(rest as P), userId } as P);
  }
  if (hasProgram) {
    return apiFn({ ...(rest as P), program } as P);
  }
  return null;
}