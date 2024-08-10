import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, distinctUntilChanged } from "rxjs/operators";
import { IApiResponseCommonDto } from "../../models/result-message-dto";


export abstract class AseedCrudAbstractService<G = any, S = any, U = any, D = any> {
   protected _http: HttpClient;
   protected _url: string;

   constructor(http: HttpClient, url: string) {
      this._http = http;
      this._url = url;
   }

   get(...args: string[]): Observable<G> {
      let apiUrl = this._url;
         args.forEach(i =>{
            apiUrl = apiUrl + '/' + i;
         })
      return this._http.get<G>(apiUrl, { withCredentials: false });
   }

   create(request: any): Observable<IApiResponseCommonDto<S>> {
      let apiUrl = this._url;
      return this._http.post<IApiResponseCommonDto<S>>(apiUrl, request, { withCredentials: true }).pipe(
         map((response) => {
            if (!response.ok) {
               console.log("ERROR CREATE")
               return null;
            }
               return response;

         }),
         catchError(error => {
            console.log("ERROR CREATE : "+ error)
            throw error;
         }),
         distinctUntilChanged());
   }

   update(request: any): Observable<IApiResponseCommonDto<U>> {
      let apiUrl = this._url;
      return this._http.put<IApiResponseCommonDto<U>>(apiUrl, request, { withCredentials: true });
   }

   delete(request: any): Observable<IApiResponseCommonDto<D>> {
      let apiUrl = this._url;
      const options = {
         headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
         body: request,
         withCredentials: true
      };
      return this._http.delete<IApiResponseCommonDto<D>>(apiUrl, options);
   }
}