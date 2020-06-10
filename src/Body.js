import React from 'react';
import New from './image/new.png';
import death from './image/death.png';
import new_death from './image/new_death.png';
import rank from './image/rank.png';
import recovered from './image/recovered.png';
import total from './image/total.png';
import Loading from './Loading';
import $ from 'jquery';
import Mapbox from './Mapbox';


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      regi:null,
      modal:false,
    };
    
}
  
Position=(e)=>{
       fetch("https://api.thevirustracker.com/free-api?countryTotal="+e)
      .then(res => res.json())
      .then(
        (result) => {
          //alert(result['countrydata'][0]['total_cases'])
          this.setState({
            isLoaded: true,
            items: result['countrydata'][0]
          });
        },
         (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        )
  }
 


componentDidMount(){
  //$('#myModal').modal('show')
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=> {
    
    this.lat = position.coords.latitude;
    this.lon = position.coords.longitude;
    
  fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+this.lat+'&longitude='+this.lon+'&localityLanguage=en')
      .then(res => res.json())
      .then(
        (data) => {
          this.Position(data['countryCode'])
          this.setState({
            regi:data['countryCode'],
          });
        },
      )
      
    },
    function(error) {
    if (error.code === error.PERMISSION_DENIED)
      $('#myModal').modal('show')
  })
 }
  
}



  render() {
    
    const { error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
  <div>
  <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Instraction</h5>
        
      </div>
      <div className="modal-body">
        This web app needs to know loaction and you have to press allow button without this we can't give your places covid-19 data...if u block that then please refresh the browser ....if the server is slow then don't panic...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal"  id="modalCl">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal"  id="modalCl">Ok</button>
      </div>
    </div>
  </div>
</div>
    
<Loading/></div>);
    } else {
      return (
      
    <div className="card-start">
    {this.items}  
    
    <div>
      
  
      <div className="card-body grey lighten-5 rounded-bottom">

    <div className="row">

    <div className="col-6 p-1">
        <div className="card grey lighten-2 shadow-lg p-4 mb-5 bg-white rounded">
          <img className="card-img-top" src={total} alt="total"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">Total</h6>
          <p className="mb-0">{items.total_cases}</p>
        </div>
      </div>
     
      <div className="col-6 p-1">
        <div className="card orange lighten-3 shadow-lg p-4 mb-5 bg-white rounded">
          <img className="card-img-top" src={New} alt="New"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">New affected</h6>
            <p className="mb-0">{items.total_new_cases_today}</p>
          </div>
      </div>
  
    </div>
   
    <div className="row">

      <div className="col-6 p-1">
        <div className="card grey lighten-2 shadow-lg p-4 mb-5 bg-white rounded">
          <img className="card-img-top" src={death} alt="death"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">Total death</h6>
          <p className="mb-0">{items.total_deaths}</p>
        </div>
      </div>
     
      <div className="col-6 p-1">
        <div className="card orange lighten-3 shadow-lg p-4 mb-5 bg-white rounded">
          <img className="card-img-top" src={new_death} alt="mew death"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">New Death</h6>
          <p className="mb-0">{items.total_new_deaths_today}</p>
        </div>
      </div>
      
      
    </div>

    <div className="row">
      
      <div className="col-6 p-1">
        <div className="card orange lighten-3 shadow-lg p-4 mb-5 bg-white rounded">
        <img className="card-img-top" src={rank} alt="rank"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">Rank</h6>
          <p className="mb-0">{items.total_danger_rank}</p>
        </div>
      </div>
  
  
  
   <div className="col-6 p-1">
     <div className="card orange lighten-3 shadow-lg p-4 mb-5 bg-white rounded">
          <img className="card-img-top" src={recovered} alt="recovered"/>
          <hr/>
          <h6 className="font-weight-bold mb-1">Recovered</h6>
          <p className="mb-0">{items.total_recovered}</p>
        </div>
      </div>
 
  </div>
  </div>
   </div>
   
   
  <div class="container">
  <div class="alert alert-dark" role="alert">
   <h5>Globally affected other countries</h5>
  <p>Please click on the virus symbol <i class="fas fa-virus" aria-hidden="true"></i> and get these countries covid-19 update</p>
  </div>
    <Mapbox/>
  </div>
    
  <footer className="footer">
    <div>
      <a href="/">Covid-19 Dairy</a>
      <span>&copy; 2020 creativeWeb.</span>
    </div>
    <div className="ml-auto">
      <span>Powered by</span>
      <a href="/">Covid-19 dariy</a>
    </div>
  </footer>
</div> 
    );
    }
  }
}
export default Body;