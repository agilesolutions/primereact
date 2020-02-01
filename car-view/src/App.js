import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {PanelMenu} from 'primereact/panelmenu';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import 'primeflex/primeflex.css';

import 'primereact/resources/themes/nova-light/theme.css';

import 'primereact/resources/primereact.min.css';

import 'primeicons/primeicons.css';


import { listCars } from './views/listCars.js';
import { addCar } from './views/addCar.js';
import { radarChart } from './views/radarChart.js';
import { polarChart } from './views/polarChart.js';
import { comboChart } from './views/comboChart.js';
import { barChart } from './views/barChart.js';
import { Switch, Route } from 'react-router-dom'


export class App extends Component {

    constructor() {
        super();
        this.state = {
                items:[
                    {
                       label:'Cars',
                       icon:'pi pi-fw pi-folder-open',
                       items:[
                          {
                             label:'Inventory',
                             icon:'pi pi-fw pi-plus',
                             items:[
                                {
                                   label:'List',
                                   icon:'pi pi-fw pi-sitemap',
                                   command:()=>{ window.location.hash="/listCars"; }
                                },
                                {
                                   label:'Add',
                                   icon:'pi pi-fw pi-save',
                                   command:()=>{ window.location.hash="/addCar"; }
                                },

                             ]
                          },
                          {
                             label:'Delete',
                             icon:'pi pi-fw pi-trash',
                             command:()=>{ window.location.hash="/radarChart"; }

                          },
                          {
                             label:'Export',
                             icon:'pi pi-fw pi-external-link'
                          }
                       ]
                    },
                    {
                        label:'Graphs',
                        icon:'pi pi-fw pi-images',
                        	items:[
                        		{
                        			label:'Radar chart',
                        			icon:'pi pi-fw pi-images',
                        			command:()=>{ window.location.hash="/radarChart"; }
                        		},
                        		{
                        			label:'Polar chart',
                        			icon:'pi pi-fw pi-chart-bar',
                        			command:()=>{ window.location.hash="/polarChart"; }
                        		},
                        		{
                        			label:'Pie chart',
                        			icon:'pi pi-fw pi-chart-bar',
                        			command:()=>{ window.location.hash="/comboChart"; }
                        		},
                        		{
                        			label:'Bar chart',
                        			icon:'pi pi-fw pi-chart-bar',
                        			command:()=>{ window.location.hash="/barChart"; }
                        		},

                         ]
                     },
                    {
                       label:'Edit',
                       icon:'pi pi-fw pi-pencil',
                       items:[
                          {
                             label:'Left',
                             icon:'pi pi-fw pi-align-left'
                          },
                          {
                             label:'Right',
                             icon:'pi pi-fw pi-align-right'
                          },
                          {
                             label:'Center',
                             icon:'pi pi-fw pi-align-center'
                          },
                          {
                             label:'Justify',
                             icon:'pi pi-fw pi-align-justify'
                          },

                       ]
                    },
                    {
                       label:'Users',
                       icon:'pi pi-fw pi-user',
                       items:[
                          {
                             label:'New',
                             icon:'pi pi-fw pi-user-plus',

                          },
                          {
                             label:'Delete',
                             icon:'pi pi-fw pi-user-minus',

                          },
                          {
                             label:'Search',
                             icon:'pi pi-fw pi-users',
                             items:[
                                {
                                   label:'Filter',
                                   icon:'pi pi-fw pi-filter',
                                   items:[
                                      {
                                         label:'Print',
                                         icon:'pi pi-fw pi-print'
                                      }
                                   ]
                                },
                                {
                                   icon:'pi pi-fw pi-bars',
                                   label:'List'
                                }
                             ]
                          }
                       ]
                    },
                    {
                       label:'Events',
                       icon:'pi pi-fw pi-calendar',
                       items:[
                          {
                             label:'Edit',
                             icon:'pi pi-fw pi-pencil',
                             items:[
                                {
                                   label:'Save',
                                   icon:'pi pi-fw pi-calendar-plus'
                                },
                                {
                                   label:'Delete',
                                   icon:'pi pi-fw pi-calendar-minus'
                                }
                             ]
                          },
                          {
                             label:'Archieve',
                             icon:'pi pi-fw pi-calendar-times',
                             items:[
                                {
                                   label:'Remove',
                                   icon:'pi pi-fw pi-calendar-minus'
                                }
                             ]
                          }
                       ]
                    }
                 ]
            };        
    }
    
    
    render() {
        return (
        		
        	   <div className="content-section implementation flexgrid-demo">
                   <div className="p-grid sample-layout">
                   	<div className="p-col-12">
                   	
                   		<Toolbar>
                   			<div className="p-toolbar-group-left">
                   			<img
                       			alt="Logo"
                       				src="/resources/images/jb-logo.gif"
                       				height="35px"/>
                       		</div>

                   			<div className="p-toolbar-group-right">
                   				<Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                   				<Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                   				<Button icon="pi pi-times" className="p-button-danger" />
                   			</div>
                        </Toolbar>

                		</div>
                   		<div className="p-col-12 p-md-2">
                       	<PanelMenu model={this.state.items} style={{width:'250px'}}/>
                       </div>
                       <div className="p-col-12 p-md-10 p-col-nogutter">
                           <div className="p-col-12">
                               <div className="p-grid">
                                   <div className="p-col-12 p-md-12">
                                   		
                                   		<Switch>
                                   			<Route path="/addCar" component={addCar} />
                                   			<Route path="/listCars" component={listCars} />
                                   			<Route path="/radarChart" component={radarChart} />
                                   			<Route path="/polarChart" component={polarChart} />
                                   			<Route path="/comboChart" component={comboChart} />
                                   			<Route path="/barChart" component={barChart} />
                      	        		</Switch>
                                   

                                   
                                    </div>
                               </div>
                           </div>
                       </div>
                       <div className="p-col-12">
                  		<Toolbar>

               				<div className="p-toolbar-group-left">
               					<Button icon="pi pi-user-minus" style={{marginRight:'.25em'}} />
               				</div>

               				<div className="p-toolbar-group-right">
               					<a href="https://www.primefaces.org/primereact/#/" target="_blank">powered by PrimeReact JS</a>
               				</div>
               				
               				
               			</Toolbar>
                       </div>
                   </div>                   
                   
               </div>
        		
        );
    }
}
export default App;