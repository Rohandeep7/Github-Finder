const github=new Github;
const ui=new UI;

const searchUser=document.getElementById("userip");

searchUser.addEventListener('keyup',(e)=>{
  const userText=e.target.value;
  if(userText!==''){
        github.getUser(userText).then(data=>{
        if(data.profile.message==="Not Found"){
              ui.showAlert('User Not Found','alert alert-danger')
        }
        else{
            ui.showUser(data.profile,data.repos)
           // ui.showRepos(data.repos)
        }
      })
  }
  else{
    ui.clearProfile();
  }
})
/*
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});*/
