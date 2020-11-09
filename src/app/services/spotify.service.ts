import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getQuery(query: string) {
    const url = environment.spotifyUrl + query;
    const headers = new HttpHeaders({
      authorization: environment.spotifyHeader,
    });

    return this.http.get(url, { headers });
  }

  public getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }
  public getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  public getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  public getArtistTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`).pipe(
      map((data) => {
        return data['tracks'];
      })
    );
  }
}
