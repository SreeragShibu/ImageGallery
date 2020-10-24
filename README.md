# ImageGallery
Creating a web app using drf and angular
The app will be an image gallery with ui similar to google search.
DRF will run the backend services and angular will run the frontend UI.

functionalities of the app:
** Can upload new image along with name and description of the server
** Can display the list of images from the sever

APIs from backend:
** To upload a new image:
    method: POST
    url : http://127.0.0.1:8000/images/
    body: 
    {
    "name" :"",
    "image" : "",
    "description" : ""
    }

** To get the list of images
    method : GET
    url: http://127.0.0.1:8000/images/
    expected response:
    [
    {
        "id": 4,
        "uuid": "cf46c25d-c356-4f98-8901-1312606d938a",
        "name": "sdfs",
        "image": "http://127.0.0.1:8000/media/something.jpg",
        "description": "fsddf",
        "created_on": "2020-10-24T14:14:29.670275Z"
    }
    ]