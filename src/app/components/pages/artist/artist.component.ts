import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
  artist: any;
  topTracks: any[] = [];
  artistId: string;
  loading: boolean = false;
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.artistId = params['id'];
    });
    this.getArtist();
    this.getTopTracks();
  }
  getArtist() {
    this.spotifyService.getArtist(this.artistId).subscribe((data) => {
      this.artist = data;
      this.loading = false;
    });
  }
  getTopTracks() {
    this.spotifyService.getArtistTopTracks(this.artistId).subscribe((data) => {
      this.topTracks = data;
      console.log(data);
      this.loading = false;
    });
  }
}
