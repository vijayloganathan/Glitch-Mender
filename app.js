const firebaseConfig = {
    apiKey: "AIzaSyAfzl1U5HB47BXc20gAQZ3MhZvjN6fHCx8",
    authDomain: "chatbot-ac7f1.firebaseapp.com",
    projectId: "chatbot-ac7f1",
    storageBucket: "chatbot-ac7f1.appspot.com",
    messagingSenderId: "109416988938",
    appId: "1:109416988938:web:cb1c1d19d0a0aa7e333af3",
    measurementId: "G-Y33ZB834CX"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

//loginform navagate
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//loginform navagate complete

const userDetails = id => {
  window.localStorage.setItem('currently_loggedIn',id)
  const docRef = db.collection('users').doc(id)
  docRef.get().then(doc => {
      const user = `${doc.data().userName}`
      const email = `${doc.data().email}`
      window.localStorage.setItem('username',user)
      if(email=="admin@gmail.com")
      {
        window.location.href = 'admin.html'
      }
      else{
        window.location.href = 'chat.html'
      }
      
        
  }).catch(err => {
      console.log(`Error getting document : ${err}`)
  })
}

const loginForm = document.querySelector('#loginForm')

const signupbtn = document.querySelector('#signupbtn')
const login_submit = document.querySelector('#login_submit')
const forgotpwd = document.querySelector('#forgotpwd')



window.onload = () => {
  try{
      const currentUser = window.localStorage.getItem('currently_loggedIn')
      console.log(currentUser)
      if(currentUser == null){
          throw new Error('No Current User')
      } else {
         
          window.location.href = 'chat.html'
      }

      
  }catch(err){

    if (navigator.onLine) {
        document.querySelector('.nonet').style.display='none'
        loginForm.style.display = 'block'
      } else {

             document.querySelector('.nonet').style.display='block'
      }
      
  }

  
}

signupbtn.addEventListener('click' , event => {
  event.preventDefault()
  signupbtn.style.display = 'none'
  document.querySelectorAll('#loader')[0].style.display = 'block'
  const userName = document.querySelector('#username').value 
  const email = document.querySelector('#useremail').value 
  const password = document.querySelector('#userpassword').value 
  auth.createUserWithEmailAndPassword(email,password).then(cred => {
    swal({
        title : 'Account Created Successfully',
        icon : 'success'
    }).then(() => {
        db.collection('users').doc(cred.user.uid).set({
            userName : userName,
            email : email
        }).then(() => {
        signupbtn.style.display = 'block'
        document.querySelectorAll('#loader')[0].style.display = 'none'
        document.querySelector('#signup').reset()
        container.classList.remove("right-panel-active");
    }).catch(err => {
        swal({
            title : err,
            icon : 'error'
        }).then(() => {
            signupbtn.style.display = 'block'
            document.querySelectorAll('#loader')[0].style.display = 'none'
        })
    })
})
}).catch(err => {
  swal({
    title: err,
    icon: 'error'
  }).then(() => {
    signupbtn.style.display = 'block'
    document.querySelectorAll('#loader')[0].style.display = 'none'
})
})
})

forgotpwd.addEventListener('click' , () => {
  swal({
      title : 'Reset Password',
      content : {
          element : 'input',
          attributes : {
              placeholder : 'Type your Email',
              type : 'email'
          }
      }
  }).then(val => {
      auth.sendPasswordResetEmail(val).then(() => {
          swal({
              title : 'Check Your Email',
              icon : 'success'
          })
      }).catch(err => {
          swal({
              title : err,
              icon : 'error'
          })
      })
  })
})

login_submit.addEventListener('click' , event => {
  event.preventDefault()
  login_submit.style.display = 'none'
  document.querySelectorAll('#loader')[1].style.display = 'block'
  const email = document.querySelector('#useremail1').value 
  const password = document.querySelector('#userpassword1').value 
  auth.signInWithEmailAndPassword(email,password).then(cred => {

          login_submit.style.display = 'block'
          document.querySelectorAll('#loader')[1].style.display = 'none'
          document.querySelector('#login').reset()
          userDetails(cred.user.uid)
      
  }).catch(err => {
      swal({
          title : err ,
          icon :'error'
      }).then(() => {
          login_submit.style.display = 'block'
          document.querySelectorAll('#loader')[1].style.display = 'none'
      })
  })
})