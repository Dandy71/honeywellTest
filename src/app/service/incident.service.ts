import { Injectable } from '@angular/core';
import { Incident } from '../model/incident';
import { testLocation } from '../model/testLocation';
import * as FakeApi from '../originFile/fake-api.js';

@Injectable()

export class IncidentService {

  locationMap = new Map<string,string>();

  constructor() {
    this.buildLocationMap();
    this.getIncidents();
  }

  // build the map for locationId => locationName
  async buildLocationMap(){
    const locationObjList = await FakeApi.default.getLocations() as testLocation[];
    for (let location of locationObjList){
      this.locationMap.set(location.id,location.name);
    }
  }

  // get all the Incidents, filter duplicate, sort by priority and then time.
  async getIncidents(){
    const locationObjList = await FakeApi.default.getLocations() as testLocation[];
    const locationKeyList = locationObjList.map(location=>location.id);
    const incidentObjSet = new Set<{}>();

    for(let locationKey of locationKeyList){
      const incidentObjList = await FakeApi.default.getIncidentsByLocationId(locationKey);
      for(let incidentObj of incidentObjList)
      {
        incidentObjSet.add(incidentObj);
      }    
    }

    let incidentList = [];
    incidentObjSet.forEach(incidentObj=>{
      incidentList.push(new Incident(incidentObj));
    })

    incidentList = incidentList.sort((a,b)=>{
      if(a.priority!==b.priority) return a.priority>b.priority?1:-1;
      else{
        return a.datetime>b.datetime?-1:1
      }
    });

    return incidentList;
  }
}