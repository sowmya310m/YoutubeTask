header.loadHeader();
footer.loadFooter();

document.addEventListener("keyup",(event)=> {
    let keyCode = event.keyCode;
    if(keyCode === 37) {
        paginationState.decrementPageNumber();
        updateAllComponents();
    } else if(keyCode === 39) {
        paginationState.incrementPageNumber();
        updateAllComponents();
    }
});

function updateAllComponents() {
    body.loadBody();
    descDivComponent.updateShowing();
    descDivComponent.updateTotalItems();
}
