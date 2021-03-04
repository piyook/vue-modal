<template>
<div class="text-center">

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

    <alert-modal :isActive="ModalTwo" modalColor="black">
        <template v-slot:title>This is Modal Two</template>
        Put Some Text Here
        <template v-slot:yesButton>YES</template>
        <template v-slot:cancelButton>NO</template>
    </alert-modal>

    <alert-modal :isActive="ModalThree" modalColor="green">
        <template v-slot:title>This is Modal Three</template>
        Put Some Text Here
        <template v-slot:yesButton>GO AHEAD</template>
        <template v-slot:cancelButton>GO BACK</template>
    </alert-modal>

    <h1 class="display-3 text-danger mt-3"> Pop Up Modal Test Page </h1>
    <button type="button" class="btn btn-primary" @click="showModalOne">Modal 1</button>
    <button type="button" class="btn btn-secondary" @click="showModalTwo">Modal 2</button>
    <button type="button" class="btn btn-success" @click="showModalThree">Modal 3</button>
    <button type="button" class="btn btn-warning" @click="userResponse">Test Input - see console log</button>
</div>
    
</template>

<script>
import {Modal} from '@/utils/modal';
export default {
    computed:{
         ModalOne() {
                return this.$store.getters['modal/isModalVisible'] === 'ModalOne' ? true : false;
    },
        ModalTwo() {
                    return this.$store.getters['modal/isModalVisible'] === 'ModalTwo' ? true : false;
        },
        ModalThree() {
                    return this.$store.getters['modal/isModalVisible'] === 'ModalThree' ? true : false;
        },
    },
    methods:{
        async showModalOne(){
             return await Modal('ModalOne');
        },
        async showModalTwo(){
            return await Modal('ModalTwo');
        },
        async showModalThree(){
            return await Modal('ModalThree');
        },

        async userResponse(){
            const result = await this.showModalOne();
            if (result) { console.log("you pressed yes");}
            else {
                console.log("you pressed no");
            }
        }
    }
}
</script>

<style scoped>

button {
    margin:20px;
}
</style>