import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;
  constructor(private spotifyService: SpotifyService) {}

  search(text: string) {
    this.loading = true;
    this.spotifyService.getArtists(text).subscribe((res: any) => {
      this.artists = res;
    });
    this.loading = false;
  }
}
