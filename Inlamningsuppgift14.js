const lista = [
  {namn: 'Hund', translation: 'Dog'},
  {namn: 'Katt', translation: 'Cat'},
  {namn: 'Älg', translation: 'Moose'},
  {namn: 'Lejon', translation: 'Lion'},
  {namn: 'Ekorre', translation: 'Squirrel'},
];

class Matlista extends React.Component {
  render() {
    let key = 0;
    const nyLista = this.props.lista.map(
      obj => (<li key={obj.namn + obj.translation}>{obj.namn} { } 
       = {obj.translation}</li>)
    );
    return (<ol>{nyLista}</ol>);
  }
}


ReactDOM.render(
  <Matlista lista={lista} />,
  document.getElementById('uppg14')
);