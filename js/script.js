firsticonlarge


let belal  = document.getElementById("belal")
let desc = document.querySelector(".desc")
let Certificat = document.querySelector("#cetificate")
let Location = document.querySelector("#location")
let Hired = document.querySelector("#hired")
let Paid = document.querySelector("#paid")
let Duration = document.querySelector("#duration")
let FirstResponse = document.querySelector("#firstresponce")
let SecResponse = document.querySelector("#secresponse")
let ThirResponse = document.querySelector("#thirresponse")
let ForResponse = document.querySelector("#forresponse")
let FirRequire = document.querySelector("#firrequire")
let SecRequire = document.querySelector("#secrequire")
let ThirRequire = document.querySelector("#thirrequire")
let FirExpected = document.querySelector("#firexpected")
let SecExpected = document.querySelector("#secexpected")
let ThirExpected = document.querySelector("#thirexpected")
let ForExpected = document.querySelector("#forxpected")
let FivExpected = document.querySelector("#fivexpected")
let SixExpected = document.querySelector("#sixexpected")
let About = document.querySelector("#about")
let Nam = document.querySelector("#nam")
let Job = document.querySelector("#job")
let Company = document.querySelector("#company")
let PHONE = document.querySelector("#phonenumber")
let Email = document.querySelector("#email")
let FirExpertise = document.querySelector("#firexpertise")
let SecExpertise = document.querySelector("#secexpertise")
let ThirExpertise = document.querySelector("#thirexpertise")
let DescProfile = document.querySelector("#descprofile")
let View = document.querySelector("#viewprofile")
let AboutYou = document.querySelector("#abuotyou")
let PerOne = document.querySelector("#perone")
let DescForPerOne = document.querySelector("#descforperone")
let PerTwo = document.querySelector("#pertwo")
let DescForPerTwo = document.querySelector("#descforpertwo")
let PerThree = document.querySelector("#perthree")
let DescForPerThree = document.querySelector("#descforperthree")
let SEND = document.querySelector("#send")
let Edit = document.querySelector("#edit")
let Setting = document.querySelector("#setting")
let Term = document.querySelector("#term")
let Post = document.querySelector("#post")
let Book = document.querySelector("#book")
let Editt = document.querySelector("#editt")
let Settingg = document.querySelector("#Settingg")
let Termm = document.querySelector("#termm")
let Postt = document.querySelector("#postt")
let FirstIcon = document.querySelector("#firsticon")
let IconPersonOne = document.querySelector("#iconPersonOne")
let IconPersonTwo = document.querySelector("#iconperesontwo")
let IconPersonThree = document.querySelector("#iconpersonthree")
let FirstIconLarge = document.querySelector("#firsticonlarge") 



var arr=[
    {"name" : " Belal Shwani"},
    {"desc" : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias, voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas sum dolorsit amet consectetur adipisicing elit. Consequuntur molestias,voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas quasi quasi reprehenderit sequi. Nisi ex culpa minus qui labore? "} ,
    {"cetificate" : " Awarded"} ,
    {"location" : " Remote"} ,
    {"hired" : " yes"},
    {"paid" : " 200sdg/ H"},
    {"duration" : " open duration"},
    {"firstresponse" : "Write software application and programs for backend/frontendpurposes."},
    {"secresponse" : "Analyse programs and apps to improve thier futures and functionalities."} , 
    {"thirresponse" : "Test & debug programs and any reported bugs."} ,
    {"forreponse" : "Collaborate with thr tech team to improve the performance, efficiency, andscalability of our tools."},
    {"firrequire" : "knowledge of APIs and webservices."},
    {"secrequire": "knowledge of relational Databases (MySQL, PostgreSQL, SQL server ....) and SQL language."},
    {"thirrequire" : "knowledge of NoSQL databases is a plus."},
    {"firexpected" : "An opportunity to work with remarkably talented colleagues."},
    {"secexpected" : "vast growth potential in every aspect."},
    {"thirexpected" : "15% target bonus with further upside."},
    {"forxpected" : "Employee share scheme participation."},
    {"fivexpected" : "International relation support."},
    {"sixexpected" : "Opportunity to be embedded within a commercial team for those strong with strong commercial interset."},
    {"about" : "About Belal Shwani"},
    {"nam" : "Balqees Hamdi"},
    {"job" : "Software Engineer"},
    {"company" : "EIT"},
    {"phonenumber" : "099547312"},
    {"email" : "Balqeessabir@gmail.com"},
    {"firexpertise" : "Software Engineering"},
    {"secexpertise" : "Front End Developer"},
    {"thirexpertise" : "UI/UX Design"},
    {"descprofile" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate soluta, ullam tempore error quidem sit mollitia,vero ratione corporis in ipsum atque, harum laboriosam veritatis sapiente ab nihil debitis."},
    {"viewprofile" : "View profile"},
    {"aboutyou" : "About belal shwani"},
    {"PerOne" : "Nora Ali"},
    {"descforperone" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"pertwo" : "Nora Ali"},
    {"descforpertwo" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"perthree" : "Nora Ali"},
    {"descforperthree" : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"},
    {"send" : "Send"},
    {"edit" : "Edit Mentoring opportunity"},
    {"setting" : "Setting"},
    {"term" : "Term and privacy"},
    {"post" : "Post a new opportunity"},
    {"editt" : "Edit Mentoring opportunity"},
    {"Settingg" : "Setting"},
    {"termm" : "Term and privacy"},
    {"postt" : "Post a new opportunity"},


]

window.onload = function (){
    belal.innerHTML = arr[0].name ;
    desc.innerHTML = arr[1].desc  ;
    Certificat.innerHTML = arr[2].cetificate ;
    Location.innerHTML = arr[3].location ;
    Hired.innerHTML = arr[4].hired ;
    Paid.innerHTML = arr[5].paid ;
    Duration.innerHTML = arr[6].duration ;
    FirstResponse.innerHTML = arr[7].firstresponse ;
    SecResponse.innerHTML = arr[8].secresponse ;
    ThirResponse.innerHTML = arr[9].thirresponse ;
    ForResponse.innerHTML = arr[10].forreponse ;
    FirRequire.innerHTML = arr[11].firrequire ;
    SecRequire.innerHTML = arr[12].secrequire ;
    ThirRequire.innerHTML = arr[13].thirrequire;
    FirExpected.innerHTML = arr[14].firexpected;
    SecExpected.innerHTML = arr[15].secexpected ;
    ThirExpected.innerHTML = arr[16].thirexpected;
    ForExpected.innerHTML = arr[17].forxpected;
    FivExpected.innerHTML = arr[18].fivexpected;
    SixExpected.innerHTML = arr[19].sixexpected;
    About.innerHTML = arr[20].about;
    Nam.innerHTML = arr[21].nam;
    Job.innerHTML = arr[22].job;
    Company.innerHTML = arr[23].company;
    PHONE.innerHTML = arr[24].phonenumber ;
    Email.innerHTML = arr[25].email ;
    FirExpertise.innerHTML = arr[26].firexpertise ;
    SecExpertise.innerHTML = arr[27].secexpertise ;
    ThirExpertise.innerHTML = arr[28].thirexpertise ;
    DescProfile.innerHTML = arr[29].descprofile ;
    View.innerHTML = arr[30].viewprofile;
    AboutYou.innerHTML = arr[31].aboutyou;
    PerOne.innerHTML = arr[32].PerOne ;
    DescForPerOne.innerHTML = arr[33].descforperone;
    PerTwo.innerHTML = arr[34].pertwo;
    DescForPerTwo.innerHTML = arr[35].descforpertwo ;
    PerThree.innerHTML = arr[36].perthree ;
    DescForPerThree.innerHTML = arr[37].descforperthree ;
    SEND.innerHTML = arr[38].send ;
    Edit.innerHTML = arr[39].edit ;
    Setting.innerHTML = arr[40].setting ;
    Term.innerHTML = arr[41].term ;
    Post.innerHTML = arr[42].post ;
    FirstIconLarge.innerHTML = `<i  class=" fa-solid fa-book-bible"></i>` ;
    Book.innerHTML = `<i  class=" fa-solid fa-book-bible"></i>` ;
    Editt.innerHTML = arr[43].editt ;
    Settingg.innerHTML = arr[44].Settingg ;
    Termm.innerHTML = arr[45].termm ;
    Postt.innerHTML = arr[46].postt ;
    IconPersonOne.innerHTML = `<i class="imgperone me-4 fa-solid fa-circle" ></i>` ;
    IconPersonTwo.innerHTML = `<i class="imgpertwo me-4 fa-solid fa-circle" ></i>` ;
    IconPersonThree.innerHTML = `<i class="imgperone me-4 fa-solid fa-circle" ></i>` ;

}





















// var x = document.querySelector(".profile")
// x.addEventListener("click" , y)
// function y(event){
//     console.log(event.offsetX);
// }