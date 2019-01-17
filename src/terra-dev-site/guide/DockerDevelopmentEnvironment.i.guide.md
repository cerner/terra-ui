## Docker Development Environment

Terra provides a docker development environment that allows developers access to a common environment to develop Terra components regardless of the OS they are developing on.

In each Terra repository there is a docker-compose.yml file that defines several services, most importantly ```dev``` and ```test```.

To build all the services in the docker-compose file, run:
```
docker-compose build
```

### Dev
The dev service provides a linux environment with node and npm pre-installed. By default the dev service volume mounts the entire code repo into the docker container to enable hot reloading during development.

To get started developing, run:

```bash
docker-compose up dev
```
This will start the docker container for the repo, run npm install (if node_modules are not detected) and start the dev server. Then you're free to use your favorite editor to manipulate the code in the repo.

### Test
Terra-toolkit uses docker as part of how wdio tests are run. As a result as separate service is required to run wdio tests (jest or linting can be run via the terminal in the docker dev container.

By default the test service in the terra repos will also start up a standalone chrome seleinum docker container to run wdio tests against.

To test the repo, run:
```bash
docker-compose run test
```
This will start up the standalone chrome docker container, start the test service, run npm install and start running all tests in the repo. Similar to the dev service the entire code repo is volume mounted into the docker container. This is done in order to not require a rebuild of the docker container while developing tests.

After you've finished running tests, run:
```bash
docker-compose down
```
This will stop the standalone-chrome service that will otherwise be left running on your device.


### Terminal access
The docker development environment comes pre-loaded with oh-my-zsh and bash. There are two methods of running the terminal on the docker container. Start the docker container to a terminal session through docker-compose or use docker to attach to a running docker image.

To launch to the terminal on the dev image run:

```
docker-compose run --service-ports dev /bin/zsh
```
To attach to a running docker container run:

```
docker exec -it <hash for running docker container> /bin/zsh
```

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
    - ../classnames:/opt/classnames
```

### Sharing node_modules
The docker development environment intentionally will write out node_modules to the shared host volume. This provides several benefits:
* Simpler volume mounting, everything edited in the repo is shared to the docker container.
* Node module cacheing. For the development containers npm install is run at run time of the docker container (opposed to build time). This is done to allow npm install to discover local dependencies. To avoid long startup times node_modules are cached to the local volume. If node_modules are found npm install is not run at run time.

### Troubleshooting
#### Error: Missing binding
This error means that a node_module install for one environment is being run in another. Likely this means that you ran npm install on your host OS and are now trying to use that module in your docker container or the opposite. To resolve the issue delete the node_modules folder and run npm_install where you are attempting to start the server.

#### Dependency changes not taking effect.
npm install is run at run time of the docker container. If node_modules are found npm install is not run at run time. If dependencies have changed the script checking for node_modules isn't smart enough to re-run npm install. To resolve the issue either open a terminal docker container and run npm install or delete the node_modules folder.
