import React, { Component } from 'react';
import {CarService} from '../services/CarService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';


export class listCars extends Component {
	
	   constructor() {
	        super();
	        this.state = {
	        		cars: [],
	        		brand: null,
	        		model: null,
	                colors: null
	            };        
	        this.carservice = new CarService();
	        this.onBrandChange = this.onBrandChange.bind(this);
	        this.onColorChange = this.onColorChange.bind(this);
	    }
	
    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    onBrandChange(event) {
        this.dt.filter(event.value, 'brand', 'equals');
        this.setState({brand: event.value});
    }
    
    onModelChange(event) {
        this.dt.filter(event.value, 'model', 'equals');
        this.setState({model: event.value});
    }

    onColorChange(event) {
        this.dt.filter(event.value, 'color', 'in');
        this.setState({colors: event.value});
    }
	
    render(){
 
        var header = <div style={{'textAlign':'left'}}>
        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
    </div>;
    	
    let brands = [
        {label: 'All Brands', value: null},
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

    let brandFilter = <Dropdown style={{width: '100%'}}
            value={this.state.brand} options={brands} onChange={this.onBrandChange}/>


let colors = [
    {label: 'White', value: 'White'},
    {label: 'Green', value: 'Green'},
    {label: 'Silver', value: 'Silver'},
    {label: 'Black', value: 'Black'},
    {label: 'Red', value: 'Red'},
    {label: 'Maroon', value: 'Maroon'},
    {label: 'Brown', value: 'Brown'},
    {label: 'Orange', value: 'Orange'},
    {label: 'Blue', value: 'Blue'}
];

let colorFilter = <MultiSelect style={{width:'100%'}}
    value={this.state.colors} options={colors} onChange={this.onColorChange}/>   
    
    	
        return <div>
        
			<DataTable ref={(el) => this.dt = el} value={this.state.cars} paginator={true} rows={10} header={header}
				globalFilter={this.state.globalFilter} emptyMessage="No records found">
					<Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
					<Column field="model" header="Model" filter={true} />
					<Column field="price" header="Price" filter={true} />
					<Column field="year" header="Year" filter={true} />
					<Column field="color" header="Color" filter={true} filterElement={colorFilter} />
			</DataTable>
					
        </div>;
    }
}