export class GlobalUtils {

  static isValid (value: any): boolean {
     return value !== null && value !== undefined && value !== -1 && value !== ''
  }
}
