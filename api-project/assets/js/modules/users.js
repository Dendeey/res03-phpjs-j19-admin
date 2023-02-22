function allUsersToDisplay()
{
    fetch('https://davidsim.sites.3wa.io/php/res03-php-j19-api/api-project/users')
        .then(response => response.json())
        .then(data => 
        {
            console.log(data);
           
           for(let i = 0; i > data.length; i++)
           {
                let Id = data[i].id;
                let Username = data[i].username;
                let Firstname = data[i].firstName;
                let Lastname = data[i].lastName;
                let Email = data[i].email;
               
                let tbody  = document.getElementById("list-users");
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");
                let td6 = document.createElement("td");
                
                let checkUserBtn = document.createElement("button");
                let editUserBtn = document.createElement("button");
                let deleteUserBtn = document.createElement("button");
                
                tbody.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                td6.appendChild(checkUserBtn);
                td6.appendChild(editUserBtn);
                td6.appendChild(deleteUserBtn);
                
                td1.textContent = Id;
                td2.textContent = Username;
                td3.textContent = Firstname;
                td4.textContent = Lastname;
                td5.textContent = Email;
                checkUserBtn.textContent = "Voir";
                editUserBtn.textContent = "Modifier";
                deleteUserBtn.textContent = "Supprimer";
                
                checkUserBtn.setAttribute("id", Id);
                checkUserBtn.classList.add("user");
                editUserBtn.setAttribute("id", Id);
                editUserBtn.classList.add("update");
                deleteUserBtn.setAttribute("id", Id);
                deleteUserBtn.classList.add("delete");
                
                let CheckBtn = document.querySelectorAll(".user");
                let EditBtn = document.querySelectorAll(".update");
                let DeleteBtn = document.querySelectorAll(".delete");
                
            
                
           }
            
        });
}

export { allUsersToDisplay };