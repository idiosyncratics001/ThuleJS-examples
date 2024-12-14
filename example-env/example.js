import env from 'thulejs-env';
import myModule from './mymodule.js'

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 


const options = {
    file: '.env',
    path: __dirname,
    strict: true,
    checkIn: true,
    processEnv: false,
    global: false,
    intrinsics: false
}
const loadEnv = new env(options);

console.log(env.meta);  //cannot be accessed | private
console.log(env.env);   //cannot be accessed | private
console.log('getEnv from example.js', env.getEnv())

//cannot be altered after checked in

myModule()
console.log(env.getEnv().NODE_TZ)
console.log(env.getEnv().NODE_TZ)