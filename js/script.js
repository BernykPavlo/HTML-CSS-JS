const load = document.addEventListener('DOMContentLoaded', () => {
    let content = {
        phones1: document.querySelector('#tel-popup1'),
        phones2: document.querySelector('#tel-popup2'),
        searchbox: document.querySelector('#searchbox'),
        searchForm: document.querySelector('#form'),
        searchInput: searchbox.querySelector('#input'),
        btn1: document.querySelector('#popup-btn1'),
        btn2: document.querySelector('#popup-btn2'),     
        sbtn: document.querySelector('#searchbtn'),
        hide: function() {
            this.phones1.style.visibility = 'hidden';
            this.phones2.style.visibility = 'hidden';
            this.searchbox.style.visibility = 'hidden';
        },
        reveal: function(element) { 
            if (element.style.visibility == 'hidden') {
                this.hide();
                element.style.visibility = 'visible';
            } else if (element != this.searchbox) {
                this.hide();
            } else if (this.searchInput.value.length > 0){
                // this.searchForm.requestSubmit();
                this.searchInput.value = null;
            } else {
                this.hide();
            }
        }
    };
    content.hide();
    const popup1 = content.btn1.addEventListener('click', (event) => {
        event.preventDefault();
        content.reveal(content.phones1);
    });
    const popup2 = content.btn2.addEventListener('click', (event) => {
        event.preventDefault();
        content.reveal(this.phones2);
    });
    const searchPopUp = content.sbtn.addEventListener('click', (event) => {
        event.preventDefault();
        content.reveal(this.searchbox);
    });
});

