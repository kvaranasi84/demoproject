import { Component,OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})


export class ToasterComponent implements OnInit {
  message = 'DisplaySampleMessage';
  display = false
  linkToFeature = "http://localhost:4200/recieve"

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  ngOnInit(){
   
  }

  closeToast(){
    this.display=false
    var toastElement = document.getElementById("wizParDiv0");
		if (toastElement.style.display === "none") {
			toastElement.style.display = "block";
		} else {
			toastElement.style.display = "none";
		}
  }


}
