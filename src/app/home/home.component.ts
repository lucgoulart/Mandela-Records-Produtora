import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isOpen = false;

  ngOnInit(): void {

  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

   closeSidebar() {
    this.isOpen = false;
  }
  scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
