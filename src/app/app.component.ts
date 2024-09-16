import { Component,viewChild  } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prec5-condition';
  fruits=['apple','banana', 'orange'];
  product:any[]=[];
  constructor()
  {
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>
    {
      this.product=data;
      console.log(this.product);
    })
  }

  isActive=false;
  ngAfterViewInit(): void {
    console.log(this.isActive);
  }
  
  getData(data:any)
  {
    this.isActive=data;
  }
  
}
