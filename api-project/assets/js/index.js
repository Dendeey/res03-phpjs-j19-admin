import { userToDisplayById } from './modules/user.js';
import { allUsersToDisplay } from './modules/users.js';

window.addEventListener("DOMContentLoaded", function(){  
  
    if(window.location.href === "https://davidsim.sites.3wa.io/js/res03-phpjs-j19-admin/api-project/users.html"){
        
        allUsersToDisplay();
    }
    
    else if(window.location.href === "https://davidsim.sites.3wa.io/js/res03-phpjs-j19-admin/api-project/user.html"){
        
        userToDisplayById();
    }
    
  
});