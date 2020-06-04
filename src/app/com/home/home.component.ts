import { Component, OnInit, ViewChild } from '@angular/core';
import {SerService} from '../../ser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 获取子组件header的对象
  @ViewChild('myheader',{static:true}) myheader:any;
  title:string='首页标题';
  constructor(public ser:SerService) { }

  ngOnInit() {
  } 
  run(){
    alert('父组件的方法');
  }
  // 运行子组件header的方法
  getsun(){
    this.myheader.getfather();

  }
  openrun(e){
    alert(e);
  }
  setser(){
    this.ser.set('我是父组件传的值');
  }

}
