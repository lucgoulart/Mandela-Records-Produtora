import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
   @ViewChild('artistasSection', { static: true }) sectionRef!: ElementRef;

   animateTitle = false;

   constructor(private router: Router) {}

   ngOnInit(): void {
     this.router.events.pipe(
       filter(event => event instanceof NavigationEnd)
     ).subscribe(() => {
       this.triggerAnimation();
     });

     // Também dispara no primeiro carregamento
     this.triggerAnimation();
   }

   ngAfterViewInit(): void {
     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           this.triggerAnimation();
         }
       });
     }, { threshold: 0.5 }); // 50% da seção visível

     if (this.sectionRef?.nativeElement) {
       observer.observe(this.sectionRef.nativeElement);
     }
   }

   triggerAnimation(): void {
     this.animateTitle = false;
     setTimeout(() => {
       this.animateTitle = true;
     }, 100);
    }

  artistas = [
    {
      nome: 'DJ GRANETTE',
      imagemPB: 'assets/mandela-imgs/granette-pb.png',
      imagemColor: 'assets/mandela-imgs/granette.png',
      instagram: '@DJGRANETTE',
      hover: false
    },
    {
      nome: 'DJ GD BEATS',
      imagemPB: 'assets/mandela-imgs/gdbeats-pb.png',
      imagemColor: 'assets/mandela-imgs/dj gd beats.png',
      instagram: '@DJGDBEATS',
      hover: false
    },
      {
      nome: 'DJ MARINOVIC',
      imagemPB: 'assets/mandela-imgs/marinovic-pb.png',
      imagemColor: 'assets/mandela-imgs/dj-marinovic.png',
      instagram: '@DJMARINOVIC',
      hover: false
    },
    {
      nome: 'MC MENOR PL',
      imagemPB: 'assets/mandela-imgs/pedro-preto-branco.png',
      imagemColor: 'assets/mandela-imgs/mc menor pl.png',
      instagram: '@MCMENORPLOFICIAL',
      hover: false
    },
    {
      nome: 'DJ CRT ZS',
      imagemPB: 'assets/mandela-imgs/dj crt-pb.png',
      imagemColor: 'assets/mandela-imgs/dj crt zs.png',
      instagram: '@DJ_CRTZS',
      hover: false
    },
    {
      nome: 'DJ DAN ZS',
      imagemPB: 'assets/mandela-imgs/danzs-pb.jpg',
      imagemColor: 'assets/mandela-imgs/dj dan zs.png',
      instagram: '@DJDANZSOFICIAL',
      hover: false
    },
    {
      nome: 'DJ MARCONDES',
      imagemPB: 'assets/mandela-imgs/djmarcondes-pb.png',
      imagemColor: 'assets/mandela-imgs/dj marcondes.png',
      instagram: '@DJ_MARCONDES',
      hover: false
    },
  ];
}
