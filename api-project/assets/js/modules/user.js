function userToDisplayById(){
    
    fetch('https://davidsim.sites.3wa.io/php/res03-php-j19-api/api-project/user/${id}')
        .then(response => response.json())
        .then(data => 
        {
            console.log(data);
            
            let UserName = data.username;
            let FirstName = data.firstName;
            let LastName = data.lastName;
            let Email = data.email;
            
            let article = document.getElementById("infos-user");
            
            let h1 = document.createElement("h1");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            
            article.appendChild(h1);
            article.appendChild(h2);
            article.appendChild(h3);
            
            h1.textContent = UserName;
            h2.textContent = FirstName, LastName;
            h3.textContent = Email;
    
    });
}

export { userToDisplayById };