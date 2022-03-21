class UI{
  constructor(){
    this.profile=document.getElementById('profile');
  }

  showUser(user,repos){
      this.profile.innerHTML=`
      <div class="container">
        <div class="column firstSub" >
            <img class="user-img" src="${user.avatar_url}" width="200" alt="">
            <h2 class="user-name">${user.name}</h2>
            <h6 style="font-family: 'Titillium Web', sans-serif;"><i class="fa fa-map-marker" aria-hidden="true"></i>&ensp;${user.location}</h6>
            <div class="row follow">
              <h5 class="col col-md-6 ">Followers <br> ${user.followers}</h5>
              <h5 class="col col-md-6 ">Following <br> ${user.following}</h5>
            </div>
            <div class="row repo">
              <h5 class="col col-md-6 ">Repos<br>${user.public_repos}</h5>
              <h5 class="col col-md-6 ">Gists<br>${user.public_gists}</h5>
            </div>
            <button type="button" class="btn btn-dark"><a href="${user.html_url}" style="text-decoration:none; color:white;" target="_blank">View Profile</a></button>
        </div>
        <div class="column secondSub" ></div>
        </div>
        `
        let output = `<h2>Latest Repos</h2>`;
        let i=1;
        repos.forEach(function(repo) {
          if(i%2===1){
            output+=`<div class="row repo-rows">
              <div class="col col-md-5 repos_list">
                <h5 class="repo-name"><a href="${repo.html_url}" style="text-decoration:none; " target="_blank">${repo.name}</a></h4>
                <span class="repo-info"><i class="fa fa-star-o" aria-hidden="true"></i> ${repo.stargazers_count}</span>
                <span class="repo-info"><i class="fa fa-eye" aria-hidden="true"></i> ${repo.watchers_count}</span>
                <span class="repo-info"><i class="fa fa-code-fork" aria-hidden="true"></i> ${repo.forks_count}</span>
              </div>`
          }
          else{
            output+=`<div class="col col-md-5 repos_list">
            <h5 class="repo-name"><a href="${repo.html_url}" style="text-decoration:none;" target="_blank">${repo.name}</a></h4>
            <span class="repo-info"><i class="fa fa-star-o" aria-hidden="true"></i> ${repo.stargazers_count}</span>
            <span class="repo-info"><i class="fa fa-eye" aria-hidden="true"></i> ${repo.watchers_count}</span>
            <span class="repo-info"><i class="fa fa-code-fork" aria-hidden="true"></i> ${repo.forks_count}</span>
            </div>
          </div>`
          }
          i+=1;
        })
        if(i%2===1){
          output+=`</div>`
        }
        document.querySelector('.secondSub').innerHTML=output;
  }



  showAlert(message,className){
    this.clearAlert()
    const div=document.createElement('div')
    div.className=className;
    div.appendChild(document.createTextNode(message))
    const container=document.querySelector(".searchContainer")
    const search=document.querySelector(".midcont")
    container.insertBefore(div,search)

    setTimeout(()=>{this.clearAlert()},3000);
  }

  clearAlert(){
    const currentAlert=document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove();
    }
  }


  clearProfile(){
    this.profile.innerHTML='';
  }
}/*
`<div class="head-card">
  <div class="card-first">
     <img src="${user.avatar_url}" alt="No Avatar"><br>
     <h2>${user.name}</h2>
      <p>${user.location}</p>

    <a href="${user.html_url}" class="btn">View Profile</a>

    <div class="follow">
    <div class="followers">
      <h4>Followers</h4>
      <h4>${user.followers}</h4>
    </div>
    <div class="following">
      <h4>Followers</h4>
      <h4>${user.following}</h4>
    </div>
    </div>

  </div>
  <div class="card-next">
  <div class="container">
  <div class="row">
    <div class="col col-lg-6">
      <span><b>Company &ensp;</b>${user.company}</span>
    </div>
    <div class="col col-lg-6">
      <span><b>Website &ensp;</b>${user.blog}</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-lg-6">
      <b>Public Repos &ensp;</b><span>${user.public_repos}</span>
    </div>
    <div class="col col-lg-6">
      <b>Public Gists &ensp;</b><span>${user.public_gists}</span>
    </div>
  </div>
  <div class="row">
    <div class="col col-lg-12 latest_repos">
        <h3>Latest Repos</h3>
    </div>
  </div>
  </div>

  </div>
</div>`;
*/


/*

showRepos(repos) {
  let output = '';

  repos.forEach(function(repo) {
    output +=
  });

  // Output repos
  document.getElementById('repos').innerHTML = output;
}

*/

/*
<div class="row follow">
  <h5 class="col col-md-6 ">Followers : ${user.followers}</h5>
  <h5 class="col col-md-6 ">Following : ${user.following}</h5>
</div>
<div class="row repo">
  <h5 class="col col-md-6 ">Repos : ${user.public_repos}</h5>
  <h5 class="col col-md-6 ">Gists : ${user.public_gists}</h5>
</div>*/
