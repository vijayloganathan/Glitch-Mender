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
const database = firebase.database()

const ndata = document.querySelector('#ndata')
const inbox = document.querySelector('#inbox')
const logout = document.querySelector('#logout')
const datainsert = document.querySelector('.datainsert')
const inboxmsg = document.querySelector('.inbox')

window.onload = function() {
    var list = document.getElementById("inmsg");

    db.collection("feedback").onSnapshot((querySnapshot) => {
        const feedback = [];
        querySnapshot.forEach(doc => {
            feedback.push(doc.data());
        });

        feedback.forEach(element => {
            
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var node1 = document.createTextNode(element.userName);
            var td2 = document.createElement("td");
            var node2 = document.createTextNode(element.date);
            var td3 = document.createElement("td");
            var node3 = document.createTextNode(element.errortype);
            var td4 = document.createElement("td");
            var node4 = document.createTextNode(element.errorline);
            var td5 = document.createElement("td");
            var node5 = document.createElement("a");
            node5.innerHTML = "Download Image";
          //s var node51 = document.createTextNode("donload image")
            let imagelink=(element.imagename);
            
            db.collection("image").doc(imagelink).get().then(function(doc) {
                if (doc.exists) {
                    var imageUrl = doc.data().data;

                   

                    node5.setAttribute("download", "image.jpg");
                    node5.href = imageUrl;
                }
                else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            td1.appendChild(node1);
            td2.appendChild(node2);
            td3.appendChild(node3);
            td4.appendChild(node4);
           // node5.appendChild(node51);
            td5.appendChild(node5);
           
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
           
            list.appendChild(tr);
            
           

        })
       

    })
}
inbox.addEventListener('click' , event => {
    location.reload();
    datainsert.style.display='none'
    inboxmsg.style.display='block'
    
})

ndata.addEventListener('click' , event => {
    inboxmsg.style.display='none'
    datainsert.style.display='block'
})

logout.addEventListener('click' , event => {
    auth.signOut().then(() => {
        window.localStorage.removeItem('currently_loggedIn')
        window.location.href = 'index.html'

    }).catch(() => {
        console.log('Error Occurred While Sign Out')
    })

})

const ndatasubmit = document.querySelector('#ndatasubmit')
ndatasubmit.addEventListener('click' , event => {
    event.preventDefault()
    ndatasubmit.style.display='none';
    const syntyp = document.querySelector('#syntyp').value.toLowerCase();
    const k1 =document.querySelector('#k1').value.toLowerCase();
    const k2=document.querySelector('#k2').value;

    if(syntyp=="syntaxerror")
    {
        let length=""
        const dbRef = firebase.database().ref();
        dbRef.child("error").child(syntyp).child(k1).child("len").get().then((snapshot) => { 
            if (snapshot.exists()) {
                let sydat = snapshot.val();
                length=sydat.v+1;
            }
        }).then(()=>{
            database.ref("error").child(syntyp).child(k1).child(length).set({
                v:k2
            }).then(()=>{
                database.ref("error").child(syntyp).child(k1).child("len").set({
                    v:length
                }).then(()=>{
                    swal({
                        title : "Data Added Successfully",
                        icon : 'success'
                    })
                })
                document.querySelector('#datafeed').reset()
                ndatasubmit.style.display='block';
            })
        })
        
    
    }
    else
    {
        database.ref("error").child(syntyp).set({
            v:k1
        }).then(()=>{
            swal({
                title : "Data Added Successfully",
                icon : 'success'
            })
            document.querySelector('#datafeed').reset()
            ndatasubmit.style.display='block';
        })
    }

})