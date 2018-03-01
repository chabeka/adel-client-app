import { Injectable } from '@angular/core';


export abstract class Logger{
  info: any;
  war:any;
  error:any;
}
@Injectable()
export class LoggerService implements Logger {
  info: any;
  war: any;
  error: any;

  constructor() { }
  
  invokeConsoleMethod(type:string, args?: any): void {
    
  }

}
