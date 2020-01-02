export class CarConfig {
    private static path = 'http://localhost:3000';
    public static getPath(): string {
      return CarConfig.path;
    }
  }
