import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() event= new EventEmitter();

  isDark=true;
  fun()
  {
    if(this.isDark) this.isDark=false;
    else this.isDark=true;
    this.event.emit(this.isDark);
  }
}
