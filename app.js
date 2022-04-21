console.log('hello world');

const cateogaries = document.querySelector('.cateogaries');
const dropdowns = document.querySelectorAll('.dropdown');
const menubtn = document.querySelector('.menubtn');
dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener('click',(e)=>{
        const dropparent = e.currentTarget.parentElement;
        dropparent.classList.toggle('active-drop')
    })
})
menubtn.addEventListener('click',function(){
cateogaries.classList.toggle('active-cateogary');
menubtn.classList.toggle('active-menu');
})
const userDrop = document.querySelector('.userDrop');
const logutdropdown = document.querySelector('.logout-dropdown');
userDrop.addEventListener('click',function(){
    logutdropdown.classList.toggle('active-logout-dropdown')
})

// profile dashboard functioning

const userInfoBtn = document.getElementById('userinfobtn');
const profileDashboardBtn = document.getElementById('profiledashboardbtn');
const profiledetailscotnainer = document.querySelector('.profile-details');
userInfoBtn.addEventListener('click',function(){
profiledetailscotnainer.innerHTML = `<div class="user-info">
<h1>Update your details here</h1>
<div class="user-info-section">
    <div class="user-detail-box">
        <p>Name</p>
        <input id='username' type="text">
    </div>
    <div class="user-detail-box">
        <p>Email</p>
        <input id='useremail' type="email">
    </div>
    <div class="user-detail-box">
        <p>Mobile</p>
        <input id='usermobile' type="number">
    </div>
    <div class="user-detail-box">
        <p>City</p>
        <input id='usercity' type="text">
    </div>
    <div class="user-detail-box">
        <p>Adress</p>
        <textarea name="useraddress" id="useraddress" cols="40" rows="2"></textarea>
    </div>
</div>
<button id="usrinfoupdatebtn">Update</button>
</div>`;
})

profileDashboardBtn.addEventListener('click',function(){
    profiledetailscotnainer.innerHTML = `<div class="profile-details">
    <div class="dashboard">
        <figure>
            <div class="figure-image">
                <img src="../images/user.jpg" alt="easter user image">
                <i class="fa-solid fa-pencil"></i>
            </div>
            <figcaption>
                <h2>Mrs Abraham</h2>
                <p>New Delhi</p>
            </figcaption>
        </figure>
        <div class="dashboard-details">
            <div class="details-box">
                <p>Name <i class="fa-solid fa-arrow-right-long"></i> </p>
                <p>Mrs Abraham</p>
            </div>
            <div class="details-box">
                <p>Address <i class="fa-solid fa-arrow-right-long"></i> </p>
                <address>H.no - 987, New Delhi - 110037 </address>
            </div>
            <div class="details-box">
                <p>Phone <i class="fa-solid fa-arrow-right-long"></i> </p>
                <p>8447377952</p>
            </div>
            <div class="details-box">
                <p>Email <i class="fa-solid fa-arrow-right-long"></i> </p>
                <p>ShivamAbraham@gmail.com</p>
            </div>
        </div>
    </div>`;
})

const updateBtn = document.getElementById('usrinfoupdatebtn');
const name =  document.getElementById('username');
const useremail =  document.getElementById('useremail')
const usermobile =  document.getElementById('usermobile')
const usercity =  document.getElementById('usercity')
const useraddress =  document.getElementById('useraddress')
