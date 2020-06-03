import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // 获得父组件的函数对象
  @Input() title: string;
  // 获得父组件的组件对象
  @Input() home: any;
  // 获得父组件的方法对象
  @Input() run: any;
  constructor() { }

  ngOnInit() {
   
    
  }
  getrun(){
    this.run();
  }
  gethome(){
    this.home.run();
  }
  getfather(){
    alert('我是子组件的方法');
  }
}
