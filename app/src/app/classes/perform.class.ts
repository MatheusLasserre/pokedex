import { catchError, Observable } from "rxjs";

export class Perform<T> {
    data: T | undefined;
    isLoading = false;
    hasError = false;
    private action$: Observable<T> | undefined;

    load(action$: Observable<T>):void {
        this.isLoading = true;
        this.hasError = false;
        this.action$ = action$;
        this.action$.pipe(
            catchError(() => {
                this.data = undefined;
                this.hasError = true;
                this.isLoading = false;
                return [];
            })
        ).subscribe((data: T) => {
            this.data = data;
            console.log('subscribe',data);
            this.isLoading = false;
            this.hasError = false;
        })
    }

}