import { Time } from "@angular/common";
import { Data } from "@angular/router";

export interface Guest {

  checked: boolean
  guestName: string

  GuestChecked: boolean


  pidNumber: string
  guestType: string


  Id: Int16Array
  GuestName: string
  adjectiveId: number
  hostId: Int16Array
  agencyId: Int16Array
  userId: Int16Array
  PidNumber: string
  GuestType: string
  dateIn: dateIn
  timeIn: timeIn

  DT : dateIn

  TimeOfDay : timeIn
  TimeIn: timeIn
  DateIn : dateIn

  // dateIn: dateIn
  // timeIn: timeIn


  HostName:string;
  AgencyName:string;
  Adjective:string;


}


export interface dateIn {
  yr: string
  mnth: string
  dy: string
}

export interface timeIn {
  houre: string
  minute: string
  second: string
}









// Id:Int16Array;
//   GuestName:string;
//   AdjectiveId:Int16Array;
//   hostId:Int16Array;
//   HostName:string;
//   AgencyId:Int16Array;
//   userId:Int16Array;
//   PidNumber:string;
//   guestType:string;
