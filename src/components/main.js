import React from 'react';
import HornedBeasts from './hornedBeast';
// import data from './assets/data.json';
import Row from 'react-bootstrap/Row';
import FilterData from './filtered';

class Main extends React.Component {
  // render() {

    
  //   return (
    // LAB 01
    //      <main>
    //    <HornedBeasts
    //       title="Cat"
    //       description="pet"
    //      imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aptuspet.com%2Frus%2Fwww-aptuspet-com-articles-behavior%2F&psig=AOvVaw0MjpUgif34yKXrBPWZqoT8&ust=1627322839300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCykZPo_vECFQAAAAAdAAAAABAD" //     />
    //   <HornedBeasts
    //     title="Dog"
    //      description="pet"    //       imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aptuspet.com%2Frus%2Fwww-aptuspet-com-articles-behavior%2F&psig=AOvVaw0MjpUgif34yKXrBPWZqoT8&ust=1627322839300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCykZPo_vECFQAAAAAdAAAAABAD"     //   />
    //      </main>


    constructor(props) {
      super(props);
      this.state = {
          filterValue: 0
      };

  }

  setFilterValue = (filterValue) => {
      this.setState({
          filterValue: filterValue,
      });
  }

  render() {
      return (
          <>
              <FilterData setFilterValue={this.setFilterValue} />

              <Row xs={1} md={3} className='justify-content-center'>
                  {
                      this.props.dataList.filter(element =>
                          this.state.filterValue === 0
                              ? true
                              : element.horns === this.state.filterValue)
                          .map(element => {
                              return <HornedBeasts
                              image_url={element.image_url}
                              title={element.title}
                              description={element.description}
                              alt={element.keyword}
                              updateVisible={this.props.updateVisible}
                              modalData={this.props.modalData}
                            />  
                          })
                  }
              </Row>

          </>
      );
  }




}


export default Main;
