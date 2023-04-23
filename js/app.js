const tweets = document.querySelector('#userTweets')
const user8 = document.querySelector('#userInfo')

async function getUserData() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/8`);
    let user = await response.json()

    // console.log(user[0].name);


    let userInfo = `
    <div class="container">
        <div class="info1">

            <div class="part1">
                <ion-icon name="arrow-back-outline"></ion-icon>

                <div class="part11">
       
                    <h2>${user.name}  <img class="image1" src="/images/verified.jpg"> <img class="image2" src="/images/twitter brave.png"></h2>
                    <span>32.5k Tweets</span>
        
                </div>
                

                

                
            
            </div>

            <div class="part2">
                <img class="bg1"  src="/images/bg1.jpg" >
            </div>

            <div class="part3">
                <div class="profile">
                    
                    <div>
                        <img  width="10%" class="profileImg" src="/images/profileImg.jpg">
                         <div class="userName">
                             <h2>${user.name} <img class="image1" src="/images/verified.jpg"> <img class="image2" src="/images/twitter brave.png"> </h2>
                             <span>@${user.username}</span>
                                
         
                     </div>

                            
                        </div>
          
                    <div class="btnIcon">
                         <ion-icon class="icon1" name="ellipsis-horizontal-outline"></ion-icon>
                         <ion-icon class="icon2" name="mail-outline"></ion-icon>
                         <ion-icon class="icon3" name="notifications-circle-outline"></ion-icon>
                         <button>Following</button>
                    </div>
                    


                    
                    </div>
  
                
                </div>

                <div class="userInfor">
                    <span>Lead Dev Rel @${user.company.name}  Created @${user.company.name} | npx-create-web3-dapp | Developing: Pot | Helping devs break into web3</span>

                    <div class="links">
                        <div class="link1">
                            
                            <ion-icon class="ion1" name="briefcase-outline"></ion-icon>Science & Technology 
                            <ion-icon class="ion2" name="location"></ion-icon> <p>Ethereum</p> 
                            <ion-icon class="ion3" name="link"></ion-icon> <li class="L1">vitto.cc</li>  
                            
                            
                        </div>
                        <span class="span1"> <ion-icon name="calendar-number"></ion-icon> Joined August 2020</span>
                    
                    </div>
                
                </div>

                <div class="followersInfo">
                    <div class="following">
                        <h3>322</h3>
                        <p>Following</p>
                    
                    </div>

                    <div class="followers">
                        <h3>110.8k</h3>
                        <p>Followers</p>
                    
                    </div>
                
                </div>

                <div class="followedInfo">
                   <span> <img class="image3" src="/images/user4.png"> <img class="image4" src="/images/user2.png"> <img class="image5" width="20%"src="/images/user3.png"> <span class="followed">followed by langford kwabena, rohit || (emoji) and 29 others follow you</span> </span>
                   
                
                </div>
                
            
            </div>

            <div class="part4">
               <h4 class="posts">Tweets</h4>
               <h4>Replies</h4>
               <h4>Media</h4>
               <h4>Likes</h4>
            
            </div>
        
        </div>
    
    
    </div>
     

    `

    user8.innerHTML += userInfo
}

getUserData();


async function usertweets() {
    let response = await fetch(` https://jsonplaceholder.typicode.com/posts/8`)
    let post = await response.json()
        // console.log(tweets.body);



    let userTweet = `

    
    
    <div class="container">
        <ion-icon class="ion-icon" name="ellipsis-horizontal-circle-outline"></ion-icon>

       <div class="tweets">
       
                <div class="tweetsHeading">

                    <img class="profileImg2" src="/images/profileImg.jpg"/>
                    <div class="tweetContent">
                        <h4> Nicholas Runolfsdottir V  <img class="image11" src="/images/verified.jpg"> <img class="image12" src="/images/twitter brave.png"> 
                        <span class="handle" >@ Maxime_Nienow  .Mar 31</span> </h4>
                        <p>${post.body}</p> 
                    
                    </div>
                    
                    

                </div>    

         </div>    
    </div>
   
   `

    tweets.innerHTML += userTweet
}

usertweets();






// let userTweet = `
//  <div class="tweets">
//     <div class="mytweets">
//          <img src="./images/profile.png" height="100px" width="100px"/>
//     </div>
//     <div class="tweetContents">
//          <div class="tweetsHeading">

//              <div class="tweetsheading2">

//                 <h4> <ion-icon name="arrow-back-outline"></ion-icon>${userId8.title}</h4>
//             </div>
//             <div class="headingIcons">
//                 <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
//             </div>

//          </div>   
//     </div>
//     <div class="tweetscardcontenttext">

//         <p>${userId8.body}</p>


//     </div>

// </div>    
// </div>`