codemasher
==========

Simple schedule display for Codemash 2014 using data from Eventboard API.

This was a very small page that I wrote using the info at https://gist.github.com/coreyhaines/8317487 sent to me by Corey Haines. I wrote in 5 minute intervals between sessions. 

A couple of things to note:

* I was having trouble bringing in the JSON via Angular or JQuery because of cross-domain issues (even using JSONP) so I used the rails-api to create a proxy API.
* This was my first time using rails-api. I was surprised how easy it was to get the proxy up and running.
* It uses rails-api and AngularJS.
* It's pretty hacked together, parsing the JSON in the JS and creating the object hierarchy that I wanted from the data.
* I didn't take any time to cleanse the data. 
* The rails-api code is running on Heroku, while the html and JS are hosted elsewhere, HOWEVER, the html and JS are stored in public under index.html and the app folder for the purposes of pushing to git.

This is running on http://codemashr.com.

Feel free to fork and do a pull request. I would love to see how others approach this or add to it. 
