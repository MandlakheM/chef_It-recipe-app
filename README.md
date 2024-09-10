## CHEF IT RECIPE APP

**SUMMARY**

This is a shopping list app that uses Redux (CRUD), the functionality of the app includes:

i)Users can log in with their credentials and new users can register.


ii) Users can search for recipes by keyword.


iii) Users can add a new recipe with the following details:
Recipe Name
Ingredients
Instructions
Category (e.g., Dessert, Main Course, Appetiser)
Preparation Time
Cooking Time
Servings

iv) Users can delete existing recipes from the list.


v) Users can edit existing recipes.


vi) Users can categories to classify recipes (e.g., Breakfast, Lunch, Dinner).


vii) The app uses JSON-Server to store data.



## SCREENSHOTS

![Screenshot 2024-09-10 093037](https://github.com/user-attachments/assets/177c8dde-aa99-4866-a8f4-049642b3fc4b)



## Installation 

Step-by-step instructions on how to get the development environment running.

```bash

# Clone the repository

git clone https://github.com/MandlakheM/shopIt_shopping_List.git

# Navigate to the project directory

cd projectname

# Install dependencies

npm install

# Start the JSON-server on your CMD

json-server --watch db.json --port 3030

npm run dev

