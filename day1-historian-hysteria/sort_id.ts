import readline from 'node:readline'
import * as fs from 'node:fs';

interface LowestId {
  lowest_number: number;
  position: number;
}

class HystorianId {
  left_column: Array<number> = [];
  right_column: Array<number> = [];
  left_lowest_id: LowestId = {lowest_number: 0, position: 0};
  right_lowest_id: LowestId = {lowest_number: 0, position: 0};
  position_sums = 0;

  private readId(file_name: string) {
    
  }

  constructor() {
    let file_name: string = "";
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Input the name of the file you want to read", (file: string) => {
      file_name = file;
    });
    this.readId(file_name);
  }

}