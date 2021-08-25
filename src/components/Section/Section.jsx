import React from 'react';
import { Form } from '../Form/Form';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Card } from '../Card/Card';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showed: false,
      cities: [],
    };
  }
  handleRemove = c => {
    this.setState({
      cities: this.state.cities.filter(city => city !== c),
    });
  };
  render() {
    const { cities, showed } = this.state;
    return (
      <div>
        {cities.length ? <Title title="Города" /> : null}
        {cities.map(city => {
          return (
            <Card
              key={city}
              buttonName="Удалить"
              name={city}
              handleClick={this.handleRemove}
            />
          );
        })}
        {showed && (
          <Form
            onSubmit={city => {
              console.log('data', city);
              this.setState(prevState => ({
                cities: [...prevState.cities, city],
              }));
            }}
          />
        )}
        <Button
          onClick={() => {
            this.setState({ showed: !this.state.showed });
          }}
          buttonName="Добавить город "
        />

        {/* {this.state.showed2 && <p>Форма для добавления города 2</p>}
        <Button
          onClick={() => {
            console.log('clicked 2');
            this.setState({ showed2: true });
          }}
          buttonName="Добавить город 2"
        /> */}
      </div>
    );
  }
}

// function Section() {
//   const [showed, setShowed] = useState(false);
//   const [showed2, setShowed2] = useState(false);

//   return (
//     <div>
//       {showed && <p>Форма для добавления города</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed(true);
//         }}
//         buttonName="Добавить город"
//       />

//       {showed2 && <p>Форма для добавления города 2</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed2(true);
//         }}
//         buttonName="Добавить город"
//       />
//     </div>
//   );
// }

export { Section };
