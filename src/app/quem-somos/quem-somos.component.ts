import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent implements OnInit {
    @ViewChild('quemSomosSection', { static: true }) sectionRef!: ElementRef;

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
  }
