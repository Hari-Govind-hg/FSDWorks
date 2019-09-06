trainer = [
    {
        trainerId:1,
        name:'Waleed',
        timeBooked:0,
        selected:0,
        subTeach:['101-Maths']

    },
    {
        trainerId:2,
        name:'Sugnan',
        timeBooked:0,
        selected:0,
        subTeach:['102-Java']

    },
    {
        trainerId:3,
        name:'Mohsin',
        timeBooked:0,
        selected:0,
        subTeach:['103-FSD']
    },

]

classTable=[
    {
        clno:1,
        tableloc:[],
        tabledat:[]
    },
    {
        clno:2,
        tableloc:[],
        tabledat:[]
    },
    {
        clno:3,
        tableloc:[],
        tabledat:[]
    }
]

const subjects = [
    {
        subId:101,
        subName:'Maths'
    },
    {
        subId:102,
        subName:'Java'
    },
    {
        subId:103,
        subName:'C'
    }
]

const pushTrainerToLocal=()=>{
    // let trainers=[];
    if(localStorage.getItem('trainers') != null)
    {
        localStorage.setItem('trainers',JSON.stringify(trainer));
        // localStorage.clear();
        // console.log(trainer);
    }
    else{
        localStorage.setItem('trainers',JSON.stringify(trainer));
        // localStorage.clear();
        // console.log(trainer);
    }
}
pushTrainerToLocal();
const pushClassToLocal=()=>{
    if(localStorage.getItem('classes')!=null)
    {
        clsstble = JSON.parse(localStorage.getItem('classes'));
        localStorage.setItem('classes',JSON.stringify(classTable));
    }
}
var cl;
function accesser(){
    var tch=document.getElementById("class");
    var classChoice=tch.options[tch.selectedIndex].value;
    console.log(classChoice);
    renderTable(classChoice);
    if(classChoice=='Class1'){cl=1};
    if(classChoice=='Class2'){cl=2};
    if(classChoice=='Class3'){cl=3};
    console.log(cl);
    
}


const renderTable = (users)=>{
    document.getElementById('emps').innerHTML = `<table border="1" class="table table-bordered table-responsive-md table-striped text-center">
                                                    <th>${users}</th>
                                                    <tr>
                                                        <th>TimeSlot</th>
                                                        <th>Monday</th>
                                                        <th>Tuesday</th>
                                                        <th>Wednesday</th>
                                                        <th>Thursday</th>
                                                        <th>Friday</th>
                                                    </tr>
                                                    <tr>
                                                        <th>10-11</th>
                                                        <th id="11" onclick='dispTrainer(1,1)'></th>
                                                        <th id="21" onclick='dispTrainer(2,1)'></th>
                                                        <th id="31" onclick='dispTrainer(3,1)'></th>
                                                        <th id="41" onclick='dispTrainer(4,1)'></th>
                                                        <th id="51" onclick='dispTrainer(5,1)'></th>
                                                    </tr>
                                                    <tr>
                                                        <th>11-12</th>
                                                        <th id="12" onclick='dispTrainer(1,2)'></th>
                                                        <th id="22" onclick='dispTrainer(2,2)'></th>
                                                        <th id="32" onclick='dispTrainer(3,2)'></th>
                                                        <th id="42" onclick='dispTrainer(4,2)'></th>
                                                        <th id="52" onclick='dispTrainer(5,2)'></th>
                                                    </tr>
                                                    <tr>
                                                        <th>12-1</th>
                                                        <th id="13" onclick='dispTrainer(1,3)'></th>
                                                        <th id="23" onclick='dispTrainer(2,3)'></th>
                                                        <th id="33" onclick='dispTrainer(3,3)'></th>
                                                        <th id="43" onclick='dispTrainer(4,3)'></th>
                                                        <th id="53" onclick='dispTrainer(5,3)'></th>
                                                    </tr>
                                                    <tr>
                                                        <th>2-3</th>
                                                        <th id="14" onclick='dispTrainer(1,4)'></th>
                                                        <th id="24" onclick='dispTrainer(2,4)'></th>
                                                        <th id="34" onclick='dispTrainer(3,4)'></th>
                                                        <th id="44" onclick='dispTrainer(4,4)'></th>
                                                        <th id="54" onclick='dispTrainer(5,4)'></th>
                                                    </tr>
                                                    <tr>
                                                        <th>3-4</th>
                                                        <th id="15" onclick='dispTrainer(1,5)'></th>
                                                        <th id="25" onclick='dispTrainer(2,5)'></th>
                                                        <th id="35" onclick='dispTrainer(3,5)'></th>
                                                        <th id="45" onclick='dispTrainer(4,5)'></th>
                                                        <th id="55" onclick='dispTrainer(5,5)'></th>
                                                    </tr>
                                                    
                                               </table>`;
}

var gday,gsession=0;
function dispTrainer(day,session){
    document.getElementById('formMenu').style.display='block';
    console.log(day);
    gday=day;
    gsession=session;
    console.log(session);
    if(localStorage.getItem('trainers')!=null){
        trainer=JSON.parse(localStorage.getItem('trainers'));
        console.log(trainer);
        let _trainers= `<option value='none'>-select-</option>`;
        trainer.forEach(t => {
            _trainers += `<option value='${t.name}'>${t.name}</option>`;
        });
        document.getElementById("trainerlist").innerHTML= _trainers;
    }
}

var set=0;
function setter(){
    set=1;
    if(localStorage.getItem('trainers')!=null){
    trainer=JSON.parse(localStorage.getItem('trainers'));
    var tchoice=document.getElementById("trainerlist");
    var tchrChoice=tchoice.options[tchoice.selectedIndex].value;
    console.log(tchrChoice);
    document.getElementById("subjectlist").innerHTML= '';
    var _subjects='';
    trainer.forEach(t=>{
        if(t.name==tchrChoice){
            t.selected=1;
           _subjects=`<option value='none'>-select-</option>`;
            t.subTeach.forEach(s=>{
                _subjects += `<option value='${s}'>${s}</option>`;
            });
            document.getElementById("subjectlist").innerHTML= _subjects;
        }
        t.timeBooked=0;
    });
    // document.getElementById("subjectlist").innerHTML= _subjects;
    console.log(trainer);
    localStorage.setItem('trainers',JSON.stringify(trainer));
}
}

function setterSub(){

    if(localStorage.getItem('trainers')!=null){
        trainer=JSON.parse(localStorage.getItem('trainers'));
    var schoice=document.getElementById("subjectlist");
    var subChoice=schoice.options[schoice.selectedIndex].value;
    console.log(subChoice);
    trainer.forEach(t=>{
        if(t.selected==1)
        {
            t.timeBooked=subChoice;
        }
    });
    localStorage.setItem('trainers',JSON.stringify(trainer));
}
}
var index=0;
function saver(){
    if(localStorage.getItem('trainers')!=null){
        trainer=JSON.parse(localStorage.getItem('trainers'));
        printid=gday.toString()+gsession.toString();
        console.log(printid);
        trainer.forEach(t=>{
            if(t.selected==1)
            {
                document.getElementById(printid).innerHTML=t.name+"/"+t.timeBooked;
                t.selected=printid;
                // classTable.tabledat[index]=t.trainerId;
            }
        });
        // classTable.clno=cl;
        // classTable.tableloc[index]=printid;
        localStorage.setItem('trainers',JSON.stringify(trainer));
        console.log(classTable);
        index++;
    }
}

