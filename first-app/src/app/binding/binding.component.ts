import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  img3="https://th.bing.com/th/id/OIP.X8KU3mfmKx2t8wS2lDxYbAHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"
  img2="https://th.bing.com/th/id/OIP.f4oPI9Wp2uHwlkOHDeJengHaHa?w=217&h=216&c=7&r=0&o=5&pid=1.7"
  username=""
  email=""
  change(){
    this.img2="https://th.bing.com/th/id/OIP.ezPrAxmm3mfig8blBwCadgHaGM?w=253&h=211&c=7&r=0&o=5&pid=1.7"
    this.img3="https://th.bing.com/th/id/OIP.6dDPY2rsrWxJ1A5eS2joLAHaHa?w=210&h=211&c=7&r=0&o=5&pid=1.7"
  }
  ngOnInit(): void {
  }

}
