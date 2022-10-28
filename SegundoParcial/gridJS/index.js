new gridjs.Grid({
    columns:['idZt','name','roleZT'],
    server:{
        url:'http://localhost:3000/api/rosterzt',
        then: data=>data.map(person=>
            [person.id,person.userName,person.roleZT])
    }

}).render(document.getElementById("wrapper"))