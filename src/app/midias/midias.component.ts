import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-midias',
  templateUrl: './midias.component.html',
  styleUrls: ['./midias.component.scss']
})
export class MidiasComponent implements OnInit {
    animateTitle = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.triggerAnimation();
    });

    // Também dispara no primeiro carregamento
    this.triggerAnimation();
  }

  triggerAnimation() {
    this.animateTitle = false;
    setTimeout(() => {
      this.animateTitle = true;
    }, 100);
  }
   videoIds = [
    'ZrY8hzdAKhU',
    '9MK-MuD2GKI',
    '5Ss0mERXRFA',
    '6qDxY8ChlNs',
    's99QshpxjF8',
    'HWVqP1CPxCs',
    'cWwckPR9bMI',
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videoIds.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videoIds.length) % this.videoIds.length;
  }

  get currentVideoUrl(): string {
    return `https://www.youtube.com/embed/${this.videoIds[this.currentIndex]}`;
  }
}


