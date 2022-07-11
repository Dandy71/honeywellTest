import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../service/incident.service';

@Component({
  selector: 'incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  incidents;
  loadingIndicator = true;
  constructor(public incidentService:IncidentService) { }

  async ngOnInit(): Promise<void> {
    this.incidents = await this.incidentService.getIncidents();
    this.loadingIndicator = false;
  }

}
