import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
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
   artistas = [
    {
      nome: 'DJ GRANETTE',
      imagem: 'assets/mandela-imgs/granette.png',
      instagram: '@DJGRANETTE'
    },
    {
      nome: 'DJ GD BEATS',
      imagem: 'assets/mandela-imgs/dj gd beats.png',
      instagram: '@DJGDBEATS'
    },
    {
    nome: 'MC MENOR PL',
    imagem: 'assets/mandela-imgs/menorpl-foto.JPG',
    instagram: '@MCMENORPLOFICIAL'
  },
    {
      nome: 'DJ CRT ZS',
      imagem: 'assets/mandela-imgs/dj crt zs.png',
      instagram: '@DJ_CRTZS'
    },
     {
      nome: 'DJ DAN ZS',
      imagem: 'assets/mandela-imgs/dj dan zs.png',
      instagram: '@DJDANZSOFICIAL'
    },
  ];

}



