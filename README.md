# Exercise 1: _Data Binding_
> In this exercise you will learn about one-way & two-way data binding

## Setup: Keep up & running

``` bash
# clone branch for first excercise
git clone -b origin/exercise/00_data_binding https://github.com/na018/vue_basics_tut.git vueTut/00_data_binding

#prerequisite: node.js is installed
node -v                                      #returns for example v8.2.1

# install dependencies
npm i

#start the json mock server
node server.js

# run the application (should open a browser window automatically)
npm start

```
## todo
In src/components/pages/UserAdmin.vue:
1. |KB-1| create onePerson Object with userName, firstName, lastName, img as Object attributes _(in <script> data())_
2. |KB-1| display the onePerson Object in a paragraph `<p>` element _(in <template>)_
3. |KB-1| create an unordered list ul>li & show all onePerson attributes in a (`<v-text-field>`|value) and the image (`<img>`|src) with 1-way data binding _(v-bind)_
4. |KB-1| if a user types into the `<v-text-field>` the event @input is fired. Use it for updating the onePerson's attributes _(@input="changedName => onePerson.name = changedName")_
5. |KB-1| replace _v-bind_ by _v-model_ and remove the @input event to understand two-way data binding

_(hints: classes used for styling `p.centerElem.card.pa-1`, `ul.centerElem.card.pa-5.mt-4`, `img.avatarIcon`)_


## Result

<img src="static/img/readme/exercise.png" alt="exercise" style="width: 300px; height: auto;"/>
<img src="static/img/readme/folderStructure.png" alt="exercise" style="width: 200px; height: auto;"/>


--------------------
## Project Architecture
![KanBan Project Architecture](static/img/readme/ProjectArchitecture.png "KanBan Project Architecture")
-------------------

-------------------

### Team
Nadin-Katrin Apel, Alex Schübl, David Bochan
 ![Team photo](static/img/readme/team.jpg "Team")
 
 Professor: _Prof. Dr. Fridtjof Toenniessen_
-------------------
 
### Further Suggestions
_(Awesome that you kept reading til down here)_

Now are you ready to take the next challenge? Then what keeps you still waiting? - Continue with [Exercise 2: _component communication_](https://github.com/na018/vue_basics_tut/tree/origin/exercise/01_components)
 ![Good luck](static/img/readme/luck.jpg "Kleeblatt")

 
 
