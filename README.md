android -> playstore -> facebookApp
nodejs -> npm -> angular

SetUp:
------
1) Download and install nodejs

    check: node -v
           npm -v

2) Install angular

    npm install -g @angular/cli@15

    check: ng version

3) create new app

    cd desktop
    ng new my-app

4) start the server

    ng serve

    check: in browser localhost:4200

**) allow scripts exection form powershell
    1) open powershell as administrator
    2) run command:  set-executionPolicy unrestricted


Angular: Angular is a framework to build single page application.

    Framework: combinaiton of langulages+libraries
        HTML, CSS, JS, TS, RXJS

GIT:
====

1) laptopGitSoftware <-> github site

    git config --global user.name  xxxxxxxxxxxxxx
    git config --global user.email xxxxxxxxxxxxxx

    check: git config --list

2) my-app  <-> repository

    git init
    git remote add origin xxxxxxxxxxxxx

    check: git remote -v

3) code sync

    git add .                      //  changes -> stagedChanged
    git commit -m "xxxxxxxx"       //  stagedChange -> 0
    git push                       //  100%

    ***) first time suggestion command with -f


4) with branches

    1) create branch in github
    
    2) get branch in local and shift to that branch

            git fetch
            git checkout XXXXX

            check: git branch

    3) after code complete:

            git add .
            git commit -m "xxxxxxx"
            git pull origin master
            git push
        
    4) raise pull request, add merge.




API INTEGRATION:
================

0) create component and service

1) import HTTPClient module

2) Inject HttpClient service in VehicleService
    get, post, put, delete

3) do api call with get that will return observable of data

4) Inject vehicleService in VehicleCompoennt
   and subscribe to listen the data

5) loop in html to display the data.





1)  get     get(url)                         all

2)  get     get(url/id)                      single

3)  get     get(url?filter=red)              filtering/searching

4)  get     get(url?limit=10&page=1)         pagination 

5)  get     get(url?sortBy=color&order=asc)  sorting

6)  post    post(url,data)                   create

7)  put     put(url/id,data)                 update

8)  delete  delete(url/id)                   delete


1) FormGroup

2) NestedFormGroup

3) FormArray

4) Dynamic Form

5) Form Validations

6) Custom Validators