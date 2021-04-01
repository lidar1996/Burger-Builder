import React , {Component} from "react"
import Order from "../../components/Order/Order"
import axios from "../../axios-orders"
import withErrorHandler from "../../components/withErrorHandler/withErrorHandler"

class Orders extends Component {
    state= {
        orders:[] ,
        loadind:true
    }
    
    componentDidMount() {
        axios.get("/orders.json")
            .then(res => {
                const fechedOrders = [] ;
                for ( let key in res.data) {
                    fechedOrders.push({
                        ...res.data[key],
                        id: key
                    });
            
                }
                this.setState({loadind:false , orders: fechedOrders});

            })
            .catch(err => {
                this.setState({loadind:false});
            })
    }

    render () {
        return (
            <div>
               {this.state.orders.map(order => (
                 <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price}    />  
               ))}
            </div>
        );
    }

}

export default withErrorHandler(Orders,axios);