import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SerService} from '../../ser.service';
// 引入事件驱动EventEmitter
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
  // 声明事件驱动EventEmitter
  @Output() private outer = new EventEmitter();
  constructor(public ser:SerService) { }

  ngOnInit() {
    

  }
  getrun() {
    this.run();
  }
  gethome() {
    this.home.run();
  }
  getfather() {
    alert('我是子组件的方法');
  }
  open() {
    this.outer.emit('子组件广播的数据');
  }
  getser(){
    alert(this.ser.get());
  }
  
}
