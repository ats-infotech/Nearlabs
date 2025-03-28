/**
 * @format
 * @flow
 */
 import axios, { Method } from 'axios';
 const qs = require('qs');
 import { isEmpty } from './function';
 
 export function handler(err: any, logOut: Function) {
   let error = err;
   console.log('🚀 ~ file: service.ts ~ line 11 ~ handler ~ error', error);
 
   if (err.response && err.response.data.hasOwnProperty('message')) {
     error = err.response.data;
   } else if (!err.hasOwnProperty('message')) {
     error = err.toJSON();
   }
   if ('errors' in error && !isEmpty(error.errors)) {
     if (Object.keys(error.errors)[0]) {
       if (Array.isArray(error.errors[Object.keys(error.errors)[0]])) {
         //showToast({ message: error.errors[Object.keys(error.errors)[0]][0] });
       }
     }
   } else {
    // showToast({ message: error.message });
   }
  //  error.message === 'Unauthenticated.' &&
  //    redirectToLogin('Tasks', translate('UNAUTHENTICATED'), logOut);
   return new Error(error.message);
 }
 export async function networkCall(
   path: string,
   type: Method,
   apiParams: object | string,
   headers: object,
   logOut?: Function,
 ): Promise<any> {
  debugger;
   try {
     const response = await axios({
       method: type,
       url: path,
       data: apiParams,
       maxRedirects: 0,
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         "X-Access-Token":"73dfb78c-4c17-44a5-85d7-2b0aa81080be",
       },
       paramsSerializer(params: object) {
         return qs.stringify(params, { arrayFormat: 'brackets' });
       },
     });
     debugger;
     console.log('TCL: response', response);
     return response;
   } catch (error: any) {
    debugger;
     if (error.toJSON().message === 'Network Error') {
       //showToast({ message: translate('NO_INTERNET_MSG') });
     }
     console.error('TCL: error', JSON.stringify(error));
     if (logOut && logOut !== null) throw handler(error, logOut);
     return error.response;
   }
   
 }

 