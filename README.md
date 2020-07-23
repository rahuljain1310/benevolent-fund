# benevolent-fund

## Frontend
1. cd frontend
1. npm i
1. npm start

## Creating a Virtual env
1. Install virtualenv: pip install virtualenv  
1. cd to the ./backend/
1. Run the command "virtualenv venv" //this will create a venv folder with all the packages
1. Activate the virtual environment:  venv\scripts\activate
1. pip install -r requirements.txt
1. 'pip list' to see the installed packages

## Backend
1. cd ./backend/benevolent
1. python manage.py makemigrations
1. python manage.py migrate
1. python manage.py createsuperuser
    * user - benevolent_user
    * email - benevolent@example.com
    * password - bu12345
1. python manage.py runserver (by default it will run the backend at localhost:8000)

