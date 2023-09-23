import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    useEffect(() =>{
        const getProducts = async () =>{ 
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>

            </>
        )
        
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        
      const products = [
        {
          
          title: " perfume Chanel",
      
          image: "./images/chanel.png",
          price: 200.99,
        },
        {
          
          title: " perfume Dior",
          image: "./images/dior.jpeg",
          price: 145.99,
        },
        {
          
          title: "perfume SAUVEGE",
          image: "./images/saveg.jpg",
          price: 205.99,
        },
        {
          
          title: " perfume OFFICE",
          image: "./images/offic.webp",
          price: 205.99,
        },
        {
          
          title: "Women's clothing Shoes",
          image: "./images/shoes5.jpeg",
          price: 205.99,
        },
        {
          
          title: "Men's clothing Shoes",
          image: "./images/shoes6.jpeg",
          price: 205.99,
        },
        {
          
          title: "watch",
          image: "./images/watch2.jpeg",
          price: 389.56,
        },
        {
          
          title: "watch",
          image: "./images/watch3.jpeg",
          price: 234.4,
        },
        {
          
          title: " Men's clothing Shoes",
          image: "./images/shoes1.jpeg",
          price: 405.34,
        },
        {
          
          title: "Men's clothing Shoes",
          image: "./images/shoes2.jpeg",
          price: 379.9,
        },
        {
          
          title: "Women's clothing  Shoes",
          image: "./images/shoes3.jpeg",
          price: 389.45,
        },
        {
          
          title: "Women's clothing Shoes",
          image: "./images/shoes4.jpg",
          price: 237.77,
        },
        {
          
          title: "jewelery watch",
          image: "./images/watch.jpeg",
          price: 490.80,
        },
        {
          
          title: "jewelery watch",
          image: "./images/watch4.webp",
          price: 560.60,
        },
        {
          
          title: " jewelery Beraslet",
          image: "./images/hand.jpeg",
          price: 475.76,
        },
        {
          
          title: "jewelery Ereing",
          image: "./images/ere.jpeg",
          price: 232.5,
        },
        {
          
          title: " jewelery Nikeless",
          image: "./images/nick.jpeg",
          price: 590.98,
        },
        {
          
          title: "jewelery Ring",
          image: "./images/ring1.jpeg",
          price: 300.50,
        },
        {
          
          title: " jewelery Ring",
          image: "./images/ring2.jpeg",
          price: 240.40,
        },
        {
          
          title: " jewelery Ring",
          image: "./images/ring3.webp",
          price: 240.40,
        },
      ]
        return(
            <>
                  <div className="buttons border-radius: 10px d-flex justify-content-center mb-5 pb-5  " style={{ fontFamily: "Cursive" }}>
                        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's Clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's Clothing")} >Women's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronic")}> Electronic</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}> Jewelery</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("perfume")}>Perfume</button>
                  </div>
                  {filter.map((product)=>{
                    return(
                        <>
                           <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key ={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height ="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p class="card-text lead fw-bold">
                                            ${product.price}
                                        </p>
                                        <NavLink to= { `/products/${product.id}`} class="btn btn-outline-dark">
                                            BUY NOW
                                        </NavLink>
                                    </div>
                               </div>
                           </div>
                        </>
                    )
                  })}
            </>
        );
        
    };

   

        
    return(
        <div > 
            
            <div className="container my-5 py-5" style={{ fontFamily: "Cursive" }}>
                <div className="row">
                    <div className="col-12 mb-5  " >
                        <h1 className="display-6 fw-bolder text-center  ">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                {loading ? <Loading/> : (
                            <>
                                <ShowProducts/>
                                
                            </>
                        )}
                </div>
            </div>

        </div>
    );
}
export default Products;
