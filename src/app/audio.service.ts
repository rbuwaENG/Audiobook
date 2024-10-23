import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audiobooks = [
    { title: 'Book 1', url: 'https://drive.google.com/file/d/1zvDl6hcuFypk8JEkDT1UVRLNMsNmt9kl/view?usp=drive_link' },
    { title: 'Book 2', url: 'https://drive.google.com/file/d/1zvDl6hcuFypk8JEkDT1UVRLNMsNmt9kl/view?usp=drive_link' }
  ];

  private audio = new Audio();

  constructor() { }

  getAudiobooks() {
    return this.audiobooks;
  }

  playAudio(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
