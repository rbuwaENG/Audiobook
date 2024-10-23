import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  audiobooks: any[] = [];

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audiobooks = this.audioService.getAudiobooks();
  }

  playAudiobook(url: string): void {
    this.audioService.playAudio(url);
  }
}
