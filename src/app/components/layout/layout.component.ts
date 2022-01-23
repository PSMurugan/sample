import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  slidePosition = 0;
  imageList:Array<any> = [
    'img4','img5','img6'
  ]

  tabList:Array<any>=[
    'TAB ONE',
    'TAB TWO',
    'TAB THREE',
  ]
  tabChange(pos)
  {
    if(this.tabItemPostion!==pos)
    {
      this.tabItemPostion = pos;
       this.setActiveTabItem(pos)
    }
  }
  setTabContent(pos)
  {
  var content=  document.querySelectorAll('.tab-content')
  content[0]['childNodes'][0]['innerText'] = this.tabList[pos]

  }
  ngOnInit() {


  }
  tabItemPostion = 0;
  setActiveTabItem(pos)
  {
    var item = document.querySelectorAll('.dummy')
    for(let i=0;i<item.length;i++)
    {
      if(this.tabItemPostion == i)
      {
        item[i].classList.add('tabtitle-active')
      }
      else{
        item[i].classList.remove('tabtitle-active')
      }
    }
    this.  setTabContent(pos)
  }
  ngAfterViewInit()
  {
 //var x= document.querySelectorAll('.dp-none')


// this.sliderMove()
// this.setActiveTabItem(0)
  }
  sliderMove()
  {
    var x= document.querySelectorAll('.imgclass')
    for(let i=0;i<x.length;i++)
    {



       if(i==this.slidePosition)
       {
        x[i].classList.remove('dp-none')
        x[i].classList.add('dp-block')
       }
       else{
        x[i].classList.add('dp-none')
       }


    }
    this.sliderDot()
  }

  callSlider()
  {
    setInterval(()=>
    {
      if (this.slidePosition) {

      }
    },1000)
  }
  sliderDot()
  {
    var x= document.querySelectorAll('.dot')
    for(let i=0;i<x.length;i++)
    {



       if(i==this.slidePosition)
       {
       // x[i].classList.remove('dp-none')
        x[i].classList.add('active-dot')
       }
       else{
        x[i].classList.remove('active-dot')
        //  if(x[i].classList.has())
        //  {

        //  }

        //x[i].classList.remove('.active-dot')

       }


    }
  }
  slideButtonClick(parm)
  {
    // var x= document.querySelectorAll('.dot')
    // console.log(x);
  // console.log(x);
  if(parm==='prev')
  {
    if (this.slidePosition>0) {
      this.slidePosition = this.slidePosition - 1;
    }

  }
  else{
    if (this.slidePosition<2) {
      this.slidePosition = this.slidePosition + 1;
    }

  }
  this.sliderMove()

  }
  inputClose()
  {
    var x =document.querySelector('nav ul')
    x['style']['left']= '-100%'
  }
  inputCheck()
  {
   var x =document.querySelector('nav ul')
   x['style']['left']= '0px'

   console.log(x);

  }

}
