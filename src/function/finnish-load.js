export const finnishLoadCard = (getClass, ClassLoad, index, allElements) => {
    const elementCard = document.querySelector(getClass);
    const allElementsCards = document.querySelectorAll(allElements);
    elementCard.classList.remove(ClassLoad);

    if (allElementsCards.length !== index + 1) return;
    const elementCardInLoading = document.querySelectorAll("." + ClassLoad);

    elementCardInLoading.forEach(element => {
        element.classList.remove(ClassLoad);
    });
};