## Docker Development Environment

Terra provides a docker development environment that allows developers access to a common environment to develop Terra components regardless of the OS they are developing on.

In each Terra repository there is a docker-compose.yml file that defines several services, most importantly ```dev``` and ```term```.

To build all the services in the docker-compose file, run:
```
docker-compose build
```

### Dev Service
The dev service provides a linux environment with node and npm pre-installed. By default the dev service volume mounts the entire local repo directory into the docker container to enable hot reloading during development.

To get started developing, run:

```bash
docker-compose up dev
```
This will start the docker container for the repo, run npm install (if ```node_modules``` are not detected) and start the dev server using ```npm run start```. Then you're free to use your favorite editor to manipulate the code in the repo.

Terra's webdriver.io integration tests must run against selenium standalone-chrome node. As a result as separate service is required to run wdio tests.

### Term Service
The term service is just like the dev service but swaps out the command to launch the zsh terminal instead of starting the server. You can use this terminal just like you would use your local terminal. You can even run wdio tests thanks to the standalone-chrome service that is started alongside the dev service.

To run the term service you must use the ```docker-compose run``` command:
```bash
docker-compose run  --service-ports term
```
The ```--service-ports``` flag runs the command with the service's ports enabled and mapped to the host.

There a couple of additional methods of running the terminal on the docker container. Either Run a terminal through docker-compose or use docker to attach to a running docker image.

To launch to the terminal on the dev image, run:

```
docker-compose run --service-ports dev /bin/zsh
```
To attach to a running docker container, run:

```
docker exec -it <hash for running docker container> /bin/zsh
```

### After development
After you've finished running development (or periodically), run:
```bash
docker-compose down
```
This will stop the standalone-chrome service that will otherwise be left running on your device.

### Sharing ```node_modules```
The docker development environment intentionally will write out ```node_modules``` to the shared host volume. This provides several benefits:
* Simpler volume mounting, everything edited in the repo is shared to the docker container.
* Node module cacheing. For the development containers ```npm install``` is run at run time of the docker container (opposed to build time). This is done to allow ```npm install``` to discover local dependencies. To avoid long startup times ```node_modules``` are cached to the local volume. If ```node_modules``` are found ```npm install``` is not run at run time.

### Local dependencies
Local dependencies are supported in the docker development environment but require an additional step. For the docker container to be able to find the local dependency, it must be volume mounted to the docker container.

For example:

package.json
```json
"dependencies": {
    "classnames": "file:../classnames",
}
```

docker-compose.yml
```yml
dev:
  image: "terra-ui:dev"
  build:
    context: ./
    args:
      - npm_install=false
  ports:
    - 8080:8080
  volumes:
    - .:/opt/module
    # This is the local dependency volume mount.
    - ../classnames:/opt/classnames
```

### Troubleshooting
#### Error: Missing binding
This error means that a node_module install for one environment is being run in another. Likely this means that you ran npm install on your host OS and are now trying to use that module in your docker container or the opposite. To resolve the issue delete the ```node_modules``` folder and run npm_install where you are attempting to start the server.

#### Dependency changes not taking effect.
npm install is triggered at run time of the docker container. If a ```node_modules``` directory is found npm install will not run. If dependencies have changed the script checking for ```node_modules``` isn't smart enough to re-run npm install. To resolve the issue either term servcie and run npm install or delete the ```node_modules``` folder and rerun the docker container.
