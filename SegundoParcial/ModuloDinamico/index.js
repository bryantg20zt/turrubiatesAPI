window.onload = () => {

    let flagStart = true;
    
    !!flagStart ? 
    import ('./moduloDinamico.js') .then ( (Module) => { document.querySelector('#root').innerHTML = Module.Dinamismo('utilizar el modulo dinamico en ES6') })
    : document.querySelector('#root').innerHTML= 'No se necesito el modulo Dinamico';

}
