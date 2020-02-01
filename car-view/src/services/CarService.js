import axios from 'axios';

export class CarService {
    
	   getCarsSmall() {
	        return axios.get('api/cars')
	                .then(res => res.data);
	    }

	    getCarsMedium() {
	        return axios.get('resources/data/cars-medium.json')
	                .then(res => res.data.data);
	    }

	    getCarsLarge() {
	        return axios.get('resources/data/cars-large.json')
	                .then(res => res.data.data);
	    }

	    addCar(car) {
	    	
	    	console.log('Ordering for this color ' + car.color)
	    	axios.post('api/cars', car );
	    }

		   getCarGraph() {
		        return axios.get('api/cars/graph')
		                .then(res => res.data);
		    }
	    
	    
}