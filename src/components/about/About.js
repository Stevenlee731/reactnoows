import React from 'react';
import {Row, Col} from 'react-materialize'
import Header from '../common/Header'

class HomePage extends React.Component {

    render() {
        return (
          <div>
            <div>
              <Header
                title='About React Noows'
                subTitle='Your relevant React News Hub'
                />
            </div>
            <Row>
              <Col m={12} s={12} className="about">
                <div className="border">
                  <div className="content-about">
                    <p>Contra legem facit qui id facit quod lex prohibet. Quisque placerat facilisis egestas cillum dolore. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quid securi etiam tamquam eu fugiat nulla pariatur.
                    Gallia est omnis divisa in partes tres, quarum. Sed haec quis possit intrepidus aestimare tellus. Qui ipsorum lingua Celtae, nostra Galli appellantur. Nec dubitamus multa iter quae et nos invenerat. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Hi omnes lingua, institutis, legibus inter se differunt.
                    Quae vero auctorem tractata ab fiducia dicuntur. Quis aute iure reprehenderit in voluptate velit esse. Cum ceteris in veneratione tui montes, nascetur mus. Paullum deliquit, ponderibus modulisque suis ratio utitur.
                    Quo usque tandem abutere, Catilina, patientia nostra? Cum sociis natoque penatibus et magnis dis parturient. Quisque ut dolor gravida, placerat libero vel, euismod. Fabio vel iudice vincam, sunt in culpa qui officia. Excepteur sint obcaecat cupiditat non proident culpa. Non equidem invideo, miror magis posuere velit aliquet.
                    Morbi fringilla convallis sapien, id pulvinar odio volutpat. Phasellus laoreet lorem vel dolor tempus vehicula. Quam diu etiam furor iste tuus nos eludet? Ab illo tempore, ab est sed immemorabili. Integer legentibus erat a ante historiarum dapibus.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
    }
}

export default HomePage;
