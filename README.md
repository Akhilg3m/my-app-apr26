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
    git remote add origin https://github.com/Akhilg3m/my-app-apr26.git

    check: git remote -v

3) code sync

    git add .                      //  changes -> stagedChanged
    git commit -m "xxxxxxxx"       //  stagedChange -> 0
    git push                       //  100%
