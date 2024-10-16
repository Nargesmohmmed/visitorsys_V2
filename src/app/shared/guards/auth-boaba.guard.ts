import { CanActivateFn } from '@angular/router';

export const authBoabaGuard: CanActivateFn = (route, state) => {

  const Boaba = localStorage.getItem('Role');
  console.log(Boaba);

  if(localStorage.getItem('etoken')!=null&& Boaba == 'Boaba'){
    return true;
  }else{
    return false
  }

};
