import env from 'thulejs-env';

export default function myFunction() {
    console.log('single import in myModule.js', env.getMeta());
}