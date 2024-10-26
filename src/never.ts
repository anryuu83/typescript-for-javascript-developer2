export {};

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

try {
  throwError('testError');
} catch (error) {
  console.log({ error });
}
