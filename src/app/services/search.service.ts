import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class SearchService {
    private _inputValue = new Rx.BehaviorSubject('');
    inputValue$ = this._inputValue.asObservable();

    updateSearch(search: string) {
        this._inputValue.next(search);
    }
}
