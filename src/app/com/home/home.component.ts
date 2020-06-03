import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 获取子组件header的对象
  @ViewChild('myheader',{static:true}) myheader:any;
  title:string='首页标题';
  constructor() { }

  ngOnInit() {
  } 
  run(){
    alert('父组件的方法');
  }
  // 运行子组件header的方法
  getsun(){
    this.myheader.getfather();

  }
}
