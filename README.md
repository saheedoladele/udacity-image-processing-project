# About the Project
The project focus mainly on optimizing images for several uses, like use as a placeholder on a web pages. it actually help prevent several image file, 
as a single image can be resize to serve different purpose.
# Usage
There like 5 image files available in the project, the project only use those five image only, the next version of this app will have the feature to upload additional images. Below are the available images filename
encenadaport.jpg
fjord.jpg
icelandwaterfall.jpg
palmtunnel.jpg
santamonica.jpg
Note: You don't need to include file extention (eg. .jpg) when passing flename parameter to the endpoint.

# API Documentation
End Point: /images
Method: GET

# Query Parameters
finname [string]: name of the image
width [number]: required width
height [number]: required height

# Sample Endpoints
http://localhost:3001/api/images?filename=fjord&width=200&height=400
http://localhost:3001/api/images?filename=fjord&width=200&height=400
http://localhost:3001/api/images?filename=fjord&width=200&height=400

# Script
npm run test: to build and test the app
npm start: to start the production ready
