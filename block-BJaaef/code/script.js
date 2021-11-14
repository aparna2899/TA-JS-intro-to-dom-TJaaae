let ul = document.querySelector('ul');
got.houses.forEach(house => {
    house.people.forEach((person) => {
        let li = document.createElement('li');
        li.classList.add('character');
        let div = document.createElement('div');
        div.classList.add('img-class');
        let img = document.createElement('img');
        img.src = person.image;
        div.append(img);
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let button = document.createElement('button');
        button.innerText = 'Learn More!';
        li.append(div,h2,p,button);
        ul.append(li);
    });
});