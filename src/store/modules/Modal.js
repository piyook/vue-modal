export default {

    namespaced : true,

    state(){
        return{
            modalPromise:null,
            modalVisibility: false,
        }
    },

    getters:{
        isModalVisible(state) {
            return state.modalVisibility;
    },
    },

    mutations:{
        setModal(state, payload){
            state.modalPromise = payload.modalPromise;
      },
        modalResponse(state, payload) {
            state.modalPromise(payload.response);
        },
        modalVisibility(state, payload){
            state.modalVisibility=payload.isModalVisible;
        },
    },

    actions:{
        async awaitModalResponse(context){
            return await new Promise((resolve) => 
            context.commit('setModal', {modalPromise : resolve}));
        },
    }

}