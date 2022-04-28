import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import {useState,useEffect} from 'react'
import Comment from './component/Comment';
import Loader from './component/Loader';
import EndMsg from './component/EndMsg';
function App() {
  const[items,setItems]=useState([]);
  const[noMore,setNoMore]=useState(true);
  const[page,setPage]=useState(2)
  useEffect(()=>{
    const getComments=async()=>{
        // const res=await fetch("https://localhost:7117/api/Product?page=1&pageResults=20"
        const res=await fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10"
        );
        const data=await res.json();
        // setItems(data.products)
        setItems(data)
    };
    getComments();
  },[])
  console.log(items);

  const fetchComments=async()=>{
    // const res=await fetch(`https://localhost:7117/api/Product?page=${page}pageResults=3`
    const res=await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
    );
    const data=await res.json();
    // return data.products;
    return data;
};
  const fetchData=async()=>{
   const commentFromServer=await fetchComments();

   setItems([...items,...commentFromServer]);
   if(commentFromServer===0 || commentFromServer <20){
    setNoMore(false);
   } 
   setPage(page+1);
  };
  return (
    <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={noMore}
  loader={<h4><Loader/></h4>}
  endMessage={
    <EndMsg/>
  }
  
>
  <div className='container'>
    <div className='row m-2'>
  {items.map((item,i)=>{
   return <Comment key={item.key} item={item}/>

  })}
  </div>
  </div>
</InfiniteScroll>
  );
}

export default App;
