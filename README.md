# Liberator web frontend

Angular application for [Liberator](https://github.com/libreoss/liberator) project.

### Setup and requirements

NodeJS is all you'll need for frontend development. You will most likely need
Liberator api instance either on remote server or as Vagrant machine. See Liberator
repo for more details.

Installing nodejs:

   - GNU/Linux users are advised to install from their distributions' package manager.
   - Windows users should follow [installation instructions](nodejs.org/download/)

Once you have node up and running, you need to install gulp, a node module
that is used to setup small dev server and automate majority of frontend-related
tasks.

   - `npm install -g gulp`

After that's done, `cd` to this repo's root folder and run `npm start` and point
your browser to `https://localhost:9000`. You'll need to accept SSL certificate
we use for development first.

For contributing, see [Contributing guidelines](CONTRIBUTING.md).

### Deployment 

Change `API_URL` constant for your network settings in app/scripts/app.js and then run 

   - `docker-compose up`

to run frontend serving web server. It will serve on port 80 so you can access it through http://localhost:80
