## Setting up the Server
#### 1. Install pipx
```
sudo apt update
sudo apt install pipx
```
#### 2. Install Poetry
```
pipx install poetry
```
#### 3. CD into the Server
```
cd server
```
#### 4. Install the dependencies and start shell
```
poetry install
poetry shell
```
#### 5. Start the application 
```
cd core
python manage.py runserver
```
#### 6. Create your own superuser (Optional)
```
python manage.py createsuperuser
python manage.py runserver
```

[Swagger (API Docs)](http://127.0.0.1:8000/swagger/) <br/>
[Admin Dashboard](http://127.0.0.1:8000/admin/) <br/>

**Note: Use Ctrl + C in the terminal to stop the server**
