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
    isMobileOrTablet = false;
   animateTitle = false;

   constructor(private router: Router) {}

ngOnInit(): void {
  this.checkScreenSize();

  // Atualiza quando a tela for redimensionada ou o celular for girado
  window.addEventListener('resize', () => this.checkScreenSize());

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.triggerAnimation();
    });

  this.triggerAnimation();
}

checkScreenSize(): void {
  this.isMobileOrTablet = window.innerWidth <= 1024;
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
      imagemPB: 'assets/mandela-imgs/granette peb.png',
      imagemColor: 'assets/mandela-imgs/granette colorida.png',
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
      imagemPB: 'assets/mandela-imgs/menorpl-pb.jpg',
      imagemColor: 'assets/mandela-imgs/menorpl-col.png',
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
      {
      nome: 'DJ MAGRIN PROD',
      imagemPB: 'assets/mandela-imgs/magrindj-pb.png',
      imagemColor: 'assets/mandela-imgs/magrindj-col.png',
      instagram: '@MAGRINPROD_',
      hover: false
    },
  ];
}
