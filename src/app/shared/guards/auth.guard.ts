import { Token } from '@angular/compiler';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _Router =  inject(Router)
  let Token:any;

  // if(localStorage.getItem('etoken') !== null) {

  //   // _Router.navigate(['/guest']);

  //   return true ;


  // }else {

  //   _Router.navigate(['/login']);
  //   return false;

  // }

  // *******************************

  if(localStorage.getItem('etoken')!=null&&localStorage.getItem('Role')=='SuperUser'){
    return true;
  }else if(localStorage.getItem('etoken')!=null&&localStorage.getItem('Role')=='SuperUser'){
    _Router.navigate(['/home'])
    return false

  }
  else{
    _Router.navigate(['/login'])
    return false
  }


};
