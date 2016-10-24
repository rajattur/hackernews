## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- On OSX you can alleviate the need to run as sudo. I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
```bash
$ npm install
$ bower install
$ npm start
$ gulp inject
$ gulp sass-watcher
```

## Open bowser
    - localhost:8000
   
## Site layout and functions   
- Clicking on Home tab will bring up TopStories.
    - Shows the title of all top stories.
- Clicking on Any of Story tab
    - Will bring up all the stories.
        - UserName
            - clicking on userName will bring up all the post the user has posted.
        - Story Link on Stories Pages
            - clicking on the story link will take the user to the related story.
        - Comments
            - Shows how many comments a related post has.
            - Clicking on comments link will display all the comments related to the post
        
