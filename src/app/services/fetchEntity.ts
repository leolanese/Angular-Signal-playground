import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

export const fetchEntity = (): (() => Observable<any> 
) => {
  const http = inject(HttpClient);
  const route = inject(ActivatedRoute);
  const id = route.snapshot.paramMap.get('id');
  const apiUrl = 'http://localhost:3001/swagger-ui';

  return () => http.get(apiUrl).pipe(
    map(response => response),
    catchError(error => of(error))
  );
} 