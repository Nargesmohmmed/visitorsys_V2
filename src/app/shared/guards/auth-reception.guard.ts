import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authReceptionGuard: CanActivateFn = (route, state) => {

  const _Router =  inject(Router)


  const reception = localStorage.getItem('Role');
  console.log(reception);


  if(localStorage.getItem('etoken')!= null && reception == 'Reception'){
    // _Router.navigate(['/reception'])
    return true;

  }else{
    return false
  }

};
