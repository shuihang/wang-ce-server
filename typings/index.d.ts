import 'egg';
import { Application } from 'egg';

declare module 'egg' {
  interface Application{
    mysql:any
  }
}
