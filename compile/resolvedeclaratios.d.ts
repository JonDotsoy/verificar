
declare global {
  namespace NodeJS {
    interface Global {
      React: typeof import('react');
    }
  }
}
