# Personal Website - Anuraag Muktevi
I have created this repository for the development of my personal website. Do visit my website [here](https://www.anuraagmuktevi.com).

## To run this project, please follow the following steps
1. Clone the repository into a directory of your choice with the command 'git clone https://github.com/anuraagm/personal-website.git'
2. Install the latest versions of python3 and pip3 from [here](https://www.python.org/downloads/)
3. Install the latest versions of Node.js and npm from [here](https://nodejs.org/en/download/)

### Django Backend setup
1. cd into personal-website/backend/backend
2. In the settings.py file, update the STATIC_URL, STATIC_ROOT, MEDIA_URL & MEDIA_ROOT paths to the locations you want on your system, or leave them be.
3. Run the command 'pip3 install -r requirements.txt' to download all the python packages you will need to run the django app. 
4. cd into personal-website/backend
5. Run the command 'python3 manager.py makemigrations' (sudo this and other commands if necessary)
6. Then when the migrations are successfully applied run 'python3 manager.py migrate'
7. Then we can create a superuser to secure and populate our db by running the command 'python3 manager.py createsuperuser' (follow the steps)
8. Then run 'python3 manager.py runserver'
9. If you have setup the backend correctly, you can see the apis running on 'http://localhost:8000/api/' and the admin can be accessed from 'http://localhost:8000/admin/'
10. As a final step, populate each of the tables, keeping in mind to fill all the columns of all the tables. If you want to leave a blank column, just update it with "".

### React.js Frontend setup
1. cd into personal-website/frontend
2. Run the command 'npm install'
3. Create a file named '.env'
4. In the .env file, create two environment variables 'REACT_APP_API_ENDPOINT=http://127.0.0.1:8000/api' 'REACT_APP_EMAIL=your@emailid'. The first env variable will be used to make api calls to the django backend. The second one will be needed to ensure that the email reaches you, when someone makes use of the contact field.
5. You can now run your app with the command 'npm start'
6. If your react app is setup correctly, you can access your website from 'http://localhost:3000' 
