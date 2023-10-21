import { Component, OnInit } from '@angular/core';
import { Observable, Observer, map, of, startWith } from 'rxjs';
import { AppState } from './interface/app-state';
import { CustomResponse } from './interface/custom-response';
import { ServerService } from './service/server.service';
import { DataState } from './enum/deta-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appState$: Observable<AppState<CustomResponse>>;

  constructor(private serverService: ServerService){}

  ngOnInit(): void {
    this.appState$ = this.serverService.server$.pipe(map(Response =>{
      return {dataState : DataState.LOADED_STATE, appData: Response}
    } ),
    startWith({dataState : DataState.LOADED_STATE}),
    cachesError((error : string )=> {
         return of({DataState: DataState.ERROR_STATE, error})
    
  })
    );
}
}
function cachesError(arg0: (error: string) => any): import("rxjs").OperatorFunction<{ dataState: DataState; appData: CustomResponse; } | { dataState: DataState; }, AppState<CustomResponse>> {
  throw new Error('Function not implemented.');
}

