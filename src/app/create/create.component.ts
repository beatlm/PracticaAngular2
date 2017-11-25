import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
nombreField;
descripcionField;
valoracionField;

   
  onSubmit(form) {
    console.log(form);
  }
  ngOnInit() {
  }

}
