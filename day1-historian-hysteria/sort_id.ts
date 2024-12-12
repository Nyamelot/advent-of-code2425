import * as readline from 'node:readline'
import * as fs from 'node:fs';
import process from 'node:process'

interface LowestId {
  lowest_number: number;
  position: number;
}

export class HystorianId {
  left_column: Array<number> = [];
  right_column: Array<number> = [];
  left_lowest_id: LowestId = {lowest_number: 0, position: 0};
  right_lowest_id: LowestId = {lowest_number: 0, position: 0};
  position_sums = 0;

  private readId(file_name: string) {
    let file_string;
    fs.readFile('inputs/' + file_name,'utf8',(err, file_data) => {
      if (err) {
        return console.error(err);
      }
      file_string = file_data.toString();
      const line_string:Array<string> = file_string.split('\n');
      for (const line of line_string) {
        const column_string: Array<string> = line.trim().split(/\s+/);
        this.left_column.push(Number(column_string[0]));
        this.right_column.push(Number(column_string[1]));
      }
    });
  }

  constructor() {
    let file_name: string = "";
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Input the name of the file you want to read: ", (file: string) => {
      file_name = file;
      rl.close();
      this.readId(file_name);
    });
    
  }

  private findLowestId(column: Array<number>): LowestId {
    let result: LowestId = {lowest_number: column[0], position: 0};
    for (let i = 0; i <= column.length;i++) {
      if (column[i] < result.lowest_number) {
        result.lowest_number = column[i];
        result.position = i;
      }
    }
    return result;
  }

  operate() {
    do {
      this.left_lowest_id = this.findLowestId(this.left_column);
      this.right_lowest_id = this.findLowestId(this.right_column);
      this.position_sums = 
        this.left_lowest_id.position 
        + this.right_lowest_id.position 
        + this.position_sums;
      this.left_column.splice(this.left_lowest_id.position, 1);
      this.right_column.splice(this.right_lowest_id.position, 1);
    } while(this.left_column.length === 0)
  }

}