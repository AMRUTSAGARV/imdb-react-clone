import React, { Component } from 'react';
import SeriesCard from './SeriesCard';
import * as Loader from 'react-loader-spinner';
import { Consumer } from './Context';

export default class TopRatedSeries extends Component {
    
    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    funGetDetails=(id)=>{
        this.props.history.push(`/seriesDetails/${id}`);
    }
    
    render() {
        return(
            <Consumer>
                {(value)=>{

                    const {topRatedSeries} = value;

                    if(topRatedSeries.length === 0){
                        return (
                        <div className="display-4 my-5 text-center">
                        <Loader
                        type="BallTriangle"
                        color="#8e54e9"
                        height={100}
                        width={100}
                        />
                        </div>
                        )
                    }
                    else{
                        return (
                            <div>
                                <div className="display-4 mb-3">Top-Rated Series <i className="fa fa-diamond"></i></div>
                                <div className="row">
                                {
                                    topRatedSeries.map((series)=>(
                                    <SeriesCard key={series.id} series={series} funGetDetails={this.funGetDetails} />
                                    ))
                                }
                                </div>
                            </div>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
