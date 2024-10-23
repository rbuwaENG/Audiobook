import { Component } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  constructor(private audioService: AudioService) {}

  play() {
    this.audioService.playAudio('https://drive.google.com/file/d/1zvDl6hcuFypk8JEkDT1UVRLNMsNmt9kl/view?usp=sharing');
  }

  pause() {
    this.audioService.pauseAudio();
  }

  stop() {
    this.audioService.stopAudio();
  }
}
