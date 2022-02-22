const search = () =>{
    const searchbox = document.getElementById("search-user").value.toUpperCase();
    const userprofiles = document.getElementById("profile-list");
    const user = document.querySelectorAll(".profilebtn");
    const uname = userprofiles.getElementsByTagName("h2");
    const wname = userprofiles.getElementsByTagName("h3");

    for(var i=0; i<uname.length; i++){
        let match = user[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                user[i].style.display = "";
            }else{
                user[i].style.display = "none";
            }
        }
    }
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
