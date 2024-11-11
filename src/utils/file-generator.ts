import * as fs from 'fs';
import * as path from 'path';

class FileGenerator {
  /**
   * Creates a new file with the given content at the specified path.
   * @param filePath The path where the file should be created.
   * @param content The content to be written to the file.
   */
  static createFile(filePath: string, content: string): void {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  }

  /**
   * Appends the given content to an existing file at the specified path.
   * If the file doesn't exist, it will be created.
   * @param filePath The path of the file to append to.
   * @param content The content to be appended to the file.
   */
  static appendToFile(filePath: string, content: string): void {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.appendFileSync(filePath, content);
  }

  /**
   * Reads the content of a file at the specified path.
   * @param filePath The path of the file to read.
   * @returns The content of the file as a string.
   */
  static readFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
  }

  /**
   * Deletes a file at the specified path.
   * @param filePath The path of the file to delete.
   */
  static deleteFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

export default FileGenerator;
