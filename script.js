function getProfile(e){
    e.preventDefault();
    var username = document.getElementById('username').value;
    if(!username || username == ''){
        username = 'DeadAnarch1st';
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);

            document.getElementById('profile').innerHTML = `<div class="card">
                                                                <div class="card">
                                                                    <h3 class="card-title">${user.name}</h3>
                                                                </div>
                                                                <div class="card-body">
                                                                    <div class="row>
                                                                        <div class="col-md-3">
                                                                            <img src="${user.avatar_url}">
                                                                        </div>
                                                                        <br>
                                                                        <div class="col-md-9">
                                                                            <span class="badge badge-primary">Public
                                                                             Repositories ${user.public_repos}</span>
                                                                             <span class="badge badge-success">Followers
                                                                              ${user.followers}</span>
                                                                            <ul class="list-group">
                                                                                <li class="list-group-item list-group-item-info">Website: ${user.blog}</li>
                                                                                <li class="list-group-item list-group-item-info">Email: ${user.email}</li>
                                                                            </ul>
                                                                            <br>
                                                                            <a class="btn btn-outline-dark" target="_blank" href="${user.html_url}">Visit on GitHub</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>`;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();
}

