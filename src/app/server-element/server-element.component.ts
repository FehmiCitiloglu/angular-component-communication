import { ContentChild, ElementRef } from '@angular/core';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // None, ShadowDom
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };

  @Input() name: string;

  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log("this.heading", this.heading?.nativeElement?.textContent)
    console.log('Text Content of paragraph: ', this.paragraph?.nativeElement?.textContent);

  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called!");
    console.log('Text Content of paragraph: ', this.paragraph?.nativeElement?.textContent);
  }

  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
      console.log("ngAfterViewInit Called!");
    console.log("this.heading", this.heading?.nativeElement?.textContent)

  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy called");

  }
}
