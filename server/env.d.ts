declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      MONGO_URI: string;
      // Add more environment variables if needed
    }
  }
}

