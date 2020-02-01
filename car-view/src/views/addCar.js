import React, {Component} from 'react';
import {Slider} from 'primereact/slider';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../services/CarService';
import Car from '../dto/Car';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import {InputMask} from 'primereact/inputmask';

export class addCar extends Component {

	   constructor() {
	        super();
	        this.addCar = this.addCar.bind(this);
	        this.carservice = new CarService();
	        this.car = new Car();
	    }
	   
	    addCar() {
	    	console.log('Values for new car ' + this.car.price)
	    	this.carservice.addCar(this.car);
	        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted for ' + this.car.brand + ' model ' + this.car.model});
	    }
	    
	    clear() {
	        this.messages.clear();
	    }
	    

    render() {

	       const cars = [
	            {label: 'Audi', value: 'Audi'},
	            {label: 'BMW', value: 'BMW'},
	            {label: 'Fiat', value: 'Fiat'},
	            {label: 'Honda', value: 'Honda'},
	            {label: 'Jaguar', value: 'Jaguar'},
	            {label: 'Mercedes', value: 'Mercedes'},
	            {label: 'Renault', value: 'Renault'},
	            {label: 'VW', value: 'VW'},
	            {label: 'Volvo', value: 'Volvo'}
	        ];


	       const colors = [
	            {label: 'White', value: 'White'},
	            {label: 'Red', value: 'Red'},
	            {label: 'Blue', value: 'Blue'},
	            {label: 'Gold', value: 'Gold'},
	            {label: 'Green', value: 'Green'},
	            {label: 'Yellow', value: 'Yellow'},
	            {label: 'Black', value: 'Black'}
	        ];
	       
    	
    	return (
        		
        	       
         	   <div className="content-section implementation">
         	   
         	   		<Messages ref={(el) => this.messages = el} />
         	   
         	   		<div className="p-grid">

     	   				<div className="p-col-1">

     	   					<label>Vendor</label>
					
     	   				</div>
         	   		
 	   					<div className="p-col-11">
 	   					
 	   						<Dropdown value={this.car.brand} options={cars} onChange={(e) => {this.car.brand = e.value}}  placeholder="Select a brand"/>
 	   					
 	   					</div>
 	   				</div>

         	   		<div className="p-grid">

         	   			<div className="p-col-1">

         	   				<label>Model</label>
   					
         	   			</div>

	   					<div className="p-col-11">
	   					
	   						<InputText id="model" type="text" size="30"  onChange={(e) => this.car.model = e.target.value } />
	   					
	   					</div>

	   				</div>


         	   		<div className="p-grid">


         	   			<div className="p-col-1">

 	   						<label>Color</label>
				
 	   					</div>
         	   		
	   					<div className="p-col-11">
	   				
	   					<span className="p-float-label">
	   					
	   						<Dropdown value={this.car.color} options={colors} onChange={(e) => {this.car.color = e.value}} placeholder="Select a color"/>
                        	
	   					</span>
	   					
	   					</div>
	   				</div>
 	   				
         	   		<div className="p-grid">
 	   				

         	   			<div className="p-col-1">

     	   					<label>Price</label>
					
     	   				</div>
         	   		
         	   		
 	   					<div className="p-col-11">

 	   						<InputText type="text" keyfilter="pint" onChange={(e) => this.car.price = e.target.value} />
 	   				
 	   					
 	   					</div>
         	   			
         	   		</div>

 	   				
         	   		<div className="p-grid">
 	   				

         	   			<div className="p-col-1">

     	   					<label>Year</label>
					
     	   				</div>
         	   		
         	   		
 	   					<div className="p-col-11">
 	   					
 	   						<InputMask mask="9999"  placeholder="2020"  onChange={(e) => this.car.year = e.target.value} />
 	   				
 	   					
 	   					</div>
         	   			
         	   		</div>

 	   				
         	   		<div className="p-grid">
 	   				
 	   					<div className="p-col-12">
 	   					
 	   				<Button onClick={this.addCar} label="Order" className="p-button-success" />
 	   					
 	   					</div>
         	   			
         	   		</div>
         	   		
         	   		
         	   	</div>
    		
        );
    }
}
