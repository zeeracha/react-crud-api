# React-crud-api
CRUD data by using REST API from https://melivecode.com/

### Landing page : Show the table of users
![alt text](https://github.com/zeeracha/react-crud-api/blob/main/public/img/user.png?raw=true)

### Create page : using to create new user
![alt text](https://github.com/zeeracha/react-crud-api/blob/main/public/img/create.png?raw=true)

### Update page : uding to update user data `(cannot update and delete user id: 1- 12. Try to create new, then update(edit) and delete later)`
![alt text](https://github.com/zeeracha/react-crud-api/blob/main/public/img/update.png?raw=true)


1. Design
    - Installed MUI : npm install @mui/material @emotion/react @emotion/styled
    - Installed MUI icon svg : npm install @mui/icons-material
    - Installed react router dom : npm install react-router-dom 
    - Created Navbar and User design by using MUI

2. Api
    - React AJAX : https://reactjs.org/docs/faq-ajax.html (using UseState(Hook))
    - Fetch api on "/" page (users page) used this api https://www.melivecode.com/api/users (Method POST)

3. page create desing : on UserCreate.jsx (create page)

4. create user api : use another api https://www.melivecode.com/api/users/create (Method POST) to create new user (get some code from postman </> (code snipped), selectd JavaScript - Fetch)

5. update user page: create update page and fetch api by used 3 api 
    1) https://www.melivecode.com/api/users/update (Method PUT)
    2) https://www.melivecode.com/api/users/delete (Method DELETE)
    3) https://www.melivecode.com/api/users/1 (Method GET) to have the exact id of urls