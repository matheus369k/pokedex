export const finnishLoadCard = (props_get_class, props_class_load, props_index, props_all_elements) => {
    const element_card = document.querySelector(props_get_class);
    const all_elements_cards = document.querySelectorAll(props_all_elements);
    element_card.classList.remove(props_class_load);

    if (all_elements_cards.length == props_index + 1) return;
    const element_card_in_loading = document.querySelectorAll("." + props_class_load);

    element_card_in_loading.forEach(element => {
        element.classList.remove(props_class_load);
    });
};