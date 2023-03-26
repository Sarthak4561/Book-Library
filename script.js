let myLibrary = [{
    BookName: 'Game Of Thrones',
    Pages: '345',
    Read : 'yes',
    id: 34
}];

let visible = true;

let form = document.createElement("form");

    // let p = document.createElement('p');
    // p.innerText='waiting for uuuu';
    // document.body.appendChild(p)
    let BookName = document.createElement("input");
    BookName.setAttribute("type", "text");
    BookName.setAttribute("name", "Book Name");
    BookName.setAttribute("placeholder", "Book Name");

    let Pages = document.createElement("input");
    Pages.setAttribute("type", "number");
    Pages.setAttribute("name", "Pages");
    Pages.setAttribute("placeholder", "Number of Pages");

    var br = document.createElement("br");
    let CheckBox = document.createElement("input");
    CheckBox.setAttribute("type", "checkbox");
    CheckBox.setAttribute("name", "CheckBox");
    CheckBox.className='check-box';
    CheckBox.innerHTML='Okaay';


    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    

    form.appendChild(BookName);
    form.appendChild(br.cloneNode());
    
    form.appendChild(Pages);
    form.appendChild(br.cloneNode());
    
    form.appendChild(CheckBox);
    form.appendChild(br.cloneNode());
    
    form.appendChild(s)

function createBook(){
    visible = !visible;
    if (visible){
        document.body.appendChild(form);
    }
    else{
        form.remove();
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        myLibrary.push({
            BookName: BookName.value,
            Pages: Pages.value,
            Read: (CheckBox.checked)?'yes': 'no',
        });
        myLibrary.forEach(function (index) {
            console.log('hmm');
            let element = document.createElement('div');
            element.innerText = index.BookName+' '+index.Pages;
    
            document.body.appendChild(element)
        });
    }    



    
}
