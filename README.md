
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/piyook/vue-modal">
    <img src="public/piyook.png" alt="Logo" width="200" height="160">
  </a>

  <h3 align="center">Simple Pop-up Modal Component for Vue-3</h3>

  <p align="center">
    A simple customisable pop-up modal that returns true/false depending on user response.
    <br />
    <a href="https://github.com/piyook/vue-modal"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://piyook.github.io/vue-modal/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
 </p>
 A simple pop-up modal that uses JavaScript promises to halt code execution until user
    input is received.<br> 
    The Modal object returns 'TRUE' for 'YES' and 'FALSE' for 'NO' allowing
    incorporation of the return value in code logic (E.g press Yes to submit Axios action).<br>
    Modal Colors can be easily changed for each modal using the relevant props. 


### Built With

* Vue-3
* Javascript


## Getting Started

The project as-supplied can be downloaded and built using npm.


### Prerequisites

Node.js needs to be installed.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/piyook/vue-modal.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the wepack dev-server
   ```sh
   npm run serve
   ```
The app can be accessed from http://localhost:8080

## Usage

To use the components in any project follow the steps below

1. Components/AlertModal.vue, store/modules/Modal.js, and utils/modal.js can be copied into 
    any project and incorporated in the usual way in the relevant folders.<br> 
    In main.js add :
    ```
    import AlertModal from '@/components/AlertModal';
    ```
    and 
    register the component globally with 
    ```
    app.component('alert-modal', AlertModal);
    ```

2.  From the TestPage.vue copy the alert-modal html and add into the relevant component. 
    This component is teleported to the document body in use. 

    Use the TestPage.vue to extract the alert-modal component html which is regsitered globally.
    Customise the modal text and give it a <b>unique identifier</b> for :isActive E.g <b>ModalOne</b>
    ```
    :isActive="ModalOne" 
    ```
    Make sure to import the Modal script

    ```
    import {Modal} from '@/utils/modal';
    ```

    Modal title color can be passed usign the 'modalColor' prop on the <alert-modal> component. Button Colours can be customised with the yesButtonColor and noButtonColor props. Any color value can be passed as a string.
    E.g 'red' or '#ff0000'

    ```
    <alert-modal 
        :isActive="ModalOne" 
        modalColor="#000099"
        yesButtonColor = "green"
        noButtonColor = "red"
        >
        <template v-slot:title>This is Modal One</template>
        Put Some Text Here
        <template v-slot:yesButton>OK</template>
        <template v-slot:cancelButton>CANCEL</template>
    </alert-modal>
    ```


3. Add a computed property that has the same name as the modal E.g modalOne

    ```
    computed:{
            ModalOne() {
                    return this.$store.getters['modal/isModalVisible'] === 'ModalOne' ? true : false;
        },
    ```


4. Add a method with the same name as the modal 

    ```
    methods:{
            async showModalOne(){
                return await Modal('ModalOne');
            },
    ```

    this method can be called form another method and the return value assessed as TRUTHY or FALSEY  and then 
    perform some logic based on the result E.g

    ```
    async userResponse(){
                const result = await this.showModalOne();
                if (result) { 
                    console.log("you pressed yes");}
                else {
                    console.log("you pressed no");
                }
            }
    ```
    Remember to make this an async function and use await since this generates a promise.

    The modal entry / exit vue animation transition-hook classes can be modified in the AlertModal.vue
    style section to change the entry/exit animations.

## Contact

Piyook - [@piyookD](https://twitter.com/piyookD) - email piyook@piyook.com

Project Link: [https://github.com/piyook/vue-modal](https://github.com/piyook/vue-modal)


