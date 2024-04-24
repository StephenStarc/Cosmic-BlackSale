import React, { useState } from 'react'
import context from './MyContext'
import { fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
function State(props) {
    const [mode, setMode] = useState('light')
    const [loading, setLoading] = useState(false)
    const toggleMode = () => {
        if(mode == 'light'){
            setMode('dark')
            document.body.style.backgroundColor = rgb(17,24,39)
        }else{
            setMode('light')
            document.body.style.backgroundColor = "white"
        }
    }

    const [products, setProducts] = useState({
      title: null,
      price: null,
      imageUrl: null,
      category: null,
      description: null,
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
  
    })

    const addProduct = async () => {
      if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
        return toast.error('Please fill all fields')
      }
      const productRef = collection(fireDB, "products")
      setLoading(true)
      try {
        await addDoc(productRef, products)
        toast.success("Product Add successfully")
        getProductData()
        closeModal()
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
    }
  
    const [product, setProduct] = useState([]);
  
    // ****** get product
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDB, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productsArray = [];
          QuerySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productsArray)
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getProductData();
    }, []);
  
    const edithandle = (item) => {
      setProducts(item)
    }
    // update product
    const updateProduct = async (item) => {
      setLoading(true)
      try {
        await setDoc(doc(fireDB, "products", products.id), products);
        toast.success("Product Updated successfully")
        getProductData();
        setLoading(false)
        window.location.href = '/dashboard'
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
      setProducts("")
    }
  
    const deleteProduct = async (item) => {
  
      try {
        setLoading(true)
        await deleteDoc(doc(fireDB, "products", item.id));
        toast.success('Product Deleted successfully')
        setLoading(false)
        getProductData()
      } catch (error) {
        // toast.success('Product Deleted Falied')
        setLoading(false)
      }
    }
    
  return (
    <context.Provider value={{mode, toggleMode, loading,setLoading,
      products, setProducts,addProduct,product,edithandle,deleteProduct,updateProduct  }}>
      {props.children}
    </context.Provider>
  )
}

export default State
