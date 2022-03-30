import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

@Input() name:string=""
@Input() position:string=""

@Input() description:string=""

@Input() image:string=""
  constructor() { }

  ngOnInit(): void {
    
  }

}

