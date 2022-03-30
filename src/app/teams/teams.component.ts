import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  data:teamInfo[]=[]
  constructor() { }

  ngOnInit(): void {
    fetch('https://ancient-stream-88099.herokuapp.com/')
    .then(response=>response.json())
    .then(json=>{
      json.forEach((x:any) => {
        let t=new teamInfo
          t.name=x.name;
          t.position=x.position;
          t.description=x.description;
          t.image=x.image;
          this.data.push(t);
        
      });
    })
    console.log(this.data);
  }


}

class teamInfo{
  name:string=""
  position: string=""
  description:string=""
  image:string=""
}
