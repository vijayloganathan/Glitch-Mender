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

let sound=1;
const mute =document.querySelector("#mute");
const unmute =document.querySelector("#unmute");
mute.addEventListener('click',event =>{
    unmute.style.display='block'
    mute.style.display='none'
    sound=1;
})

unmute.addEventListener('click',event =>{
    mute.style.display='block'
    unmute.style.display='none'
    sound=0;
   
})

let form=0;
const feedback =document.querySelector(".feedback");
const fform =document.querySelector(".wrapper");
const chatpage =document.querySelector(".msger");
    feedback.addEventListener('click',event =>{
        if(form==0)
        {   form=1;
            chatpage.style.display='none'
            fform.style.display='block'
        }
        else{
            form=0;
            fform.style.display='none'
            chatpage.style.display='block'
        }
       

    })



const fsubmit =document.querySelector("#fsubmit");
fsubmit.addEventListener('click',event =>{
   
    const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
    event.preventDefault();
    let fname=localStorage.getItem("username");
    let currentDate = `${day}-${month}-${year}`;
    let tablename = `${day}${month}${year}${hour}${min}${sec}`;
    const errortype = document.querySelector('#errortype').value;
    const proline = document.querySelector('#proline').value 
    var fileInput = document.getElementById("screenshot");
    var file = fileInput.files[0];
    db.collection('feedback').doc(tablename).set({
        userName : fname,
        errortype : errortype,
        date: currentDate,
        errorline:proline,
    }).then(() => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            var dataURL = reader.result;
            db.collection("image").add({
                name: "screenshot",
                data: dataURL
            }).then(function(docRef) {
                db.collection('feedback').doc(tablename).update({
                   imagename: docRef.id
                })
                console.log("Document written with ID: ", docRef.id);
              }).catch(function(error) {
                console.error("Error adding document: ", error);
              });
        }

    }).then(() => {
        document.querySelector('#feedbackform').reset()
   
        fform.style.display='none'
        chatpage.style.display='block'
        swal({
            title : "feedback submited successfully",
            icon : 'success'
        })
    }).catch(err => {
        swal({
            title : err,
            icon : 'error'
        })
    })
})

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hrs=date.getHours();
let min=date.getMinutes();
let currentDate = `${day}-${month}-${year}`;

document.getElementById("gettime").innerHTML = formatDate(new Date());


//navagate to another page
const bot = document.querySelector('#bot')
const complier = document.querySelector('#complier')
const logout = document.querySelector('#logout')

const chatbotpage = document.querySelector('.maincontent')
const pycompiler = document.querySelector('.coimpler')

complier.addEventListener('click' , event => {

    chatbotpage.style.display='none'
   
    pycompiler.style.display='block'

})

bot.addEventListener('click' , event => {
    pycompiler.style.display='none'
    chatbotpage.style.display='block'

})

logout.addEventListener('click' , event => {
    auth.signOut().then(() => {
        window.localStorage.removeItem('currently_loggedIn')
        window.location.href = 'index.html'

    }).catch(() => {
        console.log('Error Occurred While Sign Out')
    })

})

//navagate to another is completed here

//variable declaration
let errortypefind="";
let errortypefind1=""

//mic input
//document.getElementById("micbtn").onclick = function() { 
const micbtn = document.querySelector('#micbtn')  
    micbtn.addEventListener('click',event =>{
        micbtn.style.background='transparent'
    var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-US";
            recognition.onresult = function(event) {    
                document.getElementById('messtype').value = event.results[0][0].transcript;
              
               document.getElementById('sendbtn').click();
               
            }
           
            recognition.start();
           // micbtn.style.background='rgb(0, 196, 65)'
           setTimeout(() => {
            micbtn.style.background='rgb(0, 196, 65)'
        },3000)
})


//error reply
function errreplysend(errortypefind)
{
    if (errortypefind == "assertionerror"||errortypefind == "assertion") {
        const r = random(0, assertionerror.length - 1);
        const msgText = assertionerror[r];
        const msgText1 = assertionerror1[r];
        const delay = msgText.split(" ").length * 10; 
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
          
        }, delay);
    }
    
    else if (errortypefind == "attributeerror"||errortypefind == "attribute") {
        const r = random(0, assertionerror.length - 1);
        const msgText = attributeerror[r];
        const msgText1 = attributeerror1[r];
        const delay = msgText.split(" ").length * 10; 
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "floatingpointerror"||errortypefind == "floatingpoint") {
        const r = random(0, floatingpointerror.length - 1);
        const msgText = floatingpointerror[r];
        const msgText1 = floatingpointerror1[r];
        const delay = msgText.split(" ").length * 10; 
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    
    else if (errortypefind == "generatorexit"||errortypefind == "generator") {
        const r = random(0, generatorexit.length - 1);
        const msgText = generatorexit[r];
        const msgText1 = generatorexit1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "importerror"||errortypefind=="import") {
        const r = random(0, importerror.length - 1);
        const msgText = importerror[r];
        const msgText1 = importerror1[r];
        const delay = msgText.split(" ").length * 10; 
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "indexerror"||errortypefind=="index") {
        const r = random(0, indexerror.length - 1);
        const msgText = indexerror[r];
        const msgText1 = indexerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "keyerror"||errortypefind == "key") {
        const r = random(0, keyerror.length - 1);
        const msgText = keyerror[r];
        const msgText1 = keyerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "keyboardinterrupt") {
        const r = random(0, keyboardinterrupt.length - 1);
        const msgText = keyboardinterrupt[r];
        const msgText1 = keyboardinterrupt1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "memoryerror"||errortypefind == "memory") {
        const r = random(0, memoryerror.length - 1);
        const msgText = memoryerror[r];
        const msgText1 = memoryerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "nameerror"||errortypefind == "name") {
        const r = random(0, nameerror.length - 1);
        const msgText = nameerror[r];
        const msgText1 = nameerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "notimplementederror"||errortypefind == "notimplemented") {
        const r = random(0, notimplementederror.length - 1);
        const msgText = notimplementederror[r];
        const msgText1 = notimplementederror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    
    
    else if (errortypefind == "overflowerror"||errortypefind == "overflow") {
        const r = random(0, overflowerror.length - 1);
        const msgText = overflowerror[r];
        const msgText1 = overflowerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "referenceerror"||errortypefind == "reference") {
        const r = random(0, referenceerror.length - 1);
        const msgText = referenceerror[r];
        const msgText1 = referenceerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "runtimeerror"||errortypefind == "runtime") {
        const r = random(0, runtimeerror.length - 1);
        const msgText = runtimeerror[r];
        const msgText1 = runtimeerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "stopiteration"||errortypefind == "stop iteration") {
        const r = random(0, stopiteration.length - 1);
        const msgText = stopiteration[r];
        const msgText1 = stopiteration1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "syntaxerror"||errortypefind == "syntax") {
        const r = random(0, syntaxerror.length - 1);
        console.log(syntaxerror.length)
        console.log(r)
        const msgText = syntaxerror[r];
        const msgText1 = syntaxerror1[r];
        const delay = msgText.split(" ").length * 10; 
       setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "indentationerror"||errortypefind == "indentation") {
        const r = random(0, indentationerror.length - 1);
        const msgText = indentationerror[r];
        const msgText1 = indentationerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    
    else if (errortypefind == "systemexit") {
        const r = random(0, systemexit.length - 1);
        const msgText = systemexit[r];
        const msgText1 = systemexit1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "systemerror"||errortypefind == "system") {
        const r = random(0, systemerror.length - 1);
        const msgText = systemerror[r];
        const msgText1 = systemerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "typeerror"||errortypefind == "type") {
        const r = random(0, typeerror.length - 1);
        const msgText = typeerror[r];
        const msgText1 = typeerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "unboundlocalerror"||errortypefind == "unboundlocal") {
        const r = random(0, unboundlocalerror.length - 1);
        const msgText = unboundlocalerror[r];
        const msgText1 = unboundlocalerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "unicodeerror"||errortypefind == "unicode") {
        const r = random(0, unicodeerror.length - 1);
        const msgText = unicodeerror[r];
        const msgText1 = unicodeerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    else if (errortypefind == "unicodeencodeerror"||errortypefind == "unicodeencode") {
        const r = random(0, unicodeencodeerror.length - 1);
        const msgText = unicodeencodeerror[r];
        const msgText1 = unicodeencodeerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "unicodedecodeerror"||errortypefind == "unicodedecode") {
        const r = random(0, unicodedecodeerror.length - 1);
        const msgText = unicodedecodeerror[r];
        const msgText1 = unicodedecodeerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "unicodetranslateerror"||errortypefind == "unicodetranslate") {
        const r = random(0, unicodetranslateerror.length - 1);
        const msgText = unicodetranslateerror[r];
        const msgText1 = unicodetranslateerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "valueerror"||errortypefind == "value") {
        const r = random(0, valueerror.length - 1);
        const msgText = valueerror[r];
        const msgText1 = valueerror1[r];
        const delay = msgText.split(" ").length * 10;
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
    
    else if (errortypefind == "zerodivisionerror"||errortypefind == "zerodivision") {
        const r = random(0, zerodivisionerror.length - 1);
        const msgText = zerodivisionerror[r];
        const msgText1 = zerodivisionerror1[r];
        const delay = msgText.split(" ").length * 10; 
        speak(msgText);
        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
            speak(msgText1);
        }, delay);
    }
}

//message send is start here

const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const assertionerror = [
  "The condition given in the assert keyword should be true or else assertion error will occur. ^To solve this, check the condition given in the assert keyword and correct the condition. ^E.g.: ^x = 1^y = 0^assert y != 0, </br>\"Invalid Operation\" # denominator can't be 0^print(x / y) ^Error message: ^Traceback (most recent call last): ^File \"/home/bafc2f900d9791144fbf59f477cd4059.py\", line 4, in ^assert y!=0, \"Invalid Operation\" # denominator can't be 0^AssertionError: Invalid Operation^",
  "Assertion Error occurs when built-in “assert” statement is used and the condition being tested is False.The assert statement is used to ensure that the code is running correctly and to provide an error message if the code is not working as expected.^To solve this error make sure that the condition in the ‘assert’ statement is true.^Ex: ^def division(x,y): ^    assert y!=0^    return x/y; ^x = 10^y = 0^print(\"Division is:\",division(x,y)) ^Error message: ^Traceback (most recent call last): ^  File \"<string>\", line 6, in <module>^File \"<string>\", line 2, in division^AssertionError^",
  "The meaning of an AssertionError is that something happened that the developer thought was impossible to happen. So if an AssertionError is ever thrown, it is a clear sign of a programming error.^E.g.: ^x = 1^y = 0^assert y != 0, \"Invalid Operation\" # denominator can't be 0^print(x / y) ^Error message: ^Traceback (most recent call last): ^  File \"/home/bafc2f900d9791144fbf59f477cd4059.py\", line 4, in ^    assert y!=0, \"Invalid Operation\" # denominator can't be 0^AssertionError: Invalid Operation^",
  "The AssertionError is raised when an ‘assert’ statement fails. If the condition is false in assert statement, it raises on ‘AssertionError’. ^ To overcome this error^ 1. Use ‘try-except’ block:^ Eg:^ try:^ assert 1+1==3, “1+1 should equal 2”^ except AssertionError as e:^ print(f”An error occurred :{e}”)^ 2. Try to fix the condition:^ Eg:^ The way to overcome an ‘AssertionError’ is to modify the condition in the ‘assert’ statement so that it is ‘True’.^ Eg: assert 1+1==3, “1+1 should equal 2”^ Error message: AssertError: 1+1 should equal 2^"
  ]
  
  const attributeerror = [
  "This error occurs when a variable or method name is misspelled or when a program is trying to access the attribute of an object that does not have that attribute. ^To solve this error, check the variable or method name used in your program. ^E.g.: ^X = 10^X.append(6) ^Error message: ^Traceback (most recent call last): ^File \"/home/46576cfdd7cb1db75480a8653e2115cc.py\", line 5, in ^X.append(6) ^AttributeError: 'int' object has no attribute 'append'^",
  "Attribute error occurs when an object does not have a specific attribute or method that is being called.^To solve this error checks the spell of the attribute/method and actually exists on the object.^Ex:For example, if you have a class called \"Person\" with an attribute called \"name\", and you try to access an attribute called \"age\" that does not exist, you will get an AttributeError:^class Person:^    def __init__(self, name):^        self.name = name^person = Person(\"John\")^print(person.age)^Error message:^Traceback (most recent call last):^  File \"main.py\", line 5, in <module>^    print(person.age) ^AttributeError: 'Person' object has no attribute 'age'^",
  "AttributeError can be defined as an error that is raised when an attribute reference or assignment fails.^	To solve this error, check the variable or method name used in your program. ^E.g.: ^X = 10^X.append(6) ^Error message: ^Traceback (most recent call last): ^  	File \"/home/46576cfdd7cb1db75480a8653e2115cc.py\", line 5, in ^   	 X.append(6) ^AttributeError: 'int' object has no attribute 'append'^",
  "The AttributeError is raised when you are trying to access the attribute or object that you are not defined before. To overcome this error^ 1. Import the missing module:^ If you try to access a attribute from module, check wheather that the module is imported or not^ 2. Use try-except block:^ try:^ object.missing_attribute^ except AttributeError as e:^ print(f\"An error occurred: {e}\")^ Example^ list = [1, 2, 3]^ list.missing_attribute^ ErrorMessage : AttributeError: 'list' object has no attribute 'missing_attribute'^"
  
  ]
  
  const eoferror = [
  "This error occurs when the file is being read and it reaches the end of the file. And when the user has not given any input. ^To solve this error check whether the input is correctly given. ^E.g.: ^try: ^n = int(input())^print(n * 10) ^except EOFError as e: ^print(e) ^Error message: ^EOF when reading a line^",
  "EOF (End of File) error in Python is raised when the program is trying to read from a file or input stream and there is no more data to be read. This can happen when a file is being read to the end, or when an input stream is closed.^To avoid EOF errors, you can check if the end of the file has been reached before trying to read more data. One way to do this is by using the file.readline() method, which returns an empty string when the end of the file is reached.^Ex: ^file = open(\"test.txt\", \"r\")^print(file.read())^print(file.read())^Error Message: ^Traceback (most recent call last): ^  File \"main.py\", line 1, in <module>^    file = open(\"test.txt\", \"r\")^FileNotFoundError: [Errno 2] No such file or directory: 'test.txt'^",
  "EOFError is raised when one of the built-in functions input() or raw_input() hits an end-of-file condition (EOF) without reading any data. This error is sometimes experienced while using online IDEs. This occurs when we have asked the user for input but have not provided any input in the input box. We can overcome this issue by using try and except keywords in Python.^E.g.: ^try: ^	n = int(input())^	print(n * 10) ^	except EOFError as e: ^	print(e) ^Error message: ^EOF when reading a line^",
  "The EOFError is raised when there is no more data to be read out when it reaches the end of the file.^ To overcome this error^ 1. Use try-except block: ^ try:^ data = input()^ except EOFError as e:^ print(f\"An error occurred: {e}\")^ 2. Check for end of the file: ^ Before read the file, check it reaches the end or not using ‘read()’^ Example: ^ data = input()^ print(data)^ ErrorMessage: EOFError: EOF when reading a line^"
  ]
  
  const floatingpointerror = [
  "This error occurs when the floating point numbers cannot be represented and is not valid.E.g.:  Square root of a negative number ^To solve this error, use numbers which are not too small or too large . ^E.g.: ^	>>> 1.2 - 1.0^	Output: ^	0.199999999999999996^",
  "A Floating Point Error (also known as a \"floating point exception\" or \"floating point arithmetic error\") in Python is raised when a computation involving floating-point numbers cannot be represented exactly in the floating-point format. This can happen due to the limitations of the underlying binary representation of floating-point numbers.^To solve this error,use the ‘math.isclose()’ function from the ‘math’ module.^Ex:a = 0.1 + 0.1 + 0.1^b = 0.3^assert a == b, \"Error: floating point error\"^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 3, in <module>^    assert a == b, \"Error: floating point error\"^AssertionError: Error: floating point error^",
  "It's a problem caused when the internal representation of floating-point numbers, which uses a fixed number of binary digits to represent a decimal number. It is difficult to represent some decimal number in binary, so in many cases, it leads to small roundoff errors.^E.g.: ^	>>> 1.2 - 1.0^	Output: ^	0.199999999999999996^",
  "The Floating point error is raised when the calculation produces unexpected result due to its limitation^ To overcome this^ 1. Use the decimal module: ^ 2. Round off the result using round() function^ 3. Use a tolerance value^ Example:^ result = 0.1 + 0.1 + 0.1^ print(result == 0.3)^ Output: False^"
  ]
  
  const generatorexit = [
  "This occurs when generator method is closed or the generator’s close() method is called. And when the method does not complete all of the iterations. ^To solve this error, check whether the method completes all the iterations. ^E.g.: ^def countdown(n): ^    logging.debug(\"Counting down\")^    while n > 0: ^        try: ^            yield n^        except GeneratorExit: ^            logging.error(\"GeneratorExit\")^        n -= 1^if __name__ == '__main__': ^    c = countdown(10) ^    logging.debug(\"value: %d\", c.next())^Error message: ^# ./test.py^[2015/06/16 04:10:49] DEBUG    - Counting down     ^[2015/06/16 04:10:49] DEBUG    - value: 10 ^[2015/06/16 04:10:49] ERROR    - GeneratorExit^Exception RuntimeError: 'generator ignored GeneratorExit' in <generator object countdown at ^0x7f9934407640> ignored^",
  "A Generator Exit Error in Python is raised when a generator's return statement or a StopIteration exception is encountered inside the generator function. This indicates that the generator has reached the end of its iteration and can no longer produce any more values.^To avoid this error use the ‘try-except’ block to handle the StopIteration,or use the ‘for’  loop to iterate over the generator function.^Ex: ^def my_generator():^    yield 1^    yield 2^    return^    yield 3^gen = my_generator()^print(next(gen)) ^print(next(gen)) ^print(next(gen)) ^Error message: ^1^2^Traceback (most recent call last): ^  File \"main.py\", line 10, in <module>^    print(next(gen)) ^StopIteration^",
  "A GeneratorExit error is a specific type of error that occurs when a generator function is closed or when the generator's close() method is called. This typically happens when a generator's parent function returns or when the script or program exits. This error is raised when the generator is still active and has not yet completed all of its iterations. In python, the error message is displayed as \"GeneratorExit\" ^E.g.: ^def countdown(n): ^    logging.debug(\"Counting down\")^    while n > 0: ^        try: ^            yield n^        except GeneratorExit: ^            logging.error(\"GeneratorExit\")^        n -= 1^if __name__ == '__main__': ^    c = countdown(10) ^    logging.debug(\"value: %d\", c.next())^Error message: ^# ./test.py^[2015/06/16 04:10:49] DEBUG    - Counting down     ^[2015/06/16 04:10:49] DEBUG    - value: 10 ^[2015/06/16 04:10:49] ERROR    - GeneratorExit^Exception RuntimeError: 'generator ignored GeneratorExit' in <generator object countdown at ^0x7f9934407640> ignored^",
  "The Generator Exit error indicatating that generator should be closed and its resources should be freed.^ To overcome this error^ 1. Use try-except block:^ def my_generator():^ try:^ while True:^ yield 42^ except GeneratorExit:^ print(\"Generator is closing\")^ 2. Clean up the resources in the except block^ Example:^ def my_generator():^ while True:^ yield 42^ gen = my_generator()^ next(gen)^ gen.close()^ next(gen)^ ErrorMessage: GeneratorExit: generator ignored GeneratorExit^ "
  ]
  
  const importerror = [
  "This error occurs when the importing package name is misspelled or not installed. ^To solve this error, correct the spelling of the package or install the required package. ^E.g.: ^import request^Error message: ^Traceback (most recent call last): ^  File \"/home/main.py\", line 1, in <module>^    import request^ModuleNotFoundError: No module named 'request'^</br>",
  "Import error is raised when the interpreter is unable to find a module or package that has been imported and also spelled wrongly package or module name.^To avoid this error,make sure that the module or package trying to import is spelled correctly and located in the correct directory.^Ex: ^import mymodule^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 1, in <module>^    import mymodule^ModuleNotFoundError: No module named 'mymodule'^",
  "This error generally occurs when a class cannot be imported due to one of the following reasons: The imported class is in a circular dependency. The imported class is unavailable or was not created. The imported class name is misspelled^E.g.: ^import request^Error message: ^Traceback (most recent call last): ^  File \"/home/main.py\", line 1, in <module>^    import request^ModuleNotFoundError: No module named 'request'^",
  "The Import Error is raised when the statement gets failed to find the module.^ To overcome this error:^ 1. Verify the spelling of the module or package name^ 2. Verify that the module or package is installed (Use pip command to install)^ 3. Check the module or package for syntax error^ Example:^ import nonexistent_module^ Error Message: ImportError: No module named 'nonexistent_module'^ "
  ]
  
  const indexerror = [
  "This error occurs when the importing package name is misspelled or not installed. ^To solve this error, correct the spelling of the package or install the required package. ^E.g.: ^import request^Error message: ^Traceback (most recent call last): ^  File \"/home/main.py\", line 1, in <module>^    import request^ModuleNotFoundError: No module named 'request'^</br>",
  "Index error occurs when list,tupke or other sequence-like object is indexed with a number that is outside its valid range.This occurs when trying to access an element at an index that is less than 0 or greater than the length of the sequence.^To avoid this error check the index before accessing the element,or use a ‘try-except’ block to handle the IndexError exception.^Ex: ^my_list = [1, 2, 3] ^print(my_list[3]) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    print(my_list[3]) ^IndexError: list index out of range^",
  "An IndexError means that your code is trying to access an index that is invalid. This is usually because the index goes out of bounds by being too large. For example, if you have a list with three items and you try to access the fourth item, you will get an IndexError.^E.g.: ^myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ^print(\"The list is:\", myList) ^index = 10^element = myList[index] ^print(\"Element at index {} is {}\".format(index,element)) ^Error message:	^The list is: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ^Traceback (most recent call last): ^  File \"/home/aditya1117/PycharmProjects/pythonProject/string12.py\", line 4, in <module>^    element = myList[index] ^IndexError: list index out of range^",
  "The Index Error is raised when the given index is in out of range of specified index range. ^ To overcome this error:^ 1. Check the length of array^ 2. Use try-except block to catch the IndexError^ Example:^ a = [1, 2, 3] print(a[3]) ErrorMessage: IndexError: list index out of range^"
  ]
  
  const keyerror = [
  "This error occurs when the key specified does not exist or not yet created in the dictionary. ^To solve this error, specify the key that is available in the dictionary. ^E.g.: ^a = {^    \"Name\":\"Ram\",^    \"Marks\":23, ^    \"Grade\":\"A\"^}^print(a[\"school\"])^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 7, in <module>^    print(a[\"school\"])^KeyError: 'school'^",
  " KeyError raised when a program is trying to access a key in a dictionary that does not exist. This can happen when a program is trying to access a key that has not been defined, or when a program is trying to access a key that has been deleted or unset.^To solve this error check if the key exists in the dictionary before trying to access it or use a ‘try-except’  block to handle the KeyError exception.^Ex: ^my_dict = {\"a\": 1, \"b\": 2, \"c\": 3}^print(my_dict[\"d\"])^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    print(my_dict[\"d\"])^KeyError: 'd'^",
  "The Python KeyError is an exception that occurs when an attempt is made to access an item in a dictionary that does not exist. The key used to access the item is not found in the dictionary, which leads to the KeyError ^E.g.: ^a = {^    \"Name\":\"Ram\",^    \"Marks\":23, ^    \"Grade\":\"A\"^}^print(a[\"school\"])^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 7, in <module>^    print(a[\"school\"])^KeyError: 'school'^",
  "The Key Error is raised when the element or key doesnot exist in the defined dictionary. ^ To overcome this error:^ 1. Use try-except block: ^ d = {'a': 1, 'b': 2}^ try:^ value = d['c']^ except KeyError:^ print(\"Key 'c' does not exist in the dictionary\")^ value = None^ print(\"The value is:\", value)^2. Use get method to access a dictionary item without the raising the keyword.^ Example:^ d = {'a': 1, 'b': 2}^ print(d['c'])^ ErrorMessage: KeyError: 'c'^"
  ]
  
  const keyboardinterrupt = [
  "This is a common error that occurs when the user accidentally presses ctrl+c or some other terminating keys. ^To solve this, avoid pressing keys while program execution. ^E.g.: ^try: ^    var = input()^    print ('Use KeyboardInterrupt') ^except KeyboardInterrupt: ^    print ('KeyboardInterrupt exception is caught') ^else: ^    print ('No exceptions thrown') ^Error message: ^KeyboardInterrupt exception is caught^",
  "A KeyboardInterrupt error is raised when a user manually interrupts the execution of a program by pressing a specific keyboard key, usually CTRL-C or CTRL-BREAK depending on the operating system.^To solve this make sure that you cannot press the CTRL-C.^Ex: ^import time^while True: ^    print(\"Running...\") ^    time.sleep(1) ^Error message: ^Command failed: timeout 7 python3 main.py<Keyboard Exception>^",
  "The KeyboardInterrupt exception is a standard exception that is thrown to manage faults with the keyboard. In Python, there is no special syntax for the KeyboardInterrupt exception; it is handled in the usual try and except block. The code that potentially causes the problem is written inside the try block, and the ‘raise’ keyword is used to raise the exception, or the python interpreter raises it automatically. ^E.g.: ^try: ^    var = input()^    print ('Use KeyboardInterrupt') ^except KeyboardInterrupt: ^    print ('KeyboardInterrupt exception is caught') ^else: ^    print ('No exceptions thrown') ^Error message: ^KeyboardInterrupt exception is caught^",
  "The KeyboardInterrupt is raised when the user press the ‘CTRL+C’ while the execution of the program.^ To overcome this error:^ 1. Use try-except block:^ try:^ while True:^ print(\"Press 'CTRL + C' to stop\")^ except KeyboardInterrupt:^ print(\"Interrupted by the user\")^"
  ]
  
  const memoryerror = [
  "This error occurs when an operation runs out of memory and is not able to release memory. ^It can be handled using try-except block like any other exceptions. ^Error message: ^Traceback (most recent call last): ^File \"/run-1341144766-1067082874/solution.py\", line 27, in ^main()^File \"/run-1341144766-1067082874/solution.py\", line 11, in main^if len(s[i:j+1]) > 0: ^MemoryError^Error in sys.excepthook: ^Traceback (most recent call last): ^File \"/usr/lib/python2.7/dist-packages/apport_python_hook.py\", line 64, in ^apport_excepthook^from apport.fileutils import likely_packaged, get_recent_crashes^File \"/usr/lib/python2.7/dist-packages/apport/__init__.py\", line 1, in ^from apport.report import Report^MemoryError^",
  " MemoryError is raised when an operation runs out of memory but is not able to release memory and is unable to allocate more memory to continue its execution.^To avoid this  error reduce the size of the data structure,free up memory,use the external libraries etc.^Ex: ^import numpy as np^# Try to create a numpy array with 10^9 elements^a = np.zeros(10**9) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 3, in <module>^    a = np.zeros(10**9) ^numpy.core._exceptions.MemoryError: Unable to allocate 7.45 GiB for an array with shape (1000000000,) and data type float64^",
  "A memory read error is a malfunction that occurs when data is being accessed from memory for use by a program, or when a value read from RAM fails to match an expected value. Memory read errors can cause miscalculations, program malfunctions, unresponsiveness, the blue screen of death (BSOD) and spontaneous restarts. ^Error message: ^Traceback (most recent call last): ^File \"/run-1341144766-1067082874/solution.py\", line 27, in ^main()^File \"/run-1341144766-1067082874/solution.py\", line 11, in main^if len(s[i:j+1]) > 0: ^MemoryError^Error in sys.excepthook: ^Traceback (most recent call last): ^File \"/usr/lib/python2.7/dist-packages/apport_python_hook.py\", line 64, in ^apport_excepthook^from apport.fileutils import likely_packaged, get_recent_crashes^File \"/usr/lib/python2.7/dist-packages/apport/__init__.py\", line 1, in ^from apport.report import Report^MemoryError^",
  "The MemoryError is raised when it couldn’t able to allocate more memory than its available memory of the system^ To overcome this error^ 1. Optime the code to reduce the memory usage.^ 2. Use memory efficient data structure such as NumPy arrays, installed of lists^ 3. Increase the memory limit by modifying the ‘ulimit’ settings^ Example:^ list = []^ for i in range(100000000):^ list.append(i)^ ErrorMessage:MemoryError: Unable to allocate array with shape (100000000,) and data type int^"
  ]
  
  const nameerror = [
  "This error occurs when a program is trying to use a variable or object that has not been defined. ^To solve this error, check the variable name or declaration of the variable. ^E.g.: ^name = \"John\"^print(age) ^Error message: ^NameError: name 'age' is not defined^",
  "NameError in Python occurs when a variable or function is referenced that has not been defined or assigned a value. This can happen when a variable name is misspelled, or when a function is called before it has been defined.^To solve this error make sure that the variable or function has been defined or assigned a value before it is used, and check the variable or function name is spelled correctly. Also, make sure you are using the variable or function in the correct scope.^Ex: ^# Attempt to access an undefined variable^print(x) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 1, in <module>^    print(x) ^NameError: name 'x' is not defined^",
  "There are several standard exceptions in Python and NameError is one among them. NameError is raised when the identifier being accessed is not defined in the local or global scope^E.g.: ^name = \"John\"^print(age) ^Error message: ^NameError: name 'age' is not defined^",
  "The NameError is raised when a variable or function is not defined or declared before.^ To overcome this error:^ 1. Define the name or variable that should be defined before in the code<br? 2. Import the missingmodules before the code that uses it^ Example:^ print(undefined_variable)^ ErrorMessage: NameError: name 'undefined_variable' is not defined^ "
  ]
  
  const notimplementederror = [
  "This error occurs when the user tries to use a feature or method that has not been implemented yet. ^You cannot use this feature as it is planned for future development. ^E.g.: ^class Abstract(object): ^    def wrong(self): ^        raise NotImplemented()^    def right(self): ^        raise NotImplementedError()^",
  "NotImplementedError is a built-in exception in Python that is raised when a method or function is not implemented in a derived class or subclass.^To solve this error is to implement the missing abstract method or function in the derived class.^Ex: ^from abc import ABC, abstractmethod^class MyAbstractClass(ABC): ^    @abstractmethod^    def my_function(self): ^        pass^class MyConcreteClass(MyAbstractClass): ^    pass^obj = MyConcreteClass()^obj.my_function()^ Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 9, in <module>^    obj = MyConcreteClass()^TypeError: Can't instantiate abstract class MyConcreteClass with abstract methods my_function^",
  "The NotImplementedError occurs when an abstract method lacks the required derived class to override this method, thus raising this exception.^E.g.: ^class Abstract(object): ^    def wrong(self): ^        raise NotImplemented()^    def right(self): ^        raise NotImplementedError()^",
  "The NotImplementedError is raised when the abstract method is not implemented in a class. (i.e. it does not provide the implementation for a method defined in the class)^ To overcome this error, ^ 1. Implement the abstract method in the subclass^ Example:^ class AbstractClass: ^ def abstract_method(self):^ raise NotImplementedError(\"Subclasses must implement abstract_method\")^ class ConcreteClass(AbstractClass):^ pass^ concrete_class = ConcreteClass()^ concrete_class.abstract_method()^ ErrorMessage:NotImplementedError: Subclasses must implement abstract_method ^ "
  ]
  
  const oserror = [
  "This error occurs when a program is trying to open a file that does not exist or when a program is trying to access a network resource that is not available. ^	This also occurs when a program does not have sufficient permissions to access the specified path. ^	E.g.: ^	import os^print(os.ttyname(1)) ^Error message: ^OSError: [Errno 25] Inappropriate ioctl for device^",
  "OSError  is raised when there is an error related to the operating system. This can occur when trying to perform operations such as file I/O, network communication, or other system-level operations.^To solve this error it depends on the specific error and the operation that caused it and it is important to note that, OSError can also occur when the operation is not supported by the operating system^Ex: ^# Attempt to open a non-existent file^with open('non_existent_file.txt', 'r') as f: ^    data = f.read()^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 1, in <module>^    with open('non_existent_file.txt', 'r') as f: ^OS Error: [Errno 2] No such file or directory: 'non_existent_file.txt'^",
  "OSError is a built-in exception in Python and serves as the error class for the os module, which is raised when an os specific system function returns a system-related error, including I/O failures such as “file not found” or “disk full”. ^	E.g.: ^	import os^print(os.ttyname(1)) ^Error message: ^OSError: [Errno 25] Inappropriate ioctl for device^",
  "The OS Error is raised when there is an error in the os like permissions are denied. ^ To overcome this error^ 1. Check the file or directory before trying to access if it exists or not^ 2. Use try-except block:^ Example:^ filename = \"nonexistent_file.txt\"^ with open(filename, \"r\") as file:^ contents = file.read()^ Errormessage: OSError: [Errno 2] No such file or directory: 'nonexistent_file.txt’^"
  ]
  
  const overflowerror = [
  "This error occurs when the result of a mathematical operation is too large. ^To solve this, use small numbers for mathematical operation. ^E.g.: ^j = 5.0^for i in range(1, 1000): ^    j = j**i^    print(j) ^Error message: ^5.0^25.0^15625.0^5.960464477539062e+16^7.52316384526264e+83^Traceback (most recent call last): ^  File \"some_file_location\", line 4, in <module>^    j = j**i^OverflowError: (34, 'Result too large') ^",
  "An OverflowError in Python is a built-in exception that is raised when a calculation exceeds the maximum value that can be represented by the data type being used.^The solution to an OverflowError depends on the specific error and the operation that caused it.^Ex: ^j = 5.0^for i in range(1, 1000): ^    j = j**i^    print(j) ^Error message: ^5.0^25.0^15625.0^5.960464477539062e+16^7.52316384526264e+83^Traceback (most recent call last): ^  File \"some_file_location\", line 4, in <module>^    j = j**i^OverflowError: (34, 'Result too large') ^",
  "When an arithmetic operation exceeds the limits of the variable type, an OverflowError is raised. Long integers allocate more space as values grow, so they end up raising MemoryError. Floating point exception handling is not standardized, however. Regular integers are converted to long values as needed.^E.g.: ^j = 5.0^for i in range(1, 1000): ^    j = j**i^    print(j) ^Error message: ^5.0^25.0^15625.0^5.960464477539062e+16^7.52316384526264e+83^Traceback (most recent call last): ^  File \"some_file_location\", line 4, in <module>^    j = j**i^OverflowError: (34, 'Result too large') ^",
  "The OverflowError is raised when a computation exceeds the maximum limit for a specific data type.^ To overcome this, follow the steps: ^ 1. Use a datatype that can handle larger numbers such as float or decimal data type ^ 2. Use math.isinf(), numpy.isinf(), math.isnan(), numpy.isnan() function to check the results is not a number (i.e. importing necessary modules and packages is important)^ Example:^ a = 2**100000^ OverflowError: integer division result too large for a float^"
  ]
  
  const referenceerror = [
  "This error occurs when the program tries to access a variable which has no value. ^Assign a value for the variable to solve this error. ^E.g.: ^import gc as g^import weakref as wk^class check_Object(object): ^    def __init__(self, name): ^self.name = name^def __del__(self): ^    print('Delete it %s') % self^print('Reference object =', a.name) ^Error message: ^ReferenceError: weakly-referenced object no longer exist. ^",
  "A ReferenceError in Python is a built-in exception that is raised when a variable is used before it has been defined. This can happen when a variable is referenced before it has been assigned a value, or when a variable name is spelled incorrectly.^The solution to a ReferenceError depends on the specific error and the operation that caused it.^Ex: ^# Attempt to use a variable before it has been defined^print(x) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    print(x) ^ReferenceError: name 'x' is not defined^",
  "The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.^E.g.: ^import gc as g^import weakref as wk^class check_Object(object): ^    def __init__(self, name): ^self.name = name^def __del__(self): ^    print('Delete it %s') % self^print('Reference object =', a.name) ^Error message: ^ReferenceError: weakly-referenced object no longer exist. ^",
  "The ReferenceError is raised when an uninitialized or undefined variable is accessed. ^ To overcome this error, ^ define and initialize all the required variables in proper manner. ^ Use hasatt() function to check the object has a specific attribute or not^ Use try-except block to catch the Reference error^ Example^ print(unknown_variable)^ NameError: name 'unknown_variable' is not defined^ "
  ]
  
  const runtimeerror = [
  "A RuntimeError is a specific type of error that occurs when a program is running and an unexpected problem occurs.^ This can happen when a program encounters an unexpected condition, such as a divide-by-zero error, or when a program is trying to use a feature or method that is not supported. ^E.g.: ^print \"Gee golly\"^Error message: ^Traceback (most recent call last): ^  In line 1 of the code you submitted: ^    print \"Gee golly\"^                    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(\"Gee golly\")?^",
  "A RuntimeError arises  when a program encounters an error during execution. This can happen due to a variety of reasons, such as invalid input, memory allocation issues, or problems with the code logic.^The solution to a RuntimeError depends on the specific error and the operation that caused it.^Ex: ^a = [1, 2, 3] ^# Attempt to access an index that is out of range^print(a[3]) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 3, in <module>^    print(a[3]) ^Runtime Error: list index out of range^",
  "A program with a runtime error is one that passed the interpreter’s syntax checks, and started to execute. However, during the execution of one of the statements in the program, an error occurred that caused the interpreter to stop executing the program and display an error message. Runtime errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened.^E.g.: ^print \"Gee golly\"^Error message: ^Traceback (most recent call last): ^  In line 1 of the code you submitted: ^    print \"Gee golly\"^                    ^^SyntaxError: Missing parentheses in call to 'print'. Did you mean print(\"Gee golly\")?^",
  "The RuntimeError is raised when an abnormal condition is encountered during the execution of the program. ^ It is typically used when there is a problem that cannot be handled by a more specific exception. ^ It is the general purpose error, it raised when a program is unable to perform a specific action due to a problem with the runtime environment such as memory allocation failure or program is in illegal state (i.e. called out of order). ^"
  ]
  
  const stopiteration = [
  "This error occurs when a program is trying to iterate over a sequence and the end of the sequence is reached. ^It is not technically an error, but an exception which is used to signal the end of an iteration. ^E.g.: ^y = [1, 2, 3] ^x = iter(y) ^print(x.__next__())^print(x.__next__())^print(x.__next__())^print(x.__next__())^Error message:	^1^2^3^Traceback (most recent call last): ^  File \"some_file_location\", line 6, in <module>^    print(x.__next__())^StopIteration^",
  "StopIteration is an exception that is raised by an iterator when it has reached the end of the iteration. It signals that there are no more items to be returned by the iterator.^Ex: ^y = [1, 2, 3] ^x = iter(y) ^print(x.__next__())^print(x.__next__())^print(x.__next__())^print(x.__next__())^Error message: ^1^2^3^Traceback (most recent call last): ^  File \"some_file_location\", line 6, in <module>^    print(x.__next__())^StopIteration^",
  "In Python, StopIteration is an exception which occurred by built-in next() and _next_() method in iterator to signal that iteration is done for all items and no more to left to iterate.^E.g.: ^y = [1, 2, 3] ^x = iter(y) ^print(x.__next__())^print(x.__next__())^print(x.__next__())^print(x.__next__())^Error message:	^1^2^3^Traceback (most recent call last): ^  File \"some_file_location\", line 6, in <module>^    print(x.__next__())^StopIteration^",
  "The StopIteration error is raised when an iterator has reached the end of its sequence and there is nothing to return to user.^ To overcome this error^ Use try-except block to catch the Stopiteration Error^ numbers = [1, 2, 3, 4, 5]^ numbers_iter = iter(numbers)^ while True:^ try:^ item = next(numbers_iter)^ print(item)^ except StopIteration:^ break^ Example^ numbers = [1, 2, 3, 4, 5]^ numbers_iter = iter(numbers)^ print(next(numbers_iter))^ print(next(numbers_iter))^ print(next(numbers_iter))^ print(next(numbers_iter))^ print(next(numbers_iter))^ print(next(numbers_iter))^ Error Message : StopIteration^"
  ]
  
  const syntaxerror = [
  "This occurs when a program’s code is not written correctly. ^To solve this error, check the program for type errors. ^E.g.: ^print(Hello World) ^Error message: ^File \"test.py\", line 1^    print(Hello World) ^                SyntaxError: invalid syntax^",
  "A syntax error occurs when the code is written in an incorrect format or structure that the programming language cannot understand.^Ex: ^# Missing colon at the end of the if statement^if x > 0^    print(\"x is positive\")^Error message: ^File \"main.py\", line 1^    if x > 0^           SyntaxError: invalid syntax^",
  "The Python SyntaxError occurs when the interpreter encounters invalid syntax in code. When Python code is executed, the interpreter parses it to convert it into bytecode. If the interpreter finds any invalid syntax during the parsing stage, a SyntaxError is thrown.^E.g.: ^print(Hello World) ^Error message: ^File \"test.py\", line 1^    print(Hello World) ^                ^^SyntaxError: invalid syntax^",
  "The SyntaxError is raised wen the error in your code. i.e. The user should not follow the proper rules to define the code properly^E.g.: ^print(Hello World) ^Error message: ^File \"test.py\", line 1^    print(Hello World) ^                SyntaxError: invalid syntax^",
  "A syntax error occurs when the code is written in an incorrect format or structure that the programming language cannot understand.^Ex: ^# Missing colon at the end of the if statement^if x > 0^    print(\"x is positive\")^Error message: ^File \"main.py\", line 1^    if x > 0^           SyntaxError: invalid syntax^",
  "The Python SyntaxError occurs when the interpreter encounters invalid syntax in code. When Python code is executed, the interpreter parses it to convert it into bytecode. If the interpreter finds any invalid syntax during the parsing stage, a SyntaxError is thrown.^E.g.: ^print(Hello World) ^Error message: ^File \"test.py\", line 1^    print(Hello World) ^                ^^SyntaxError: invalid syntax^"
  
  ]
  
  const indentationerror = [
  "As the name says, this error occurs when the indentation is not correctly given. ^To solve this error, correct the indentations. ^E.g.: ^def max(x,y):  # max function will return the maximum among the two numbers  ^  if(x>y):  ^  return x  ^  else:  ^    return y  ^a = int(input(\"Enter a number: \"))  ^b = int(input(\"Enter another number: \"))  ^print(\"Finding the Maximum out of a:\", a ,\"and b:\", b)  ^c=max(a,b)    ^print(c,\"is maximum\") ^Error message: ^IndentationError: expected an indented block^",
  "An indentation error in Python occurs when the code is not properly indented, which can cause the interpreter to misunderstand the structure of the code. In Python, the indentation level is used to separate blocks of code, such as the body of a function or an if statement.^Ex: ^x = 5^if x > 0: ^print(\"x is positive\")^Error message: ^File \"main.py\", line 3^    print(\"x is positive\")^    IndentationError: expected an indented block^",
  "Since python makes use of procedural language, if you miss out on adding tabs or spaces between your lines of code, then you will most likely experience this error. ^E.g.: ^def max(x,y):  # max function will return the maximum among the two numbers  ^  if(x>y):  ^  return x  ^  else:  ^    return y  ^a = int(input(\"Enter a number: \"))  ^b = int(input(\"Enter another number: \"))  ^print(\"Finding the Maximum out of a:\", a ,\"and b:\", b)  ^c=max(a,b)    ^print(c,\"is maximum\") ^Error message: ^IndentationError: expected an indented block^",
  "The SyntaxError is raised wen the error in your code. i.e. The user should not follow the proper rules to define the code properly^ 19. INDENTATION ERROR: The IndentationError is raised when the Indentation is used to define blocks of code in Python.^ To overcome this error, make sure that the blocks of code are typically indented 4 spaces^ Example:^ def my_function():^ print(\"This is my function\")^ print(\"This is outside my function\")^"
  ]
  
  const taberror = [
  "This occurs when the tabs and spaces are used inconsistently. ^Use tabs and spaces consistently to avoid this error. ^ E.g.: ^numbers = [3.50, 4.90, 6.60, 3.40] ^def calculate_total(purchases): ^    total = sum(numbers) ^        return total^total_numbers = calculate_total(numbers) ^print(total_numbers) ^Error message: ^File “C:/Users/saurabh.gupta/Desktop/Python Example/Exception Test.py”, line 10^return total^TabError: inconsistent use of tabs and spaces in indentation^",
  "Tab error typically refers to a problem with the use of tabs in the indentation of code. Python uses indentation to indicate the block of code that belongs to a certain control structure, such as a for loop or an if statement. If tabs and spaces are mixed in the indentation, it will cause a \"tab error\" and the code will not run as expected.^Ex: ^if x > 0: ^    print(\"x is positive\")^    x = x – 1^Error message: ^File \"main.py\", line 3^    x = x – 1^          SyntaxError: invalid character in identifier^",
  "The Python “TabError: inconsistent use of tabs and spaces in indentation” error is raised when you try to indent code using both spaces and tabs. You fix this error by sticking to either spaces or tabs in a program and replacing any tabs or spaces that do not use your preferred method of indentation. ^ E.g.: ^numbers = [3.50, 4.90, 6.60, 3.40] ^def calculate_total(purchases): ^    total = sum(numbers) ^        return total^total_numbers = calculate_total(numbers) ^print(total_numbers) ^Error message: ^File “C:/Users/saurabh.gupta/Desktop/Python Example/Exception Test.py”, line 10^return total^^^TabError: inconsistent use of tabs and spaces in indentation^",
  "The TabError is raised when there is a mix of tab spaces used in the code, It makes difficult to determine the indended level^ Normally it does not show the error, but it cause the lines that not to be executed correctly^ Example:^ def my_function():^ print(\"This is my function\")^ print(\"This is outside my function\")^ Corrected code:^ def my_function():^ print(\"This is my function\")^ print(\"This is outside my function\")^"
  ]
  
  const systemexit = [
  "It occurs when the built-in exit() function or sys.exit() is called. ^This also occurs by the os.exit() function. ^E.g.: ^for i in range(10): ^	if i == 5: ^		print(quit) ^		quit()^	print(i) ^Error message: ^	0^1^2^3^4^Use quit() or Ctrl-D (i.e. EOF) to exit^",
  "\"System Exit\" refers to the process of ending or terminating a program or application, which can be done in various ways depending on the programming language and operating system.In Python, the built-in sys module provides a method called exit() which can be used to exit the program. ^Ex: ^for i in range(10): ^    # If the value of i becomes^    # 5 then the program is forced^    # to quit^    if i == 5: ^        # prints the quit message^        print(quit) ^        quit()^   Error message: ^   Use quit() or Ctrl-D (i.e. EOF) to exit^",
  "The functions quit(), exit(), sys.exit() and os._exit() have almost the same functionality as they raise the SystemExit exception by which the Python interpreter exits and no stack traceback is printed. We can catch the exception to intercept early exits and perform cleanup activities; if uncaught, the interpreter exits as usual. ^E.g.: ^for i in range(10): ^	if i == 5: ^		print(quit) ^		quit()^	print(i) ^Error message: ^	0^1^2^3^4^Use quit() or Ctrl-D (i.e. EOF) to exit^",
  "The SystemExit error is raised when the code call the sys.exit() function.^ import sys^ def my_function():^ sys.exit()^ my_function()^ print(\"This statement will never be executed\")^ To overcome this error, use try-except block^ import sys^ def my_function():^ try:^ sys.exit()^ except SystemExit:^ print(\"SystemExit raised\")^ my_function()^ print(\"This statement will be executed\")^"
  ]
  
  const typeerror = [
  "This error occurs when the operation is performed between variables of different data type. ^To solve this use same data type variables for the operations. ^E.g.: ^my_integer = 1^my_string = \"Hello World\"^my_result = my_integer + my_string^Error message: ^File \"test.py\", line 3, in <module>^        my_result = my_integer + my_string^TypeError: unsupported operand type(s) for +: 'int' and 'str'^",
  "TypeError  occurs when a value is used in a way that is not consistent with its data type. In other words, it happens when a value is used in a way that is not compatible with the type of data it is.^To fix a TypeError, you will need to ensure that the values being used are of the appropriate types and that the operations being performed are valid for those types.^Ex: ^x = \"Hello\"^y = 5^print(x + y) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 3, in <module>^    print(x + y) ^TypeError: can only concatenate str (not \"int\") to str^Unbound Local Error: UnboundLocal Error arises when try to access a variable before it has been assigned a value.^To solve this assign the value to the variable or assign a default value. ^Ex: ^def my_function():^    print(x)  # x is a local variable^    x = 5  # assign a value to x^my_function()^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 4, in <module>^    my_function()^  File \"main.py\", line 2, in my_function^    print(x)  # x is a local variable^UnboundLocalError: local variable 'x' referenced before assignment^",
  "TypeError is an exception in Python programming language that occurs when the data type of objects in an operation is inappropriate. For example, If you attempt to divide an integer with a string, the data types of the integer and the string object will not be compatible.^E.g.: ^my_integer = 1^my_string = \"Hello World\"^my_result = my_integer + my_string^Error message: ^File \"test.py\", line 3, in <module>^        my_result = my_integer + my_string^TypeError: unsupported operand type(s) for +: 'int' and 'str'^",
  "The TypeError in Python occurs when an operation or function is applied to an object of an incompatible type. ^ To overcome this error, follow the steps, ^ 1. Check the datatype you declared before.^ 2. Use ‘isinstance’ to check the type of an object before performing operations on it.^ Example:^ >>> int(\"abc\")^ Traceback (most recent call last):^ File \"<stdin>\", line 1, in <module>^ TypeError: int() argument must be a string, a bytes-like object or a number, not 'str'^"
  ]
  
  const unboundlocalerror = [
  "This error occurs when the program tries to access a variable which has no value. ^Assign a value for the variable to solve this error. ^E.g.: ^items = 2^items = 2^def test_this():^    print(items) ^    items = 5^test_this()^Error message: ^UnboundLocalError:local variable 'items' referenced before assignment^",
  " UnboundLocal Error arises when try to access a variable before it has been assigned a value.^To solve this assign the value to the variable or assign a default value. ^Ex: ^def my_function():^    print(x)  # x is a local variable^    x = 5  # assign a value to x^my_function()^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 4, in <module>^    my_function()^  File \"main.py\", line 2, in my_function^    print(x)  # x is a local variable^UnboundLocalError: local variable 'x' referenced before assignment^",
  "An unbound local error occurs when a local variable is referred to before it is assigned. The variables in Python are specified only inside a function that is global by default. If a value is assigned to a variable in the function body, unless it is explicitly defined to be global, it is presumed to be local.^E.g.: ^items = 2^items = 2^def test_this():^    print(items) ^    items = 5^test_this()^Error message: ^UnboundLocalError:local variable 'items' referenced before assignment^",
  "The UnboundLocalerror is raised when you try to access a variable that defined within a function, but not been assigned a value.^ To fix this error, follow the steps: ^ 1. use except method:- except UnboundLocalError as _variable_ : print(f'Error: {_variable_}') Example:^ def example():^ print(x) ^ x = 10^ print(x) ^ example()^ Error Message : Traceback (most recent call last):^ File \"<stdin>\", line 2, in <module>^ File \"<stdin>\", line 2, in example^ UnboundLocalError: local variable 'x' referenced before assignment^"
  ]
  
  const unicodeerror = [
  "This error occurs when working with Unicode data in python and when trying to decode or encode a string with an incompatible encoding, or when trying to process a string that contains invalid Unicode characters. ^Error message: ^SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 0-5: ^truncated \\UXXXXXXXX escape^",
  "Unicode Error is an exception that raises when a Unicode-related operation fails.It is base class for several other Unicode-related exceptions such as UnicodeDecodeError, UnicodeEncodeError, and UnicodeTranslateError^To solve this exception use the try-except block to catch the exception.^Ex: ^text = \"Hello, 世界\"^encoded_text = text.encode(\"ascii\", \"strict\")^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    encoded_text = text.encode(\"ascii\", \"strict\")^UnicodeEncodeError: 'ascii' codec can't encode characters in position 7-8: ordinal not in range(128) ^",
  "In Python, it cannot detect Unicode characters, and therefore it throws an encoding error as it cannot encode the given Unicode string. ^Error message: ^SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 0-5: ^truncated \UXXXXXXXX escape^",
  "The UnicodeError raised when the operation or function receives an argument with wrong type or format. ^ To overcome this error, follow the steps: ^ 1. Use except method:- except UnicodeError: print(\"Invalid encoding\")^ 2. Use encode errors method:- variable.encode('ascii', errors = 'ignore')^ Example : ^ text = \"Hello World\"^ text + \"文字列\"^ Traceback (most recent call last):^ File \"<stdin>\", line 2, in <module>^ UnicodeError: can't concat str to bytes^"
  ]
  
  const unicodeencodeerror = [
  "A Unicode Encode Error occurs when trying to encode a string that contains characters that are not compatible with the specified encoding. ^E.g.: ^u = 'é'^print(\"Integer value for é: \", ord(u)) ^print(\"Converting the encoded value of é to Integer Equivalent: \", chr(233)) ^print(\"UNICODE Representation of é: \", u.encode('utf-8')) ^print(\"ASCII Representation of é: \", u.encode('ascii')) ^Error message: ^Integer value for é:  233^Converting the encoded value of é to Integer Equivalent:  é^UNICODE Representation of é:  b\\'\\xc3\\xa9\\'^Traceback (most recent call last): ^  File \"main.py\", line 5, in <module>^    print(\"ASCII Representation of é: \",u.encode('ascii')) ^UnicodeEncodeError: 'ascii' codec can't encode character '\\xe9' in position 0: ordinal not in range(128) ^",
  "Unicode Encode Error is an exception that is occurred when Unicode character cannot be encoded to a specific encoding.^To solve this exception use the try-except block to catch the exception.^Ex: ^text = \"Hello, 世界\"^encoded_text = text.encode(\"ascii\")^print(encoded_text) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    encoded_text = text.encode(\"ascii\")^UnicodeEncodeError: 'ascii' codec can't encode characters in position 7-8: ordinal not in range(128) ^",
  "In Python, it cannot detect Unicode characters, and therefore it throws an encoding error as it cannot encode the given Unicode string.^E.g.: ^u = 'é'^print(\"Integer value for é: \", ord(u)) ^print(\"Converting the encoded value of é to Integer Equivalent: \", chr(233)) ^print(\"UNICODE Representation of é: \", u.encode('utf-8')) ^print(\"ASCII Representation of é: \", u.encode('ascii')) ^Error message: ^Integer value for é:  233^Converting the encoded value of é to Integer Equivalent:  é^UNICODE Representation of é:  b'\xc3\xa9'^Traceback (most recent call last): ^  File \"main.py\", line 5, in <module>^    print(\"ASCII Representation of é: \",u.encode('ascii')) ^UnicodeEncodeError: 'ascii' codec can't encode character '\\xe9' in position 0: ordinal not in range(128) ^",
  "The UnicodeEncodeError is raised when the string cannot be encoded to a specific character set. ^ To overcome this error, follow the steps: ^ 1. use except method:- except UnicodeEncodeError: print(\"Invalid encoding\") ^ 2. use errors argument in encode() method:- variable.encode('ascii', errors = 'ignore')^ 3. use sys.getfilesystemencoding() or sys.getdefaultencoding() methods.^ Example:^ >>> euro = '€'^ >>> print(euro.encode('utf-8'))^ b'\\xe2\\x82\\xac'^ Error Message : UnicodeEncodeError: 'ascii' codec can't encode character '\\u20ac' in position 3: ordinal not in range(128)^"
  ]
  
  const unicodedecodeerror = [
  "A UnicodeDecodeError occurs when a string of bytes is being decoded into a Unicode string, but the bytes do not represent valid Unicode characters. This can happen when trying to read a text file that is not encoded in the expected format, or when trying to decode bytes that were not encoded as text. ^E.g.: ^import pandas as pd^a = pd.read_csv(\"filename.csv\")^Error message: ^UnicodeDecodeError: \"utf-8\" codec can\"t decode byte 0xa0 in position 10: invalid start byte^",
  "Unicode Decode Error is an Exception that is raised when a byte sequence cannot be decoded into a specific encoding.^To handle this exception use a try-except block to catch the exception and print an error message instead of crashing the program.^Ex: ^byte_sequence = b'\xed\xa0\xbd\xed\xb8\x8a'^text = byte_sequence.decode(\"ascii\")^print(text) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    text = byte_sequence.decode(\"ascii\")^UnicodeDecodeError: 'ascii' codec can't decode byte 0xed in position 0: ordinal not in range(128) ^",
  "The UnicodeDecodeError normally happens when decoding an str string from a certain coding. Since codings map only a limited number of str strings to unicode characters, an illegal sequence of str characters will cause the coding-specific decode() to fail.^E.g.: ^import pandas as pd^a = pd.read_csv(\"filename.csv\")^Error message: ^UnicodeDecodeError: \"utf-8\" codec can\"t decode byte 0xa0 in position 10: invalid start byte^",
  "The UnicodeDecodeError is raised when there is an errror in decoding a string of Unicode data. It is encountered when read a file in the encoding format. ^ To overcome this error, follow the steps: ^ 1. use except method:- except UnicodeDecodeError as _user_variable_ : print(f'error:{_user_variable_}')^ Example : s = b'Hello,\xcf\xbb\xce\xbb\xce\xbf\xce\xac\xcf\x84\xce\xbf\xcf\x82'^ s.decode('utf-8')^ Output:^ Traceback (most recent call last):^ File \"<stdin>\", line 1, in <module>^ UnicodeDecodeError: 'utf-8' codec can't decode byte 0xcf in position 5: invalid continuation byte^"
  ]
  
  const unicodetraslateerror = [
  "A Unicode Translate Error in is raised when a Unicode-related error occurs during a call to a translate() method. This can happen when the translation table or the string being translated contains illegal or undefined Unicode characters. ^Error message: ^<date>,<time>,524,1,\"#00000F70","#00000008","error ","IndexableAttachment\",\"error: Failed to index attachment Doc11.doc: System.Text.EncoderFallbackException: Unable to translate Unicode character \\uDEAD at index 359 to specified code page.; at System.Text.EncoderExceptionFallbackBuffer.Fallback(Char charUnknown, Int32 index); at System.Text.EncoderFallbackBuffer.InternalFallback(Char ch, Char*& chars); at System.Text.UTF8Encoding.GetBytes(Char* chars, Int32 charCount, Byte* bytes, Int32 byteCount, EncoderNLS baseEncoder); at System.Text.EncoderNLS.GetBytes(Char[] chars, Int32 charIndex, Int32 charCount, Byte[] bytes, Int32 byteIndex, Boolean flush); at System.IO.StreamWriter.Flush(Boolean flushStream, Boolean flushEncoder); at MArc.Search.Core.IndexableAttachment.ProcessAttachment(WCFClient`1 storeEmailRetrievalProxy, Guid dbGuid, Int32 messageId, Int32 attachmentId, Attachment attachment, StreamWriter writer) ^",
  "UnicodeTranslate Error is an exception occurs when a Unicode character cannot be translated to a specific encoding.^To solve this exception use the try-except block to catch the exception.^Ex: ^text = \"Hello, 世界\"^encoded_text = text.encode(\"ascii\", \"ignore\")^print(encoded_text) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 2, in <module>^    encoded_text = text.encode(\"ascii\")^UnicodeTranslate Error: 'ascii' codec can't encode characters in position 7-8: ordinal not in range(128) ^",
  "When we use such a string as a parameter to any function, there is a possibility of the occurrence of an error. Such error is known as Unicode error in Python. We get such an error because any character after the Unicode escape sequence (“ \\u ”) produces an error which is a typical error on windows. ^Error message: ^<date>,<time>,524,1,\"#00000F70","#00000008","error ","IndexableAttachment\",\"error: Failed to index attachment Doc11.doc: System.Text.EncoderFallbackException: Unable to translate Unicode character \\uDEAD at index 359 to specified code page.; at System.Text.EncoderExceptionFallbackBuffer.Fallback(Char charUnknown, Int32 index); at System.Text.EncoderFallbackBuffer.InternalFallback(Char ch, Char*& chars); at System.Text.UTF8Encoding.GetBytes(Char* chars, Int32 charCount, Byte* bytes, Int32 byteCount, EncoderNLS baseEncoder); at System.Text.EncoderNLS.GetBytes(Char[] chars, Int32 charIndex, Int32 charCount, Byte[] bytes, Int32 byteIndex, Boolean flush); at System.IO.StreamWriter.Flush(Boolean flushStream, Boolean flushEncoder); at MArc.Search.Core.IndexableAttachment.ProcessAttachment(WCFClient`1 storeEmailRetrievalProxy, Guid dbGuid, Int32 messageId, Int32 attachmentId, Attachment attachment, StreamWriter writer) ^",
  "The Unicode Translate Error is raised, there is error during the translation of a unicode string. i.e the translate character is not found in target encoding.^ To overcome this error:^ Use the ‘unicodedata’ module to perform a more sophisticated character translation, e.g. ‘unicodedata.normalize()’ or ‘unicodedata.translate()’^ Example:^ try:^ translated_text = text.encode(\"utf-8\", errors=\"ignore\")^ except UnicodeTranslateError as e:^ print(f\"UnicodeTranslateError: {e}\")^ translated_text = text.encode(\"utf-8\", errors=\"ignore\")^"
  ]
  
  const valueerror = [
  "A ValueError in Python is raised when a built-in operation or function receives an argument that has the right type but an inappropriate value. ^To solve this error, pass a value that is used in the function. ^E.g.: ^import math^math.sqrt(-10) ^Error message: ^Traceback (most recent call last): ^  File \"<stdin>\", line 1, in <module>^ValueError: math domain error^",
  "    Value error is an  exception that is raised when a function or operation is passed an argument with an inappropriate value or type^.To solve this error type the correct data types  and values of the condition.^Ex: ^ import math^math.sqrt(-100) ^Error message: ^Traceback (most recent call last): ^  File \"test.py\", line 3, in <module>^    math.sqrt(-100) ^ValueError: math domain error^",
  "Python ValueError is raised when a function receives an argument of the correct type but an inappropriate value. Also, the situation should not be described by a more precise exception such as IndexError.^E.g.: ^import math^math.sqrt(-10) ^Error message: ^Traceback (most recent call last): ^  File \"<stdin>\", line 1, in <module>^ValueError: math domain error^",
  "The valueerror is raised when the invalid argument is passed to the function or method. ^ It means the declaration was inappropriate to the type. ^ To overcome this error, follow the steps: ^ 1. use except method:- except valueerror: print(\"invalid argument passed\")^ 2. use else method:- else: print(\"invalid argument passed\"). to avoid this error, make sure that it is of the correct type and value to perform actions Example:^ try:^ user_input = int(input(\"Enter an integer: \"))^ except ValueError:^ print(\"Invalid input, enter an integer\")^"
  ]
  
  const zerodivisionerror = [
  "This error occurs when attempting to divide a number by zero. This is not allowed in mathematics. ^ To solve this error, ensure that the denominator of any division operation is not zero. ^E.g.: ^x = 5^y = 0^z = x/y^print(z) ^Error message: ^Traceback (most recent call last): ^  File \"./prog.py\", line 3, in <module>^ZeroDivisionError: division by zero^",
  "This error occurs when the denominator is zero in the division operation.^To solve this error,make sure that denominator of any division operation is not zero.^Ex:^x = 5^y = 0^result = x / y^print(result) ^Error message: ^Traceback (most recent call last): ^  File \"main.py\", line 3, in <module>^    result = x / y^ZeroDivisionError: division by zero^",
  "Zero Division error in Python. A ZeroDivisionError is raised when you try to divide by 0. This is part of the ArithmeticError Exception class. ^E.g.: ^x = 5^y = 0^z = x/y^print(z) ^Error message: ^Traceback (most recent call last): ^  File \"./prog.py\", line 3, in <module>^ZeroDivisionError: division by zero^",
  "The ZeroDivisionError occurs when the given value gets divided by zero.^ To overcome this error, follow the steps: ^ 1. use except ZeroDivisionError: print(\"The given value cannot be divide by zero\") ^ 2. use else method:- else: print(\"Cannot divide by zero\").^ 3. Use math.isclose() function ^ 4. use numpy.divide() function... Before using the functions import the necessary modules and packages.^ Example:^ def divide(a, b):^ try:^ result = a / b^ except ZeroDivisionError:^ print(\"Cannot divide by zero\")^ divide(10, 0)^"
  ]

  const assertionerror1 = [
    "The condition given in the assert keyword should be true or else assertion error will occur. To solve this, check the condition given in the assert keyword and correct the condition." ,
    "Assertion Error occurs when built-in “assert” statement is used and the condition being tested is False.The assert statement is used to ensure that the code is running correctly and to provide an error message if the code is not working as expected.To solve this error make sure that the condition in the \‘assert\’ statement is true.",
    "The meaning of an AssertionError is that something happened that the developer thought was impossible to happen. So if an AssertionError is ever thrown, it is a clear sign of a programming error.",
    "The AssertionError is raised when an ‘assert’ statement fails. If the condition is false in assert statement, it raises on ‘AssertionError’"
  ]
  
  const attributeerror1 = [
    "This error occurs when a variable or method name is misspelled or when a program is trying to access the attribute of an object that does not have that attribute. To solve this error, check the variable or method name used in your program." ,
    "Attribute error occurs when an object does not have a specific attribute or method that is being called.To solve this error checks the spell of the attribute/method and actually exists on the object.",
    "AttributeError can be defined as an error that is raised when an attribute reference or assignment fails.    To solve this error, check the variable or method name used in your program." ,
    "The AttributeError is raised when you are trying to access the attribute or object that you are not defined before. To overcome this error."
  
  ]
  
  const eoferror1 = [
    "This error occurs when the file is being read and it reaches the end of the file. And when the user has not given any input. To solve this error check whether the input is correctly given." ,
    "EOF (End of File) error in Python is raised when the program is trying to read from a file or input stream and there is no more data to be read. This can happen when a file is being read to the end, or when an input stream is closed.To avoid EOF errors, you can check if the end of the file has been reached before trying to read more data. One way to do this is by using the file.readline() method, which returns an empty string when the end of the file is reached.",
    "EOFError is raised when one of the built-in functions input() or raw_input() hits an end-of-file condition (EOF) without reading any data. This error is sometimes experienced while using online IDEs. This occurs when we have asked the user for input but have not provided any input in the input box. We can overcome this issue by using try and except keywords in Python.",
    "The EOFError is raised when there is no more data to be read out when it reaches the end of the file. To overcome this error."
  ]
  
  const floatingpointerror1 = [
    "This error occurs when the floating point numbers cannot be represented and is not valid.E.g.:  Square root of a negative number To solve this error, use numbers which are not too small or too large . ",
    "A Floating Point Error (also known as a \"floating point exception\" or \"floating point arithmetic error\") in Python is raised when a computation involving floating-point numbers cannot be represented exactly in the floating-point format. This can happen due to the limitations of the underlying binary representation of floating-point numbers.To solve this error,use the ‘math.isclose()’ function from the ‘math’ module.",
    "It's a problem caused when the internal representation of floating-point numbers, which uses a fixed number of binary digits to represent a decimal number. It is difficult to represent some decimal number in binary, so in many cases, it leads to small roundoff errors.",
    "The Floating point error is raised when the calculation produces unexpected result due to its limitation To overcome this 1. Use the decimal module:  2. Round off the result using round() function 3. Use a tolerance value."
  ]
  
  const generatorexit1 = [
    "This occurs when generator method is closed or the generator’s close() method is called. And when the method does not complete all of the iterations. To solve this error, check whether the method completes all the iterations. ",
    "A Generator Exit Error in Python is raised when a generator's return statement or a StopIteration exception is encountered inside the generator function. This indicates that the generator has reached the end of its iteration and can no longer produce any more values.To avoid this error use the ‘try-except’ block to handle the StopIteration,or use the ‘for’  loop to iterate over the generator function.",
    "A GeneratorExit error is a specific type of error that occurs when a generator function is closed or when the generator's close() method is called. This typically happens when a generator's parent function returns or when the script or program exits. This error is raised when the generator is still active and has not yet completed all of its iterations. In python, the error message is displayed as \"GeneratorExit\" ",
    "The Generator Exit error indicatating that generator should be closed and its resources should be freed. To overcome this error 1. Use try-except block: def my_generator(): try: while True: yield 42 except GeneratorExit: print(\"Generator is closing\") 2. Clean up the resources in the except block."
  ]
  
  const importerror1 = [
    "This error occurs when the importing package name is misspelled or not installed. To solve this error, correct the spelling of the package or install the required package. ",
    "Import error is raised when the interpreter is unable to find a module or package that has been imported and also spelled wrongly package or module name.To avoid this error,make sure that the module or package trying to import is spelled correctly and located in the correct directory.",
    "This error generally occurs when a class cannot be imported due to one of the following reasons: The imported class is in a circular dependency. The imported class is unavailable or was not created. The imported class name is misspelled",
    "The Import Error is raised when the statement gets failed to find the module. To overcome this error: 1. Verify the spelling of the module or package name 2. Verify that the module or package is installed (Use pip command to install) 3. Check the module or package for syntax error"
  ]
  
  const indexerror1 = [
    "This error occurs when the importing package name is misspelled or not installed. To solve this error, correct the spelling of the package or install the required package." ,
    "Index error occurs when list,tupke or other sequence-like object is indexed with a number that is outside its valid range.This occurs when trying to access an element at an index that is less than 0 or greater than the length of the sequence.To avoid this error check the index before accessing the element,or use a ‘try-except’ block to handle the IndexError exception.",
    "An IndexError means that your code is trying to access an index that is invalid. This is usually because the index goes out of bounds by being too large. For example, if you have a list with three items and you try to access the fourth item, you will get an IndexError.",
    "The Index Error is raised when the given index is in out of range of specified index range.  To overcome this error: 1. Check the length of array 2. Use try-except block to catch the IndexError"
  ]
  
  const keyerror1 = [
    "This error occurs when the key specified does not exist or not yet created in the dictionary. To solve this error, specify the key that is available in the dictionary." ,
    " KeyError raised when a program is trying to access a key in a dictionary that does not exist. This can happen when a program is trying to access a key that has not been defined, or when a program is trying to access a key that has been deleted or unset.To solve this error check if the key exists in the dictionary before trying to access it or use a ‘try-except’  block to handle the KeyError exception.",
    "The Python KeyError is an exception that occurs when an attempt is made to access an item in a dictionary that does not exist. The key used to access the item is not found in the dictionary, which leads to the KeyError ",
    "The Key Error is raised when the element or key doesnot exist in the defined dictionary. "
  ]
  
  const keyboardinterrupt1 = [
    "This is a common error that occurs when the user accidentally presses ctrl+c or some other terminating keys. To solve this, avoid pressing keys while program execution." ,
    "A KeyboardInterrupt error is raised when a user manually interrupts the execution of a program by pressing a specific keyboard key, usually CTRL-C or CTRL-BREAK depending on the operating system.To solve this make sure that you cannot press the CTRL-C.",
    "The KeyboardInterrupt exception is a standard exception that is thrown to manage faults with the keyboard. In Python, there is no special syntax for the KeyboardInterrupt exception; it is handled in the usual try and except block. The code that potentially causes the problem is written inside the try block, and the ‘raise’ keyword is used to raise the exception, or the python interpreter raises it automatically." ,
    "The KeyboardInterrupt is raised when the user press the ‘CTRL+C’ while the execution of the program."
  ]
  
  const memoryerror1 = [
    "This error occurs when an operation runs out of memory and is not able to release memory. It can be handled using try-except block like any other exceptions. ",
    " MemoryError is raised when an operation runs out of memory but is not able to release memory and is unable to allocate more memory to continue its execution.To avoid this  error reduce the size of the data structure,free up memory,use the external libraries etc.",
    "A memory read error is a malfunction that occurs when data is being accessed from memory for use by a program, or when a value read from RAM fails to match an expected value. Memory read errors can cause miscalculations, program malfunctions, unresponsiveness, the blue screen of death (BSOD) and spontaneous restarts."
  ]
  
  const nameerror1 = [
    "This error occurs when a program is trying to use a variable or object that has not been defined. To solve this error, check the variable name or declaration of the variable." ,
    "NameError in Python occurs when a variable or function is referenced that has not been defined or assigned a value. This can happen when a variable name is misspelled, or when a function is called before it has been defined.To solve this error make sure that the variable or function has been defined or assigned a value before it is used, and check the variable or function name is spelled correctly. Also, make sure you are using the variable or function in the correct scope.",
    "There are several standard exceptions in Python and NameError is one among them. NameError is raised when the identifier being accessed is not defined in the local or global scope",
    "The NameError is raised when a variable or function is not defined or declared before. To overcome this error: 1. Define the name or variable that should be defined before in the code<br? 2. Import the missingmodules before the code that uses it"
  ]
  
  const notimplementederror1 = [
    "This error occurs when the user tries to use a feature or method that has not been implemented yet. You cannot use this feature as it is planned for future development." ,
    "NotImplementedError is a built-in exception in Python that is raised when a method or function is not implemented in a derived class or subclass.To solve this error is to implement the missing abstract method or function in the derived class.",
    "The NotImplementedError occurs when an abstract method lacks the required derived class to override this method, thus raising this exception.",
    "The NotImplementedError is raised when the abstract method is not implemented in a class. (i.e. it does not provide the implementation for a method defined in the class) To overcome this error,  1. Implement the abstract method in the subclass"
  ]
  
  const oserror1 = [
    "This error occurs when a program is trying to open a file that does not exist or when a program is trying to access a network resource that is not available.    This also occurs when a program does not have sufficient permissions to access the specified path. ",
    "OSError  is raised when there is an error related to the operating system. This can occur when trying to perform operations such as file I/O, network communication, or other system-level operations.To solve this error it depends on the specific error and the operation that caused it and it is important to note that, OSError can also occur when the operation is not supported by the operating system",
    "OSError is a built-in exception in Python and serves as the error class for the os module, which is raised when an os specific system function returns a system-related error, including I/O failures such as “file not found” or \“disk full\”. ",
    "The OS Error is raised when there is an error in the os like permissions are denied.  To overcome this error 1. Check the file or directory before trying to access if it exists or not 2. Use try-except block:"
  ]
  
  const overflowerror1 = [
    "This error occurs when the result of a mathematical operation is too large. To solve this, use small numbers for mathematical operation. ",
    "An OverflowError in Python is a built-in exception that is raised when a calculation exceeds the maximum value that can be represented by the data type being used.The solution to an OverflowError depends on the specific error and the operation that caused it.",
    "When an arithmetic operation exceeds the limits of the variable type, an OverflowError is raised. Long integers allocate more space as values grow, so they end up raising MemoryError. Floating point exception handling is not standardized, however. Regular integers are converted to long values as needed.",
    "The OverflowError is raised when a computation exceeds the maximum limit for a specific data type."
  ]
  
  const referenceerror1 = [
    "This error occurs when the program tries to access a variable which has no value. Assign a value for the variable to solve this error. ",
    "A ReferenceError in Python is a built-in exception that is raised when a variable is used before it has been defined. This can happen when a variable is referenced before it has been assigned a value, or when a variable name is spelled incorrectly.The solution to a ReferenceError depends on the specific error and the operation that caused it.",
    "The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.",
    "The ReferenceError is raised when an uninitialized or undefined variable is accessed.  To overcome this error,  define and initialize all the required variables in proper manner.  Use hasatt() function to check the object has a specific attribute or not Use try-except block to catch the Reference error "
  ]
  
  const runtimeerror1 = [
    "A RuntimeError is a specific type of error that occurs when a program is running and an unexpected problem occurs. This can happen when a program encounters an unexpected condition, such as a divide-by-zero error, or when a program is trying to use a feature or method that is not supported." ,
    "A RuntimeError arises  when a program encounters an error during execution. This can happen due to a variety of reasons, such as invalid input, memory allocation issues, or problems with the code logic.The solution to a RuntimeError depends on the specific error and the operation that caused it.",
    "A program with a runtime error is one that passed the interpreter’s syntax checks, and started to execute. However, during the execution of one of the statements in the program, an error occurred that caused the interpreter to stop executing the program and display an error message. Runtime errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened",
    "The RuntimeError is raised when an abnormal condition is encountered during the execution of the program.  It is typically used when there is a problem that cannot be handled by a more specific exception.  It is the general purpose error, it raised when a program is unable to perform a specific action due to a problem with the runtime environment such as memory allocation failure or program is in illegal state (i.e. called out of order). "
  ]
  
  const stopiteration1 = [
    "This error occurs when a program is trying to iterate over a sequence and the end of the sequence is reached. It is not technically an error, but an exception which is used to signal the end of an iteration." ,
    "StopIteration is an exception that is raised by an iterator when it has reached the end of the iteration. It signals that there are no more items to be returned by the iterator.",
    "In Python, StopIteration is an exception which occurred by built-in next() and _next_() method in iterator to signal that iteration is done for all items and no more to left to iterate.",
    "The StopIteration error is raised when an iterator has reached the end of its sequence and there is nothing to return to user."
  ]
  
  const syntaxerror1 = [
    "This occurs when a program’s code is not written correctly. To solve this error, check the program for type errors." ,
    "A syntax error occurs when the code is written in an incorrect format or structure that the programming language cannot understand.",
    "The Python SyntaxError occurs when the interpreter encounters invalid syntax in code. When Python code is executed, the interpreter parses it to convert it into bytecode. If the interpreter finds any invalid syntax during the parsing stage, a SyntaxError is thrown.",
    "The SyntaxError is raised wen the error in your code. i.e. The user should not follow the proper rules to define the code properly",
    "A syntax error occurs when the code is written in an incorrect format or structure that the programming language cannot understand.",
    "The Python SyntaxError occurs when the interpreter encounters invalid syntax in code. When Python code is executed, the interpreter parses it to convert it into bytecode. If the interpreter finds any invalid syntax during the parsing stage, a SyntaxError is thrown"
  ]
  
  const indentationerror1 = [
    "As the name says, this error occurs when the indentation is not correctly given. To solve this error, correct the indentations. ",
    "An indentation error in Python occurs when the code is not properly indented, which can cause the interpreter to misunderstand the structure of the code. In Python, the indentation level is used to separate blocks of code, such as the body of a function or an if statement.",
    "Since python makes use of procedural language, if you miss out on adding tabs or spaces between your lines of code, then you will most likely experience this error." ,
    "The SyntaxError is raised wen the error in your code. i.e. The user should not follow the proper rules to define the code properly 19. INDENTATION ERROR: The IndentationError is raised when the Indentation is used to define blocks of code in Python. To overcome this error, make sure that the blocks of code are typically indented 4 spaces"
  ]
  
  const taberror1 = [
    "This occurs when the tabs and spaces are used inconsistently. Use tabs and spaces consistently to avoid this error." ,
    "Tab error typically refers to a problem with the use of tabs in the indentation of code. Python uses indentation to indicate the block of code that belongs to a certain control structure, such as a for loop or an if statement. If tabs and spaces are mixed in the indentation, it will cause a \"tab error\" and the code will not run as expected.",
    "The Python “TabError: inconsistent use of tabs and spaces in indentation” error is raised when you try to indent code using both spaces and tabs. You fix this error by sticking to either spaces or tabs in a program and replacing any tabs or spaces that do not use your preferred method of indentation. ",
    "The TabError is raised when there is a mix of tab spaces used in the code, It makes difficult to determine the indended level Normally it does not show the error, but it cause the lines that not to be executed correctly"
  ]
  
  const systemexit1 = [
    "It occurs when the built-in exit() function or sys.exit() is called. This also occurs by the os.exit() function." ,
    "\"System Exit\" refers to the process of ending or terminating a program or application, which can be done in various ways depending on the programming language and operating system.In Python, the built-in sys module provides a method called exit() which can be used to exit the program. ",
    "The functions quit(), exit(), sys.exit() and os._exit() have almost the same functionality as they raise the SystemExit exception by which the Python interpreter exits and no stack traceback is printed. We can catch the exception to intercept early exits and perform cleanup activities; if uncaught, the interpreter exits as usual. ",
    "The SystemExit error is raised when the code call the sys.exit() function."
  ]
  
  const typeerror1 = [
    "This error occurs when the operation is performed between variables of different data type. To solve this use same data type variables for the operations. ",
    "TypeError  occurs when a value is used in a way that is not consistent with its data type. In other words, it happens when a value is used in a way that is not compatible with the type of data it is.To fix a TypeError, you will need to ensure that the values being used are of the appropriate types and that the operations being performed are valid for those types.",
    "TypeError is an exception in Python programming language that occurs when the data type of objects in an operation is inappropriate. ",
    "The TypeError in Python occurs when an operation or function is applied to an object of an incompatible type.  To overcome this error, follow the steps,  1. Check the datatype you declared before. 2. Use ‘isinstance’ to check the type of an object before performing operations on it."
  ]
  
  const unboundlocalerror1 = [
    "This error occurs when the program tries to access a variable which has no value. Assign a value for the variable to solve this error. ",
    " UnboundLocal Error arises when try to access a variable before it has been assigned a value.To solve this assign the value to the variable or assign a default value.",
    "An unbound local error occurs when a local variable is referred to before it is assigned. The variables in Python are specified only inside a function that is global by default. If a value is assigned to a variable in the function body, unless it is explicitly defined to be global, it is presumed to be local.",
    "The UnboundLocalerror is raised when you try to access a variable that defined within a function, but not been assigned a value."
  ]
  
  const unicodeerror1 = [
    "This error occurs when working with Unicode data in python and when trying to decode or encode a string with an incompatible encoding, or when trying to process a string that contains invalid Unicode characters. ",
    "Unicode Error is an exception that raises when a Unicode-related operation fails.It is base class for several other Unicode-related exceptions such as UnicodeDecodeError, UnicodeEncodeError, and UnicodeTranslateErrorTo solve this exception use the try-except block to catch the exception.",
    "In Python, it cannot detect Unicode characters, and therefore it throws an encoding error as it cannot encode the given Unicode string. ",
    "The UnicodeError raised when the operation or function receives an argument with wrong type or format. "
  ]
  
  const unicodeencodeerror1 = [
    "A Unicode Encode Error occurs when trying to encode a string that contains characters that are not compatible with the specified encoding. ",
    "Unicode Encode Error is an exception that is occurred when Unicode character cannot be encoded to a specific encoding.To solve this exception use the try-except block to catch the exception.",
    "In Python, it cannot detect Unicode characters, and therefore it throws an encoding error as it cannot encode the given Unicode string.",
    "The UnicodeEncodeError is raised when the string cannot be encoded to a specific character set. "
  ]
  
  const unicodedecodeerror1 = [
    "A UnicodeDecodeError occurs when a string of bytes is being decoded into a Unicode string, but the bytes do not represent valid Unicode characters. This can happen when trying to read a text file that is not encoded in the expected format, or when trying to decode bytes that were not encoded as text." ,
    "Unicode Decode Error is an Exception that is raised when a byte sequence cannot be decoded into a specific encoding.To handle this exception use a try-except block to catch the exception and print an error message instead of crashing the program.",
    "The UnicodeDecodeError normally happens when decoding an str string from a certain coding. Since codings map only a limited number of str strings to unicode characters, an illegal sequence of str characters will cause the coding-specific decode() to fail.",
    "The UnicodeDecodeError is raised when there is an errror in decoding a string of Unicode data. It is encountered when read a file in the encoding format. "
  ]
  
  const unicodetraslateerror1 = [
    "A Unicode Translate Error in is raised when a Unicode-related error occurs during a call to a translate() method. This can happen when the translation table or the string being translated contains illegal or undefined Unicode characters. ",
    "UnicodeTranslate Error is an exception occurs when a Unicode character cannot be translated to a specific encoding.",
    "When we use such a string as a parameter to any function, there is a possibility of the occurrence of an error. Such error is known as Unicode error in Python. We get such an error because any character after the Unicode escape sequence (“ \\u ”) produces an error which is a typical error on windows. ",
    "The Unicode Translate Error is raised, there is error during the translation of a unicode string. i.e the translate character is not found in target encoding. To overcome this error: Use the ‘unicodedata’ module to perform a more sophisticated character translation, "
  ]
  
  const valueerror1 = [
    "A ValueError in Python is raised when a built-in operation or function receives an argument that has the right type but an inappropriate value. To solve this error, pass a value that is used in the function." ,
    " Value error is an  exception that is raised when a function or operation is passed an argument with an inappropriate value or type.To solve this error type the correct data types  and values of the condition.",
    "Python ValueError is raised when a function receives an argument of the correct type but an inappropriate value. Also, the situation should not be described by a more precise exception such as IndexError.",
    "The valueerror is raised when the invalid argument is passed to the function or method.  It means the declaration was inappropriate to the type.  "
  ]
  
  const zerodivisionerror1 = [
    "This error occurs when attempting to divide a number by zero. This is not allowed in mathematics.  To solve this error, ensure that the denominator of any division operation is not zero." ,
    "This error occurs when the denominator is zero in the division operation.To solve this error,make sure that denominator of any division operation is not zero.",
    "Zero Division error in Python. A ZeroDivisionError is raised when you try to divide by 0. This is part of the ArithmeticError Exception class." ,
    "The ZeroDivisionError occurs when the given value gets divided by zero."
  ]
  

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://imgs.search.brave.com/N3WjX76hjSx9UK5XkE0jjsTFIMQF9MO-jdAm6uAFTIk/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/ZGhjWEtqNGZCbWR4/Wjhya1V6RzdRQUFB/QSZwaWQ9QXBp";
const PERSON_IMG = "https://imgs.search.brave.com/ctUfML-FIsYlCRQ42b8P6_WQriu88cp8KNUZj7vhpp4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/RnkxWHRMU09URElm/dGU5QmR0dlF3SGFI/YSZwaWQ9QXBp";
const BOT_NAME = "Chat AI";
const PERSON_NAME = window.localStorage.getItem('username');
let msgText=""
msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});
let my=1;


function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  if(side=="left")
  {
    let mydiv="mydiv"+my;
  console.log(mydiv);
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text" id="${mydiv}"></div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
  let text1 = text;
  let index = 0;

  function typeText() {
    if (index < text1.length) {

      if(text1[index]=="^")
      {
        document.getElementById(mydiv).insertAdjacentHTML("beforeend", "<br>");
        msgerChat.scrollTop += 500;
        index++;
        setTimeout(typeText, 50);
      }
      else
      {
        document.getElementById(mydiv).insertAdjacentHTML("beforeend", text1[index]);
        msgerChat.scrollTop += 500;
        index++;
        setTimeout(typeText, 50);
      }
     
    }
  }

 my++;

  typeText();
  }
  else
  {
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
  }
  
}
let finalword=""
// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//windos on load function
window.onload = function() {
  reply="Hi, I am Glitch Mender. How can I help you?"
  speak(reply)
}

//indos on load completed

//functions
function speak(reply)
{
  const schat =reply
   let speech = new SpeechSynthesisUtterance();
   speech.lang = "en-US";
   speech.text = schat;
   speech.volume =sound;
   speech.rate = 1;
   speech.pitch = 1;

   window.speechSynthesis.speak(speech);
}

function getLevenshteinDistance(a, b) {
        
  let distance = [];
  for(let i = 0; i <= a.length; i++) {
      distance[i] = [];
      for(let j = 0; j <= b.length; j++) {
          distance[i][j] = 0;
      }
  }
  for(let i = 0; i <= a.length; i++) {
      distance[i][0] = i;
  }
  for(let j = 0; j <= b.length; j++) {
      distance[0][j] = j;
  }
  for(let i = 1; i <= a.length; i++) {
      for(let j = 1; j <= b.length; j++) {
          if(a[i-1] === b[j-1]) {
              distance[i][j] = distance[i-1][j-1];
          }
          else {
              distance[i][j] = Math.min(distance[i-1][j] + 1, distance[i][j-1] + 1, distance[i-1][j-1] + 1);
          }
      }
  }
  

  
  return distance[a.length][b.length];
 
}



function getsyn(message,key1)
{
   
    let key="";
        if(key1=="^")
        {
           key="^";
        }
        else
        {
            const keycheck= message.match(/[^ \(:,;]+/g);
            key = keycheck[0].toLowerCase();
        }
           
           console.log(key)
            const dbRef = firebase.database().ref();
            dbRef.child("error").child("syntaxerror").child(key).child("len").get().then((snapshot) => {   
            if (snapshot.exists()) {
                let len=""
                let sydata=""
                let sy;
                let dis=100
                sydata = snapshot.val();
                len =sydata.v;
                console.log(sydata)
                async function processArray() {
                for(var l=1;l<=len;l++)
                {

                    dbRef.child("error").child("syntaxerror").child(key).child(l).get().then((snapshot) => { 
                        
                        if (snapshot.exists()) {
                            sydata = snapshot.val();
                            console.log(sydata)
                            strings=sydata.v;
                            console.log(strings)
                            let b = message;
                            let distance = getLevenshteinDistance(strings,b);
                            console.log(distance)  ;
                            console.log(strings);
                            if(dis>distance)
                            {
                                window.localStorage.removeItem('correctsy')
                                dis=distance;
                                sy=strings;
                              localStorage.setItem("correctsy", JSON.stringify(sy));
                              localStorage.setItem("givensyntax", JSON.stringify(message));
                    }
                        }
                        else{
                            console.log("No data available");
                        }
                        
                    })
                }
}

processArray().then(() => {
    sendoutput()
  });                   
            } else {
                const test = (message.includes("=")||message.includes(",")||message.includes(":"))
                    if(test==true)
                    {
                    dbRef.child("error").child("syntaxerror").child("^").child("len").get().then((snapshot) => { 
                        let len=""
                        let sydata=""
                        let sy;
                        let dis=100
                        sydata = snapshot.val();
                        len =sydata.v;
                        async function processArray() {
                            for(var l=len;l>=1;l--)
                            {
            
                                dbRef.child("error").child("syntaxerror").child("^").child(l).get().then((snapshot) => { 
                                    if (snapshot.exists()) {
                                        sydata = snapshot.val();
                                        strings=sydata.v;
                                        
                                        let b = message;
                                        let distance = getLevenshteinDistance(strings,b);
                                            
                                        
                                        if(dis>=distance)
                                        {
                                            window.localStorage.removeItem('correctsy')
                                            dis=distance;
                                            sy=strings;
                                          localStorage.setItem("correctsy", JSON.stringify(sy));
                                          localStorage.setItem("givensyntax", JSON.stringify(message));     
                                        }
                                    }
                                    else{
                                        console.log("No data available");
                                    }
                                    
                                })
                            }
            }
            processArray().then(() => {
                sendoutput()
              });

                    })
                }else{
                    if(message.includes("[")||message.includes("]")||message.includes("'")||message.includes("\"")||message.includes("(")||message.includes(")")||message.includes("^")||message.includes(":")||message.includes(";")||message.includes("="))
                    {
                        const reply = "the keyword that you entered is wrong, so please check the word that you entered";
                    }
                    else{
                        console.log("no line present");
                    }                }
                
                
            }
            }).catch((error) => {
                console.log(error)
            })
}

function sendoutput()
{
    setTimeout(() => {
       let retrievedData = JSON.parse(localStorage.getItem("correctsy"));
        let usersyn = JSON.parse(localStorage.getItem("givensyntax"));
        
        let fire=Array.from(retrievedData);
        let user=Array.from(usersyn);
        
        let skip = 0;
	    let flage = 0;
	    let upcase = 0;

        for(let i=0;i<fire.length;i++){
            if(skip==0)
            {
                    if(fire[i]!=(user[i]))
                    {
                        if(fire[i]=="^")
                        {
                            upcase=upcase+1;
                            for(let j=i;j<user.length;j++)
                            {
                                if(fire[i+1]!=user[j])
                                {
                                    skip =skip+1;
                                    flage=0;
                                }
                                else if(fire[i+1]==user[j])
                                {
                                    break;
                                }
                                else if(user.length == j)
                                {
                                    reply=fire[i+1];
                                 //   print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"  \"");
                                 print("In the given program line you missed some character so replace the program line with the character given bellow and try again");
                                 print("The Character That You Missed   "+reply+" ")
                                 flage =1;
                                    break 
                                }
                            }
                        }
                        else if(fire[i]=="null")
                        {
                            reply=fire[i];
                           // print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"  \"");
                           print("In the given program line you missed some character so replace the program line with the character given bellow and try again   ");
                           
                           setTimeout(() => {
                             print("The Character That You Missed   "+reply+" ")
                             }, 7500);

                           console.log(reply);
                            console.log(2);
                                   
                            flage=1;
                            break;
                        }
                        else
                        {
                            reply=fire[i];
                           // print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"  \"");
                            print("In the given program line you missed some character so replace the program line with the character given bellow and try again   ");
                             setTimeout(() => {
                                 print("The Character That You Missed   "+reply+" ")
                             }, 7500);
                            console.log(3);
                                  
                            flage=1;
                            break;
                        }
                    }
            }
            else
            {
                if (upcase == 3){
                    upcase = upcase-1;
                }
                try{
                    if(fire[i]!=user[i+skip-upcase])
                    {
                        let temp = skip;
                        if(fire[i]=="^")
                        {
                            upcase=upcase+1;
                            for(let j=i;j<user.length;j++)
                            {
                                if(fire[i+1]!=user[j+temp-1])
                                {
                                    skip=skip+1;
                                    flage=0;
                                }
                                else if(fire[i+1]==user[j+temp-1])
                                {
                                    break;
                                }
                            }
                        }
                        else if(fire[i]=="null")
                        {
                            reply=fire[i];
                            //print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"   \"");
                            print("In the given program line you missed some character so replace the program line with the character given bellow and try again   ");
                            setTimeout(() => {
                                 print("The Character That You Missed   "+reply+" ")
                                 }, 7500);
                            console.log(4);
                                    
                            flage =1;
                            break;
                        }
                        else{
                            reply=fire[i];
                           // print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"  \"");
                           print("In the given program line you missed some character so replace the program line with the character given bellow and try again   ");
                           setTimeout(() => {
                             print("The Character That You Missed   "+reply+" ")
                             }, 7500);
                            console.log(5);
                                    
                            flage =1;
                            break;
                        }
                    }
                }
                catch(err)
                {
                                reply=fire[i];
                               // print("you may be missed some of the characters.Here are some of the characters you could add.  \" "+reply+"  \"");
                               print("In the given program line you missed some character so replace the program line with the character given bellow and try again   ");
                               setTimeout(() => {
                                 print("The Character That You Missed   "+reply+" ")
                                 }, 7500);
                                console.log(6);
                                flage =1;
                                break;
                }
            }
           
        }
if(flage==0)
{
  if(fire[fire.length - 1] == user[user.length - 1]){
    const schat ="there is no error present in the given line, there is a chance of missing comma in the previous line, so check the previous line "
    print(schat)
}
else{
    const schat ="there is a unwanted symbols are character present after the syntax"
    print(schat)
}
    }            
                },1000);
}

function print(reply)
{
 // const delay = msgText.split(" ").length * 100; speak(msgText);
 // setTimeout(() => {
      appendMessage(BOT_NAME, BOT_IMG, "left", reply);
      speak(reply)
 // }, delay);
}


function typeoferror(message)
{
  console.log(message.length);
  console.log(message);
 

  const errortype=["assertionerror","attributeerror","typeerror","floatingpointerror","generatorexiterror","importerror","indexerror","keyerror","keyboardinterrupterror","memoryerror","nameerror","notimplementederror","overflowerror","referenceerror","runtimeerror","stopiterationerror","syntaxerror","indentationerror","syntaxerror","systemexiterror","unboundlocalerror","unicodeerror","unicodeencodeerror","unicodedecodeerror","unicodetranslateerror","valueerror","zerodivisionerror","assertion","attribute","type","floatingpoint","generatorexit","import","index","key","keyboardinterrupt","memory","name","notimplemented","overflow","reference","runtime","stopiteration","syntax","indentation","syntax","systemexit","unboundlocal","unicode","unicodeencode","unicodedecode","unicodetranslate","value","zerodivision"]
  console.log(errortype.length);
  let dis=999;
  let usertypeword=""
    for(var i=0;i<message.length;i++)
    {
      for(var j=0;j<errortype.length;j++)
      {
        let distance = getLevenshteinDistance(message[i],errortype[j]);    

         if(dis>=distance)
         {
          window.localStorage.removeItem('correcttype')
          errortypefind="  "
         dis=distance;
         sy=errortype[j];
         usertypeword=message[i]
        localStorage.setItem("correcttype", JSON.stringify(sy));
         errortypefind=errortype[j];
         
        }

      }
    }

    for(var j=0;j<errortype.length;j++)
    {
        let distance = getLevenshteinDistance(usertypeword,errortype[j]);     

         if(2>=distance)
         {
          window.localStorage.removeItem('correcttype')
          errortypefind1="  "
         dis=distance;
         sy=errortype[j];
        localStorage.setItem("correcttype", JSON.stringify(sy));
         errortypefind1=errortype[j];
         console.log(errortypefind1) 
        

      }
    }
    if(errortypefind1!="")
    {
    errreplysend(errortypefind1);
    }
}

//profram line present
{
  
function prgmline(message)
{
     console.log("6 pass")
  const key=(message.includes("False")||message.includes("True")||message.includes("assert")||message.includes("async")||message.includes("await")||message.includes("break")||message.includes("class")||message.includes("def")||message.includes("del")||message.includes("elif")||message.includes("else")||message.includes("for")||message.includes("from")||message.includes("global")||message.includes("if")||message.includes("import")||message.includes("nonlocal")||message.includes("not")||message.includes("pass")||message.includes("print")||message.includes("raise")||message.includes("return")||message.includes("try")||message.includes("while")||message.includes("yield")||message.includes("with"))    
console.log(key)
  if(key==true)
  {
   
        const input = message;
        const words = input.split(" ");
        console.log(words);

        const keyword=["False","True","assert","async","await","break","class","def","del","elif","else","for","from","global","if","import","nonlocal","not","pass","print","raise","return","try","yield","with"]    
        let keyuse=""
        for(var k=0;k<keyword.length;k++)
        {
          const c1=message.includes(keyword[k])
          if(c1==true)
          {
            keyuse=keyword[k];
           
          }
        }

       
    
        const target1 = keyuse;
        let index1 = -1;
        for(let i=0;i<words.length;i++){
            if(words[i].startsWith(target1)){
                index1 = i;
                break;
            }
        }
    
        const index2 = words.length;
        
    
        const btwn = words.slice(index1,index2);
        const joinwords = btwn.join(" ");
        console.log(joinwords);
        finalword=joinwords;

        getsyn(finalword,"null")
        
        

    
      
  }
  else if(message.includes("="))
  {
    if(message.includes("{")||message.includes("}")||message.includes("[")||message.includes("]"))
    {
        const input = message;
        const words = input.split(" ");
        const target1 = "=";
        let index1 = -1;
        for(let i=0;i<words.length;i++){
            if(words[i].includes(target1)){
                index1 = i;
                break;
            }
        }
        
        const startcheck=words[index1].split("");
        if(startcheck[0]=="=")
        {
            index1=i-1;
        }


        const index2 = words.length;
        
    
        const btwn = words.slice(index1,index2);
        const joinwords = btwn.join(" ");
        console.log(joinwords);
        finalword=joinwords;

        getsyn(finalword,"^")
    }
  }
  else{
    if(message.includes("[")||message.includes("]")||message.includes("'")||message.includes("\"")||message.includes("(")||message.includes(")")||message.includes("^")||message.includes(":")||message.includes(";")||message.includes("="))
    {
        const reply = "the keyword that you entered is wrong, so please check the word that you entered";
        print(reply)
    }
    else{
        console.log("no line present");
    }

  }
}
}
//funtions end

//bot respond 

function botResponse() {
  const msglow=msgText.toLowerCase();
  errortypefind1=""    
    const usersplit=msglow.split(" ")
    typeoferror(usersplit);

  const linecheck=(msgText.includes("False")||msgText.includes("True")||msgText.includes("assert")||msgText.includes("async")||msgText.includes("await")||msgText.includes("break")||msgText.includes("class")||msgText.includes("def")||msgText.includes("del")||msgText.includes("elif")||msgText.includes("else")||msgText.includes("for")||msgText.includes("from")||msgText.includes("global")||msgText.includes("if")||msgText.includes("import")||msgText.includes("nonlocal")||msgText.includes("not")||msgText.includes("pass")||msgText.includes("print")||msgText.includes("raise")||msgText.includes("return")||msgText.includes("try")||msgText.includes("while")||msgText.includes("yield")||msgText.includes("with")||msgText.includes("=")||msgText.includes(":")||msgText.includes(";")||msgText.includes("\"")||msgText.includes("[")||msgText.includes("]")||msgText.includes(")")||msgText.includes("(")||msgText.includes("&"))    
  if(linecheck==true)
  {
    prgmline(msgText);
    }
else{

    if(errortypefind1=="")
    {


        if(msglow.includes("hi")|| msglow.includes("hai")|| msglow.includes("hey")|| msglow.includes("hello")|| msglow.includes("start"))
        {
            const BOT_REPLY = [
                "Hi I am Glitch Mender  How can I help You?",
                "Hello there, I am Glitch Mender Need some help?",
                "Hey buddy, I am Glitch Mender  Want some help?",
                "Hi! How can I assist you today?",
                "Hello! I’m here to help with any information or assistance you may need."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);

        }

        else if(msglow.includes("how are you")|| msglow.includes("what's up")|| msglow.includes("how do you do"))
        {
            const BOT_REPLY = [
                "I am good. ^ Got work for me?",
                "Fine and Happy to help you...",
                "Having a good day buddy...",
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("who are you"))
        {
            const BOT_REPLY = [
                "I am Glitch Mender.^ I am an AI to help with programming errors.",
                "I am Glitch Mender.^ Coding helper AI.",
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what do you do")|| msglow.includes("what will you do")|| msglow.includes("what's your work"))
        {
            const BOT_REPLY = [
                "I can rectify errors in your programs.",
                "I can give you information about the error you are facing.",
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("do you correct error")|| msglow.includes("i have an error in my program")|| msglow.includes("i have an error"))
        {
            const BOT_REPLY = [
                "I can correct your error.^Kindly provide the error line.",
                "I am here to rectify your errors.^Kindly provide error type or the error line.",
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is your name"))
        {
            const BOT_REPLY = [
                "I am Glitch Mender",
                "My name is Glitch Mender"
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what do you offer"))
        {
            const BOT_REPLY = [
                "I provide solution/suggestion for the python code and detect the error what you made."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is machine mearning")|| msglow.includes("what is ml")|| msglow.includes("what is machine learning")|| msglow.includes("what is machine learning"))
        {
            const BOT_REPLY = [
                "Machine Learning (ML) is a type of Artificial Intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed. It is a method of teaching computers to learn from data, without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is ai")|| msglow.includes("what is an ai")|| msglow.includes("what is artificial intelligence")|| msglow.includes("what is artificial intelligence"))
        {
            const BOT_REPLY = [
                "AI is the field of science which concerns itself with building hardware and software that replicates the functions of the human mind."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is chat bot")|| msglow.includes("what is chatbot"))
        {
            const BOT_REPLY = [
                "   A chatbot is a computer program that uses natural language processing (NLP) and machine learning (ML) to simulate human conversation. It can be integrated into messaging platforms, mobile apps, or websites to provide automated customer service, conduct e-commerce transactions, or provide information and recommendations. Chatbots can understand and respond to text or voice input, and can be programmed to understand and respond to specific keywords or phrases."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is chatai")|| msglow.includes("what is chatai"))
        {
            const BOT_REPLY = [
                "ChatAI, also known as a chatbot, is a type of AI-powered software that can simulate conversation with human users through text or voice interactions. Chatbots can be integrated into various platforms, such as websites, mobile apps, messaging apps, and virtual assistants. They can be used for a wide range of purposes, such as customer service, e-commerce, lead generation, and personal assistance.	"
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is the meaning of life"))
        {
            const BOT_REPLY = [
                "    The meaning of life is a philosophical question that has been debated throughout human history. Different cultures and individuals have their own perspectives and beliefs on the subject. Some may argue that the meaning of life is to find happiness and fulfillment, while others may argue that it is to fulfill a specific purpose or destiny. Some religious beliefs hold that the meaning of life is to serve a higher power or to attain spiritual enlightenment. Ultimately, the meaning of life is a personal belief that can differ greatly from person to person."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is the purpose of this chatai"))
        {
            const BOT_REPLY = [
                " The purpose of this ChatAI is to detect the error in python language and suggest the  solution for the error."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what is the difference between ai and ml"))
        {
            const BOT_REPLY = [
                " AI is a broad field that involves creating machines or computer systems that can perform tasks that normally require human intelligence, such as understanding natural language, recognizing images, or making decisions.^ML, on the other hand, is a specific subset of AI that focuses on creating algorithms and models that enable computers to learn from data and improve their performance over time without being explicitly programmed."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what are the benefits of using a chatai")|| msglow.includes("what are the benefits of using a chatbot"))
        {
            const BOT_REPLY = [
                "The benefits of using ChatAI are Data collection,Increased engagement,Flexibility,Improving Scalability, customer service,Multi-language support,Increased efficiency,Personalized interactions."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("what are the limitations of chatai"))
        {
            const BOT_REPLY = [
                "The limitations of chatAI are Limited understanding of context,Limited understanding of natural language,Lack of empathy,Limited ability to handle complex tasks,Limited ability to improvise,Limited ability to learn and improve over time,Privacy and security concerns,Dependence on large data sets."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("who are you"))
        {
            const BOT_REPLY = [
                "  I am the Glitch Mendor.I provide solution/suggestion for the python code and detect the error what you made."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("are you a human")|| msglow.includes("are you a robot"))
        {
            const BOT_REPLY = [
                "I am a robot, but I’m a good one. Let me prove it. How can I help you?"
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else if(msglow.includes("can you give me a definition of a word")|| msglow.includes("can you help me with a math problem")|| msglow.includes("can you tell me a joke"))
        {
            const BOT_REPLY = [
                "No I am here to rectify your programming errors."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }

        else{
            const BOT_REPLY = [
                "Your information is not sufficient.Provide me with furthur more information or correct the information given.",
                "I need more information to correct your code.You may copy your error or your code to get the solution.",
                "Give me more information to get solution for the error.Try pasting your code or your error message."
            ]
            const r = random(0, BOT_REPLY.length - 1);
            const msgText = BOT_REPLY[r];
                appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
                speak(msgText);
        }
    }
  }
}