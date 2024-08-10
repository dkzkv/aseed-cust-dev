export class Guid {
    private constructor(private guid: string) {}
  
    // Создает новый GUID
    public static newGuid(): Guid {
      return new Guid(this.generateGuid());
    }
  
    // Возвращает пустой GUID
    public static empty(): Guid {
      return new Guid('00000000-0000-0000-0000-000000000000');
    }
  
    // Проверяет, является ли строка допустимым GUID
    public static isValid(guid: string): boolean {
      const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      return guidRegex.test(guid);
    }
  
    // Возвращает строковое представление GUID
    public toString(): string {
      return this.guid;
    }
  
    // Приватный метод для генерации GUID
    private static generateGuid(): string {
      // В большинстве браузеров криптографическая случайность поддерживается через window.crypto
      const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      return template.replace(/[xy]/g, (char) => {
        const random = (window.crypto.getRandomValues(new Uint8Array(1))[0] % 16);
        const value = char === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
      });
    }
  }