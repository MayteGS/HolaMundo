import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public Mostrar: boolean = false;

  public Frase: any = {
    mensaje:'Si la vida te da limones aprende hacer limonda',
    autor:'El Simon'
  }

  public Pesonajes:string[]=['Spiderman','Venom','Dr.Octopus']

  constructor() { }

  ngOnInit() {
  }

  public MetodoCambiar (){
    this.Mostrar = !this.Mostrar
    // console.log(this.Mostrar);
    
  }

}
