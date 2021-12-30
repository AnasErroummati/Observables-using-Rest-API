const RxHR = require('@akanass/rx-http-request').RxHR;
let Rx = require("rxjs");
let operator = require("rxjs/operators");
let i = 0
let observable = RxHR.get("http://localhost:8080/ServerSide/functions");
var y = null;
let flag = 0;
ClickEvent = function () {

    if (document.getElementById("button").value == "Start") {
        document.getElementById("button").value = "Stop";
        let interv = document.getElementById("inputt").value;
        obs2 = Rx.interval(interv * 1000)
        console.log("interv " + interv)

         y=obs2.pipe(

            operator.switchMap(
                (event) => {
                    return observable;
                }

            )
        ).subscribe(

            (data) => {
                
                if (data.response.statusCode === 200) {
                    console.log("daz")
                    const words = data.body.split(',');
                    
                    if(flag==1){
                        var myList = document.getElementById('list');
                        myList.innerHTML = '';
                    }
                    
                    for (i = 0; i < words.length; i++) {

                        words[i] = words[i].replace('"', '')
                        words[i] = words[i].replace('"', '')
                        words[i] = words[i].replace('[', '')
                        words[i] = words[i].replace(']', '')
                        let node = document.createElement("LI");
                        var textnode = document.createTextNode(words[i]);
                        node.appendChild(textnode);
                        document.getElementById("list").appendChild(node);
                    }

                    flag = 1;
                }
            },
            (error) => {
                console.log(error);
            }


        )

            ;






    } else {
        document.getElementById("button").value = "Start";
        y.unsubscribe();
    }
};


/*
        console.log("\n")
    T=  ppt('Choose a folder (Enter a space "" if Main Folder is ServerShare) || enter ./ to go to parent Folder \n')

        let promise = new Promise((resolve)=>{
            resolve(client.BrowseAsync({ "arg0": T}))
        })


        await  promise.then(Files=>{
            if (Files == null) {
                console.log("error")
            }else{
                let v=Object.values(Files[0])[0]
                console.log("\n");
                console.log("----------------------Files/SubFolders---------------------------");
                for(var i=0; i< v.length; i++){
                    console.log(v[i]);
                }
            }


        }).catch((error) => {
            console.log(error);
        });*/



