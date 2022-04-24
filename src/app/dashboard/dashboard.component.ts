import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toggleb: any
  toggleLive:any

  constructor() { }

  ngOnInit(): void {
  }

  //   function () {
  //     ('#sidebarCollapse').on('click', function () {
  //         ('#sidebar').toggleClass('active');
  //     });
  // }
  
  onToggle() {
    this.toggleb = this.toggleLive
    if (this.toggleb) {
      this.toggleLive=false
      return false
    } else {
      this.toggleLive=true
      return true
    }
    
  }
  // toggleb != toggleb
  // return true
}


