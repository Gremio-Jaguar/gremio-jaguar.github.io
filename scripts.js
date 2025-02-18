document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modals
    var modals = document.querySelectorAll('.modal');

    // Get the buttons that open the modals
    var btns = document.querySelectorAll('.news-card');

    // Get the <span> elements that close the modals
    var spans = document.querySelectorAll('.close');

    // When the user clicks the button, open the modal 
    btns.forEach((btn, index) => {
        btn.onclick = function() {
            modals[index].style.display = "block";
        }
    });

    // When the user clicks on <span> (x), close the modal
    spans.forEach((span, index) => {
        span.onclick = function() {
            modals[index].style.display = "none";
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        modals.forEach((modal) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
