import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas-popup',
  templateUrl: './offcanvas-popup.component.html',
  styleUrls: ['./offcanvas-popup.component.css']
})
export class OffcanvasPopupComponent {
  showPopup = false;  
  progress = 0;  
  intervalId: any;  

  
  startMigration() {
    this.showPopup = true;
    this.progress = 0;
    
    this.intervalId = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(this.intervalId);  
        this.showPopup = false;  
        alert('Migration process has been completed!');
      }
    }, 1000); 
  }

  
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}

