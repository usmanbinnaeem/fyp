declare module 'nexmo' {
  class Nexmo {
    constructor(credentials: { apiKey: string; apiSecret: string });

    verify: {
      request: (
        params: { number: string; brand: string; code_length: number },
        callback: (error: any, result: any) => void,
      ) => void;
      check: (
        params: { request_id: string; code: string },
        callback: (error: any, result: any) => void,
      ) => void;
    };

    // Add other methods and properties as needed.
  }

  export = Nexmo;
}
