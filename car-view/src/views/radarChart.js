import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import {CarService} from '../services/CarService';
import CarGraph from '../dto/CarGraph';


export class radarChart extends Component {
	
	   constructor() {
	        super();
	        this.carservice = new CarService();
	        this.carGraph = new CarGraph();

	    }
	
	    componentDidMount() {
	        this.carservice.getCarGraph().then(data => this.setState({carGraph: data}));
	        console.log('collectect statistics are ' + this.carGraph)
	    }
	    
    render() {
        const data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'Year',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'Price',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h3>Radar Chart on Car Inventory</h3>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="radar" data={data} />
                </div>
            </div>
        )
    }
}
