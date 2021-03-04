import store from "@/store";

export const Modal = async (modalId) => {
 
  store.commit("modal/modalVisibility", { isModalVisible: modalId });
  document.documentElement.style.overflow = "hidden";

  const modalResponse = await store.dispatch("modal/awaitModalResponse");
  
  store.commit("modal/modalVisibility", { isModalVisible: false });
  document.documentElement.style.overflow = "visible";

  return modalResponse;
};
